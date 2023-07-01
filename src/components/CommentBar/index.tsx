import React from 'react';
import { Container } from './styles';
import { AiOutlineSend } from 'react-icons/ai'

interface CommentBarProps {
  onClick?: any,
  value?: string,
  onChange?: any,
}

export const CommentBar: React.FC<CommentBarProps> = ({ onClick, value, onChange }) => {
    return (
      <Container>
        <input type='text' value={value} onChange={onChange} placeholder='Faça um comentário'/>
        <button onClick={onClick}><AiOutlineSend/></button>
      </Container>
  )
};

