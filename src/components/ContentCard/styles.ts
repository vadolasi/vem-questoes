import { styled } from "@/styles";  

export const Container = styled('div', {
    width: '450px',
    height: '500px',

    background: '$white_1',
    border: '1px solid $border',
    borderRadius: '23px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    'h1': {
        width: '100%', 
        padding: '13px 0',

        textAlign: 'center',
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: '27px',

        background: '$blue_2',
        borderRadius: '23px 23px 0 0',
    }
})