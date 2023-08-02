import { styled } from "@/styles";

export const Container = styled('button', {
    border: '3px solid $blue_2',
    borderRadius: '50%',
    color: '$blue_1',
    fontSize: '30px',

    width: '25px',
    height: '25px',

    display: 'grid',
    placeContent: 'center',

    position: 'fixed',
    bottom: '10px',
    right: '10px',

    cursor: 'pointer',
}) 