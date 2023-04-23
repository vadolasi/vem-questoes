import { styled } from "@/styles"

export const Container = styled("div", {
    display: 'flex',
    alignItems: "center",
    gap: "5px",

    'label': {
        fontFamily: 'Nunito',
        fontWeight: 400,
        fontSize: '14px',
    }
})