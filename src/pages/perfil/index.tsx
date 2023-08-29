import Image from "next/image";
import { FiCamera } from "react-icons/fi";

import {
  Container,
  Content,
  Form,
  Avatar,
} from "../../components/styles/perfil";

import { Menu } from "@/components/Menu";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { graphql } from "@/gql";
import { useMutation, useQuery } from "urql";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Layout from "@/components/layout";
import { Select } from "@/components/Select";

const meQuery = graphql(/* GraphQL */ `
  query Me3 {
    me {
      name
      email
      photoUrl
    }
  }
`);

const updateProfileMutation = graphql(/* GraphQL */ `
  mutation UpdateProfile($name: String, $photoUrl: String) {
    updateProfile(name: $name, photoUrl: $photoUrl)
  }
`);

const updatePassowordMutation = graphql(/* GraphQL */ `
  mutation UpdatePassword($oldPassword: String!, $newPassword: String!) {
    updatePassword(oldPassword: $oldPassword, newPassword: $newPassword)
  }
`);

export default function Home() {
  const [{ data, fetching }, re] = useQuery({ query: meQuery });
  const [, executeUpdateProfile] = useMutation(updateProfileMutation);
  const [, executeUpdatePassword] = useMutation(updatePassowordMutation);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [role, setRole] = useState("");

  const [instituicao, setInstituicao] = useState("");
  const [processos, setProcessos] = useState("");
  const [prevGraduacao, setPrevGraduacao] = useState("");
  const [tempo, setTempo] = useState("");
  const [provas, setProvas] = useState("");

  useEffect(() => {
    setName(data?.me?.name!);
  }, [data]);

  const updateProfile = async () => {
    const { error } = await executeUpdateProfile({ name });

    if (error) {
      throw new Error();
    }
  };

  const updatePassword = async () => {
    const { error } = await executeUpdatePassword({
      oldPassword: password,
      newPassword,
    });

    if (error) {
      throw new Error();
    }
  };

  const applyChanges = () => {
    if (name !== data?.me?.name) {
      toast.promise(updateProfile(), {
        pending: "Atualizando dados do perfil",
        error: "Ocorreu um erro ao atualizar os dados do perfil",
        success: "Dados atualizados com sucesso!",
      });
    }

    if (newPassword !== "") {
      toast.promise(updatePassword(), {
        pending: "Atualizando senha",
        error:
          "Ocorreu um erro ao atualizar a senha, verifique se você digitou sua senha atual corretamente",
        success: "Senha atualizada com sucesso!",
      });
    }

    re({ requestPolicy: "cache-and-network" });
  };

  return (
    <Layout page="profile">
      <Content>
        <header></header>
        <Form>
          <Avatar>
            <Image
              src={
                data?.me?.photoUrl ||
                "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
              }
              width={100}
              height={100}
              alt="Foto do usuário"
            />

            <label htmlFor="avatar">
              <FiCamera />
              <input type="file" id="avatar" disabled={fetching} />
            </label>
          </Avatar>

          <div className="flex flex-col w-full gap-2 md:grid md:grid-cols-2">
            <Input
              text="Nome"
              placeholder="Nome"
              type="text"
              value={name}
              onChange={(ev) => setName(ev.currentTarget.value)}
              disabled={fetching}
            />

            <Input
              text="E-Mail"
              placeholder="E-Mail"
              type="text"
              value={data?.me?.email}
              style={{ color: "rgb(200, 200, 200)" }}
              disabled={true}
            />
          </div>

          <Input
            text="Telefone"
            placeholder="ex: 123456789"
            type="text"
            value={number}
            onChange={(ev) => setNumber(ev.currentTarget.value)}
            disabled={fetching}
          />
          <Select
            label="Área de interesse"
            options={[
              {
                value: "residenciaProfissional",
                option: "Residência Profissional",
              },
              { value: "concursosPublico", option: "Concursos Público" },
              {
                value: "whatever",
                option: "Estou me aperfeiçoando, por enquanto.",
              },
            ]}
            onChange={(e) => setRole(e.target.value)}
            value={role}
          />

          {role == "residenciaProfissional" && (
            <>
              <div className="flex flex-col w-full gap-2 md:grid md:grid-cols-2">
                <Input
                  text="Instituição"
                  placeholder="Para qual instituição vai prestar a residência?"
                  type="text"
                  value={instituicao}
                  onChange={(ev) => setInstituicao(ev.currentTarget.value)}
                  disabled={fetching}
                />
                <Input
                  text="Processos"
                  placeholder="Qual ou quais processos seletivos irá fazer?"
                  type="text"
                  value={processos}
                  onChange={(ev) => setProcessos(ev.currentTarget.value)}
                  disabled={fetching}
                />
              </div>
              <Input
                text="Previsão de Formação"
                placeholder="Apenas mês e ano. EX.: 09/30"
                type="text"
                value={prevGraduacao}
                onChange={(ev) => setPrevGraduacao(ev.currentTarget.value)}
                disabled={fetching}
              />
            </>
          )}
          {role == "concursosPublico" && (
            <div className="flex flex-col w-full gap-2 md:grid md:grid-cols-2">
              <Input
                text="Processos"
                placeholder="Qual ou quais processos seletivos irá fazer?"
                type="text"
                value={processos}
                onChange={(ev) => setProcessos(ev.currentTarget.value)}
                disabled={fetching}
              />
              <Input
                text="Tempo de Estudo"
                placeholder="Quanto tempo de estudo você possui ate á prova?"
                type="text"
                value={tempo}
                onChange={(ev) => setTempo(ev.currentTarget.value)}
                disabled={fetching}
              />
            </div>
          )}
          <Input
            text="Provas"
            placeholder="Quantas provas de concurso ou residência você já fez até hoje?"
            type="text"
            value={provas}
            onChange={(ev) => setProvas(ev.currentTarget.value)}
            disabled={fetching}
          />
          <div className="flex flex-col w-full gap-2 md:grid md:grid-cols-2">
            <Input
              text="Senha atual"
              placeholder="Senha atual"
              type="password"
              value={password}
              onChange={(ev) => setPassword(ev.currentTarget.value)}
              disabled={fetching}
            />

            <Input
              text="Nova senha"
              placeholder="Nova senha"
              type="password"
              value={newPassword}
              onChange={(ev) => setNewPassword(ev.currentTarget.value)}
              disabled={fetching}
            />
          </div>
          <Button onClick={applyChanges}>Salvar</Button>
        </Form>
      </Content>
    </Layout>
  );
}
