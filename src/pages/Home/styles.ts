import { styled } from '../../styles'

export const Container = styled('div', {
        width: "100vw",
        height: "100vh",

        display: 'grid',
        gridTemplateColumns: '270px auto',
        gridTemplateRows: '100px auto',
        gridTemplateAreas:
        `
        "header header" 
        "menu content"
        `,
});


export const Content = styled('main', {
        gridArea: 'content',

        padding: '42px',

        display: 'grid',
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "50px",


        '@media (max-width: 1050px)':{
                gridTemplateColumns: "auto",
                gridTemplateRows: "auto auto auto auto",
                gap: "15px",
        },
})