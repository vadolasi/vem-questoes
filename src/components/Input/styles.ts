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
        left: '10px',
        top: '-11px',
        backgroundColor:'$white_1',
        padding: '5px',
        fontSize: '12px',
        color: '$text',
        textTransform: 'uppercase',
        transition: '0.2s'
    },


    });