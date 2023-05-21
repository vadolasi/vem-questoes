import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'

import { Container } from './styles';

interface SearchInputProps {
  placeholder?: string;
  onChange: (value: string) => void
}

export const SearchInput: React.FC<SearchInputProps> = ({ placeholder, onChange }) => {
    return (
        <Container>
            <input type="text" placeholder={placeholder} onChange={ev => onChange(ev.target.value)} />
            <AiOutlineSearch/>
        </Container>
    );
};
