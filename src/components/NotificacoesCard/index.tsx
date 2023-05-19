import React, { ReactNode } from 'react';

import { Container } from './styles';

interface NotificacoesCardProps {
    children?: ReactNode
}

const NotificacoesCard: React.FC<NotificacoesCardProps> = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    );
};

export default NotificacoesCard;