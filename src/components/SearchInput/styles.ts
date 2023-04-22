import { styled } from "@/styles";

export const Container = styled("div", {
    width: '100%',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '$white_2',
    color: '$border',
    border: '1px solid $border',

    borderRadius: '23px',
    fontSize: "20px",

    padding: '12px',

    "svg": {
        marginLeft: "16px",
    },

    'input': {
        width: '100%',
        color: '$text',
        background: 'transparent',
        border: 0,
        outline: 0,
       ' &::placeholder': {
            color: '$border',
        }
    }  
})