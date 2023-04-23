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
        width: "100%",
        gridArea: 'content',
        paddingTop: "33px",
        paddingLeft: "42px",

        '.MatterWrap':{
                width: "1020px",
                margin: "42px auto 20px",
        
        }
});

export const MatterMenu = styled("ul", {
        listStyle: "none",

        display: "flex",
        alignItems: "center",
        gap: "15px",

        overflowX: "auto",
        
        paddingBottom: "10px",
})
