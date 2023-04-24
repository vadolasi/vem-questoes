import { styled } from '@/styles';

export const Container = styled("div", {
    display: "flex",
    alignItems: "center",

})

export const Button = styled("button", {
        fontFamily: 'Nunito',
        fontWeight: 700,

        padding: "8px 13px",
        color: "$border",
        background: "$white_1",
        border: "1px solid $border",
        borderRadius: "7px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        cursor: "pointer",

        transition: "0.3s",

        "&:hover":{
            color: "$text",
        },

        "&:disabled": {
            filter: "brightness(0.8)"
        }

})

export const Menu = styled("ul", {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "3px",

    margin: "0px 5px",

    ".current":{
        color: "$white_2",
        background: "$blue_1"
    },

    "li": {
        fontFamily: 'Nunito',
        fontWeight: 700,
        fontSize: '14px',

        padding: "8px 13px",
        background: "$white_1",
        border: "1px solid $border",
        borderRadius: "7px",

        cursor: "pointer",

        transition: "0.3s",
        
        "&:hover":{
            filter: "brightness(0.8)"
        },
    }
})