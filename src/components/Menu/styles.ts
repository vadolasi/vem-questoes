import { styled } from "@/styles";

export const Container = styled('ul', {
    gridArea: 'menu',
    padding: "32px 25px",

    listStyle: "none",

    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.05);',
    clipPath: 'inset(0px -15px 0px 0px)',

    gap: '13px',

    'li': {
      width: '100%',
    },

    'li a': {
        width: '100%',

        textDecoration: "none",
        color: "$text",

        background: 'none',

        display: "flex",
        alignItems: 'center',
        gap: '8px',

        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '22px',

        padding: "12px 9px",

        border: "1px solid transparent",
        borderRadius: "29px",

        transition: "0.3s",

        cursor: "pointer",
    },

    'li a:hover': {
       color: "$blue_1",
       border: "1px solid $blue_1"
    },

    "li .page":{
        color: "$blue_1",
        border: "1px solid $blue_1"
    },

    'li a svg': {
        fontSize: '20px',
    },

    'li:last-child':{
        width: '240px',
        height: '140px',

        padding: 0,
        border: 'none',

        'img':{
            width: '100%',
            height: "100%"
        },
        '& a':{
            padding: 0,
            border: 'none',
        },

        '& a:hover': {
            border: 'none'
        }
    }
})
