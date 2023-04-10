import { styled } from "@/styles";

export const Container = styled('button', {
    width: '100%',
    height: '52px',

    background: '$blue_1',

    fontSize: '16px',
    fontWeight: '700',

    textTransform: 'uppercase',

    border: 'none',
    borderRadius: '8px',

    cursor: 'pointer',

    transition: 'filter 0.2s',
  
    
    '&:hover': {
        filter: 'brightness(0.9)'
    }
})