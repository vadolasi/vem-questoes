import { styled } from "@/styles";

export const Container = styled("div", {
    width: '100%',
    display: 'flex',
    flexDirection: "column",
    gap: '2px',
    cursor: "pointer",


    "label": {
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '19px',
    },

    "select": {
        fontFamily: "Nunito",
        background: "$white_2",
        color: "$text",

        border: "1px solid $border",
        borderRadius: "8px",

        padding: "6px",

        outline: "none",

        "svg": {
            width: "20px",
            height: "20px",

            color: "$border",
        },

        "option": {
            color: "$text",
        }
    }
})