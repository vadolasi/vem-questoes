import { FC } from "react"
import Image from "next/image"

import {AiOutlineCheck, AiOutlineQuestionCircle, AiOutlinePercentage} from 'react-icons/ai'

import { Container } from "./styles"

import userProfile from '../../assets/profile/userProfile.svg'

interface UserCardInterface{
    position: number,
    picture?: any,
    name: string,
    goals: number,
    questions: number,
}

export const UserCard: FC<UserCardInterface> = ({position, picture, name, goals, questions}) => {
    return(
        <Container>

            <div className="userInfo">
            <p>{position}º</p>
            <Image src={userProfile}  alt=""/>
            <p>{name}</p>
            </div>

            <div className="examInfo">
                <span><AiOutlineCheck/>{goals}</span>
                <span><AiOutlineQuestionCircle/>{questions}</span>
                <span><AiOutlinePercentage/>{(100*goals/questions).toFixed(2) || 0}</span>
            </div>

        </Container>
    )
}
