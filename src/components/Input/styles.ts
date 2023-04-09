import { styled } from "@/styles";

export const Container = styled('div', {
    width: '100%',
    position: 'relative',


    '& input': {
        width: '100%',
        padding: '16px 20px',
        border: '1px solid $border',
        background: 'none',
        borderRadius: '8px',
        outline: 'none',
        color: '$text',
        fontSize: '15px'
    },
    
    '& span': {
        position: 'absolute',
        left: '20px',
        top: '16px',
        fontSize: '15px',
        color: '$text',
        textTransform: 'uppercase',
        transition: '0.2s'
    },

    '& input:valid ~ span, & input:focus ~ span': {
        color: '$text',
        transform: 'translateX(11px) translateY(-12px)',
        fontSize: '12px',
        top: 0,
        left: 0,
        padding: '5px',
        background: '$white_1',
    }

    });