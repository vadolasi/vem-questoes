import { styled } from "@/styles";

export const Container = styled("div", {
    width: "100vw",
    height: "100vh",

    backgroundColor: 'rgba(0,0,0,0.4)',

    position: "absolute",
    zIndex: 2,
    top: 0,
    right: 0,

    display: 'grid',
    placeContent: 'center',
});


export const ModalWindow = styled("div", {
    width: "480px",
    padding: "30px",

    position: 'relative',

    zIndex: 3,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",

    background: '$white_1',
    border: '1px solid $border',
    borderRadius: '15px',
    'button':{
        background: "none",
        border: "none"
    },

    '.Close':{
        position: "absolute",
        top: "7px",
        right: "7px",

        fontSize: '15px',
        transition: '0.3s',

        cursor: 'pointer',
    },
    
    ".Close:hover":{
        transform: 'scale(1.3)',
        color: '$red',
    }
    
})