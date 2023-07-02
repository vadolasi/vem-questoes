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
        width: "50%",

        gap: '2px',

        'div': {
          display: "flex"
        },

        '.title':{
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '25px',
            border: "1px solid $white_1",
            padding: '0px 5px',
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            maxWidth: "100%",
            overflow: "hidden"
        },
        '.description': {
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '23px',
            textOverflow: "ellipsis",
            border: "1px solid $white_1",
            padding: '0px 5px',
            whiteSpace: "nowrap",
            overflow: "hidden",
            maxWidth: "100%",
        },

        '.edit': {
            border: "1px solid $text",
            borderRadius: "15px",
        },
    },
    '.Questions':{
        width: "25%",
        'h1':{
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '25px',
            textAlign: "center",
        },
    },
    '.Buttons':{
        width: "25%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        gap: '10px',
    },
})
