import { styled } from "@/styles"

export const Container = styled("div", {
    width: "300px",
    height: "475px",
    padding: "20px 30px",
    margin: "0 auto",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",

    background: "$white_1",
    border: "1px solid $border",

    borderRadius: "23px",

    'h1': {
        fontWeight: 700,
        fontSize: '24px',
        lineHeight: '33px',
    },

    'img': {
        width: '200px',
        height: '220px',
    }
})