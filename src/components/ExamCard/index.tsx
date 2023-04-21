import { FC } from "react"
import Image from "next/image"

import {AiOutlineHourglass, AiOutlineQuestionCircle} from 'react-icons/ai'

import { Container } from "./styles"

interface ContentCardInterface{
    name: string,
    time: string,
    questions: number,
}

export const ExamCard: FC<ContentCardInterface> = ({name, time, questions}) => {
    return(
        <Container>
            <div className="examInfo">
            <p>{name}</p>
            </div>

            <div className="dataInfo">
                <span><AiOutlineHourglass/>{time}</span>
                <span><AiOutlineQuestionCircle/>{questions}</span>
            </div>

        </Container>
    )
}