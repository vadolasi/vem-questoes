import { styled } from "@stitches/react";

export const Container = styled("div", {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '.profile':{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        gap: '10px',
        width: '100%',
        borderBottom: '2px solid $border',
        marginBottom: '2px',

        img:{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
        }
    },

    button: {
        background: 'none',
        border: 'none',

        fontSize: '16px',

        cursor: 'pointer'
    }


})