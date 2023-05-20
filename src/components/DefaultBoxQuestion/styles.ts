import { styled } from "@/styles"

export const Modal = styled("div", {
    width: "100%",
    padding: "30px 25px",
    marginTop: "42px",

    background: "$white_1",
    border: "1px solid $border",
    borderRadius: "23px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    overflowY: "auto",

    "h1": {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '22px',

        textAlign: "center",
    },
    "img": {
        width: "300px",
        height: "300px",
    },

    'div': {
        marginTop: "0px",
        "h1": {
            marginBottom: "20px",
            fontWeight: 700,
        },
        'img': {
            width: "300px",
            height: "300px",
            margin: 0,
        }
    }
})
