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
  const [newPassword, setNewPassword] = useState("");

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

          <Button onClick={applyChanges}>Salvar</Button>
        </Form>
      </Content>
    </Layout>
  );
}
