import { styled } from "@/styles"

export const Container = styled("div", {
    width: '100%',
    marginBottom: "5px",

    '.hidden':{
        display: "none"
    },

    '.active':{
        background: "$blue_2"
    }

})

export const MatterInfo = styled("button", {
    width: "100%",
    display: 'flex',
    alignItems: "center",
    justifyContent: "space-between",

    padding: "13px 22px",

    border: "1px solid $border",
    borderRadius: "15px",

    background: "$white_2",

    transition: "300ms",

    cursor: "pointer",


    "&:hover":{
        background: "$blue_2"
    },

    "h1": {
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: '27px',

        width: '200px',
        textAlign: 'start',
    },

    'span': {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '22px',

        display: "flex",
        alignItems: "center",
        gap: "5px",

    },

    'span svg': {
        width: "21px",
        height: "21px",
    }
})

export const SpecificInfos = styled("div", {
    width: "100%",

    "div":{
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        padding: "5px 22px",

        borderBottom: "1px solid $border"
    }
})