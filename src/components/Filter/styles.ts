import {styled} from '@/styles'


export const Container = styled("div", {
    width: "930px",
    padding: "16px",

    margin: "0 auto",

    background: "$white_1",

    border: "1px solid $border",
    borderRadius: "23px",

    display: "flex",
    flexDirection: "column",
    gap: "15px",

    '.inputs':{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
    },

    '.Selects':{
        display: 'flex',
        gap: "10px"
    },

    '.buttons': {
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "10px",

        '.filter': {
            color: "$blue_1",
            border: "1px solid $blue_1",
        },
        '.reset': {
            color: "$red",
            border: "1px solid $red",
        },
    },

    '@media (max-width: 1200px)': {
    width: "350px",
    '.Selects':{
        display: 'flex',
        gap: "10px"
    },
}
});

export const Fieldset = styled("fieldset", {
    border: "none",

    "legend": {
        fontFamily: 'Nunito',
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '19px',
    }
});

export const Button = styled("button", {
    width: '131px',

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2px",

    padding: "3px 10px",

    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '19px',

    borderRadius: "33px",

    background: "transparent",

    cursor: 'pointer',

    transition: "0.2s",

    "&:hover":{
        filter: "brightness(0.8)"
    },

    "svg": {
        width: "20px",
        height: "20px",
    },


})
