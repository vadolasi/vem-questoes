import { FC } from "react"
import { useRouter } from "next/navigation"

import {AiOutlineHourglass, AiOutlineQuestionCircle} from 'react-icons/ai'

import { Container } from "./styles"

interface ExamCardInterface{
    id: string,
    name: string,
    questions: number,
}

export const ExamCard: FC<ExamCardInterface> = ({id, name, questions}) => {
    const router = useRouter();
    function calcTime(questions: number){
        const calcMinutesForExam = 3*questions;

        const hours = Math.floor(calcMinutesForExam/60);
        const minutes = calcMinutesForExam % 60;

        const textHours = (`0${hours}`).slice(-2);
        const textMinutes=(`0${minutes}`).slice(-2);

        return `${textHours}:${textMinutes}`;
    }

    return(
        <Container onClick={() => router.push(`/simulados/${id}`)}>
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
