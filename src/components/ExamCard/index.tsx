import { FC } from "react"
import Image from "next/image"

import {AiOutlineHourglass, AiOutlineQuestionCircle} from 'react-icons/ai'

import { Container } from "./styles"

interface ExamCardInterface{
    name: string,
    questions: number,
}

export const ExamCard: FC<ExamCardInterface> = ({name, questions}) => {

    function calcTime(questions: number){
        const calcMinutesForExam = 3*questions;
        
        const hours = Math.floor(calcMinutesForExam/60);
        const minutes = calcMinutesForExam % 60;
        
        const textHours = (`00${hours}`).slice(-2);
        const textMinutes=(`00${minutes}`).slice(-2);

        return `${textHours}:${textMinutes}`;
    }

    return(
        <Container>
            <div className="examInfo">
            <p>{name}</p>
            </div>

            <div className="dataInfo">
                <span><AiOutlineHourglass/>{calcTime(questions)}</span>
                <span><AiOutlineQuestionCircle/>{questions}</span>
            </div>

        </Container>
    )
}