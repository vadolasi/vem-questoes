import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'

import { Container } from './styles';

interface SearchInputProps {
    placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({placeholder}) => {
    return (
        <Container>
            <input type="text" placeholder={placeholder}/>
            <AiOutlineSearch/>
        </Container>
    );
};
