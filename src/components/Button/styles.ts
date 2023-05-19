import { styled } from "@/styles";


export const Container = styled("div", {
    width: "100%",
    height: "52px",
    "a": {
        width: '100%',
        height: '52px',
        color: "$text",
        textDecoration: "none",
    }

})

export const ButtonTT = styled('button', {
    width: '100%',
    height: '52px',
    alignItems: 'center',
    flexDirection: 'center',

    background: '$blue_1',

    fontSize: '16px',
    fontWeight: '700',

    border: 'none',
    borderRadius: '8px',

    cursor: 'pointer',

    transition: 'filter 0.2s',

    '&:hover': {
        filter: 'brightness(0.9)'
    }
})
