import { FC } from "react"
import Image from "next/image"

import { Container } from "./styles"

import { Button } from "../Button"

interface TableCardInterface{
    picture?: any,
    title: string,
    link: string,
    description: string,
}

export const TableCard: FC<TableCardInterface> = ({picture, title, link, description}) => {
    return(
        <Container>
            <h1>{title}</h1>
            <Image src={picture} alt={description}/>
            <Button text="Acessar"/>
        </Container>
    )
}