import { styled } from "@/styles"

export const Modal = styled("div", {
    width: "929px",
    height: "526px",

    padding: "30px 25px",

    position: "absolute",
    left: '50%',
    top: "0",
    transform: 'translate(-50%, 50%)',

    zIndex: '2',

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