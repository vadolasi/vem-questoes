import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import { Container, Button, Menu } from './styles';

interface PaginationBarProps {
    pages: number[];
}

export const PaginationBar: React.FC<PaginationBarProps> = ({pages}) => {
    const [currentPage, setCurrentPage] = useState(1);
    

    useEffect(() => {
        console.log(currentPage)
    }, [currentPage]);

    return (
        <Container>
            <Button onClick={() => setCurrentPage(currentPage - 1)}  disabled={currentPage == pages[0]}>
                <AiOutlineArrowLeft/>
            </Button>
            <Menu>
                {pages
                .map((page, index) => (
                    <li 
                    key={index} 
                    className={page == currentPage ? 'current' : ''}>
                        {page}
                    </li>
                ))}
            </Menu>
            <Button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage == pages.length}>
                <AiOutlineArrowRight/>
            </Button>
            
        </Container>
    );
};
