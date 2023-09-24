import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql"
import { Resend } from "resend"
import { Service } from "typedi"
import { UsersService } from "./users.service"
import { Role, User } from "./models/user.model"
import { CurrentUserID } from "../auth"
import { nanoid } from "nanoid/async"
import mjml2html from "mjml"
import ejs from "ejs"
import { Filter } from "./models/filtro.model"

const resend = new Resend(process.env.RESEND_TOKEN)

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

  @Query(_returns => [User])
  @Authorized()
  async users() {
    return await this.usersService.getUsers()
  }

  @Mutation(_returns => Boolean)
  @Authorized()
  async deleteUser(
    @Arg("id") userId: string
  ) {
    return await this.usersService.deleteUser(userId)
  }

  @Mutation(_returns => User)
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

              <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Olá <%= name %>! <%= user %> está te convidando para entrar no Vem Questões!</mj-text>

              <mj-text font-size="20px" color="#F45E43" font-family="helvetica">
                <a href="https://vem-questoes.apps.vadolasi.dev/login" target="_blank">Clique aqui para acessar</a>, faça login com esse email, e com a seguinte senha: <%= password %>
              </mj-text>

              <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Você pode mudar de senha, através da aba "Perfil", ou clicando em "Esqueci minha senha"</mj-text>

            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    `
    const user = await this.usersService.getById(userId)
    const password = await nanoid(12)
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

  @Mutation(_returns => Boolean)
  @Authorized()
  async updateProfile(
    @CurrentUserID() userId: string,
    @Arg("name", { nullable: true }) name?: string,
    @Arg("photoUrl", { nullable: true }) photoUrl?: string
  ) {
    return await this.usersService.updateUser(userId, name, photoUrl)
  }

  @Mutation(_returns => Boolean)
  @Authorized()
  async updatePassword(
    @CurrentUserID() userId: string,
    @Arg("oldPassword") oldPassword: string,
    @Arg("newPassword") newPassword: string
  ) {
    return await this.usersService.updatePassword(userId, oldPassword, newPassword)
  }

  @Mutation(_returns => String)
  @Authorized()
  async createFiltro(
    @CurrentUserID() userId: string,
    @Arg("name") name: string,
    @Arg("busca") busca: string
  ) {
    return await this.usersService.createFiltro(userId, name, busca)
  }

  @Mutation(_returns => Boolean)
  @Authorized()
  async deleteFiltro(
    @CurrentUserID() userId: string,
    @Arg("id") busca: string
  ) {
    return await this.usersService.deleteFiltro(userId, busca)
  }

  @Query(_returns => [Filter])
  @Authorized()
  async filtros(
    @CurrentUserID() userId: string
  ) {
    return await this.usersService.buscas(userId)
  }
}
