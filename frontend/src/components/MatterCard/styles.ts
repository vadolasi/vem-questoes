import { styled } from "@/styles";
import { relative } from "path";

export const Container = styled("div", {
    width: "200px",
    height: "150px",

    border: "1px solid $border",

    borderRadius: "7px",

    background: "$white_1",
    
    position: 'relative',

    "a": {
        color: "$text",
        textDecoration: "none"
    },

    "div": {
        width: "100%",
        height: "26px",

        background: "red",

        borderRadius: "7px 7px 0 0",
    }, 

    "h1": {
        fontFamily: 'Nunito',
        fontStyle: 'normal',
        fontWeight: 800,
        fontSize: '20px',

        margin: "19px 20px"
    },

    "span": {
        fontWeight: 400,
        fontSize: '11px',
        lineHeight: '15px',

        position: 'absolute',
        bottom: "15px",
        left: '15px',

        
    }
})