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

        '@media (max-width: 1200px)': {
                gridTemplateRows: 'auto',
                gridTemplateAreas:
                `
                "header header"
                "content content"
                `,
        }
});


export const Content = styled('main', {
        gridArea: 'content',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",


})
export const Search = styled('div', {
        display: "grid",
        gridTemplateColumns: "500px 150px",
        alignItems: "center",
        justifyContent: "center",
        width: "800px",
        gap: "17px",

        marginTop: "32px",
        
})