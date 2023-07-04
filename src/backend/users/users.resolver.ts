import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql"
import { Resend } from "resend"
import { Service } from "typedi"
import { UsersService } from "./users.service"
import { Role, User } from "./models/user.model"
import { CurrentUserID } from "../auth"
import { nanoid } from "nanoid/async"
import mjml2html from "mjml"
import ejs from "ejs"

const resend = new Resend("re_jZkCq85i_419wLdJGHpdk5njyHCYbJm7K")

@Service()
@Resolver()
export class UserResolver {
  constructor(
    private readonly usersService: UsersService
  ) {}

  @Query(() => User, { nullable: true })
  @Authorized()
  async me(@CurrentUserID() userId: string) {
    return this.usersService.getById(userId)
  }

  @Query(() => [User], { nullable: true })
  @Authorized()
  async leaderBoard() {
    return this.usersService.leaderBoard()
  }

  @Mutation(returns => User)
  @Authorized()
  async createUser(
    @Arg("email") email: string,
    @Arg("name") name: string,
    @Arg("password") password: string,
    @Arg("role") role: Role
  ) {
    return await this.usersService.createUser(name, email, password, role)
  }

  @Query(returns => [User])
  @Authorized()
  async users() {
    return await this.usersService.getUsers()
  }

  @Mutation(returns => Boolean)
  @Authorized()
  async deleteUser(
    @Arg("id") userId: string
  ) {
    return await this.usersService.deleteUser(userId)
  }

  @Mutation(returns => User)
  @Authorized()
  async inviteUser(
    @Arg("email") email: string,
    @Arg("name") name: string,
    @Arg("role") role: Role,
    @CurrentUserID() userId: string
  ) {
    const template = `
      <mjml>
        <mj-body>
          <mj-section>
            <mj-column>

              <mj-text font-size="40px" color="#F45E43" font-family="helvetica">Vem Questões</mj-text>

              <mj-divider border-color="#F45E43"></mj-divider>

              <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Olá <$= name %>! <%= user %> está te convidando para entrar no Vem Questões!</mj-text>

              <mj-text font-size="20px" color="#F45E43" font-family="helvetica">
                <a href="https://vem-questoes.apps.vadolasi.dev/login" target="_blank">Clique aqui para acessar</a>, faça login com esse email, e com a seguinte senha: <%= password %>
              </mj-text>

              <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Você pode mudar de senha, clicando em "Esqueci minha senha"</mj-text>

            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    `
    const user = await this.usersService.getById(userId)
    const password =  await nanoid(12)
    const newUser = await this.usersService.createUser(name, email, password, role)
    const mjmlTemplate = await ejs.render(template, { name, user: user!.name, password }, { async: true })
    const finalTemplate = mjml2html(mjmlTemplate).html

    await resend.emails.send({
      from: "naoresponder@vem-questoes.vadolasi.dev",
      to: email.trim().toLowerCase(),
      subject: "Entre no Vem Questões!",
      html: finalTemplate
    })

    return newUser
  }
}
