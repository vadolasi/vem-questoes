import { useState } from "react";

import { Container, Content } from "../../components/styles/admin"
import { AdminMenu } from "@/components/AdminMenu";
import { Header } from "@/components/Header";


export default function Admin() {
  return (
    <Container>
     <Header/>
     <AdminMenu page="home"/>

    </Container>
  )
}
