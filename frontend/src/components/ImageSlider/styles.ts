import { styled } from "@/styles";

export const Container = styled("div", {
    '.slider': {
        height: '100%',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        gap: "10px",

        padding: "10px",

        marginTop: "20px"
      },
      
      '.image': {
        width: '300px',
        height: '250px',
        borderRadius: '10px',
      },
      
      '.right-arrow': {
        fontSize: '1.5rem',
        color: '$blue_1',
        zIndex: '10',
        cursor: 'pointer',
        userSelect: 'none',
      },
      
      '.left-arrow': {
        fontSize: '1.5rem',
        color: '$blue_1',
        zIndex: '10',
        cursor: 'pointer',
        userSelect: 'none',
      },
      
      '.slide': {
        display: "none",
        transitionDuration: '1s ease',
      },
      
      '.slide.active': {
        display: "block",
        transitionDuration: '1s',
        transform: 'scale(1.08)',
      }
})