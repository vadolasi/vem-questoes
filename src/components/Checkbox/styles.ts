import { styled } from "@/styles"

export const Container = styled("div", {
    display: 'flex',
    alignItems: "center",
    gap: "5px",
    marginTop: "5px",

    'label': {
        fontFamily: 'Nunito',
        fontWeight: 400,
        fontSize: '14px',
    },

    'input': {
        width: '18px',
        height: '18px',

        border: "1px solid $border",
        outline: "none",
    }
})