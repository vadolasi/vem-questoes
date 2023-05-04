import { styled } from "@/styles"

export const Container = styled("div", {
    width: "100%",
    padding: "8px",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    borderBottom: "1px solid $border",
    'button, input': {
        background: "none",
        border: "none",
        outline: "none",
    },
    'button': {
        fontSize: "22px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        cursor: "pointer",
        
        transition: "300ms",
    },
    'button:hover': {
        color: "$blue_1"
    },

    '.Titulos':{    
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: 'center',

        gap: '2px',

        '.title':{
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '25px',

            border: "1px solid $white_1",
            padding: '0px 5px',
        },
        '.description': {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '23px',

            border: "1px solid $white_1",
            padding: '0px 5px',
        },

        '.edit': {
            border: "1px solid $text",
            borderRadius: "15px",
        },
    },
    '.Questions':{    
        'h1':{
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '25px',
            textAlign: "center",
        },
    },
    '.Buttons':{    
        display: "flex",
        alignItems: "center",
        gap: '10px',
    },

})