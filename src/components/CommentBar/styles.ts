import { styled } from "@/styles";

export const Container = styled("div", {
    width: '550px',
    position: 'relative',

    padding: '8px 10px',
    border: '1px solid $border',
    borderRadius: '8px',

    display: "flex",
    alignItems: "center",

    background: "$white_2",

    '& input': {
        width: '100%',
        background: 'none',
        outline: 'none',
        color: '$text',
        fontSize: '15px',
        border: "none"
    },
    

    '& button': {
        background: "none",
        border: "none",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        cursor: "pointer",
        
        fontSize: "20px"
    },
});