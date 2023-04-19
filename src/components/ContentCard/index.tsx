import { FC } from "react"

import { Container } from "./styles"

interface ContentCardInterface{
    title: string,
    children: any,
}

export const ContentCard: FC<ContentCardInterface> = ({children, title}) => {
    return(
        <Container>
            <h1>{title}</h1>
            <div>
            {children} 
            </div>   
        </Container>
    )
}