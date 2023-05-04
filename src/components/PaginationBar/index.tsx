import React, { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
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
                <AiOutlineLeft/>
            </Button>
            <Menu>
                {
                currentPage > 1 ? 
                pages
                .slice((currentPage == pages.length? currentPage - 3 : currentPage - 2), currentPage + 1)
                .map((page, index) => (
                    <li 
                    key={index} 
                    className={page == currentPage ? 'current' : ''}>
                        {page}
                    </li>
                )) :
                pages
                .slice((currentPage - 1), currentPage + 2)
                .map((page, index) => (
                    <li 
                    key={index} 
                    className={page == currentPage ? 'current' : ''}>
                        {page}
                    </li>
                ))
                }
            </Menu>
            <Button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage == pages.length}>
                <AiOutlineRight/>
            </Button>
            
        </Container>
    );
};
