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


export const Content = styled("div", {
        gridArea: 'content',

        width: "100%",

        padding: "100px 58px",

        h1:{
            textAlign: 'center'
        },

        '.circularGraph':{
            marginTop: '20px',

            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            alignItems: 'center',

            span:{
                fontSize: '16px',
                lineHeight: '20px',

            }
        },
        '.circle':{
            width: '200px',
            height: '200px',
        },


        '@media (max-width: 1200px)':{
                gridTemplateColumns: "auto",
                gridTemplateRows: "auto auto auto",
                gap: '20px',

                padding: "40px 29px"
        },
})
