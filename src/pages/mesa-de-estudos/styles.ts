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


export const Content = styled("div", {
        gridArea: 'content',

        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '37px',


        padding: "100px 58px",

        
        '@media (max-width: 1050px)':{
                gridTemplateColumns: "auto",
                gridTemplateRows: "auto auto auto",
                gap: '20px',

                padding: "40px 29px"
        },
})
