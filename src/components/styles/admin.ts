import { styled } from "@/styles";


export const Container = styled("div", {
    width: '100vw',
    height: '100vh',
    
    display: 'grid',
    placeContent: 'center',

    gridTemplateColumns: '150px 150px',
    gridTemplateRows: '150px 150px',

    gap: '5px'
})