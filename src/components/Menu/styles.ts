import { styled } from "@/styles";

export const Container = styled('ul', {
    gridArea: 'menu',
    padding: "32px 25px",

    listStyle: "none",

    display: "flex",
    flexDirection: "column",

    gap: '13px',

    'li button': {
        width: '100%',

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

    'li button:hover': {
       color: "$blue_1",
       border: "1px solid $blue_1"
    },

    'li button svg': {
        fontSize: '20px',
    }
})