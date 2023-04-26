import { styled } from "@/styles";

export const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    marginTop: "100px",

    'h1': {
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: '27px',
    },

    "img": {
        width: "400px",
        height: "400px",

        margin: "100px"

    }
})