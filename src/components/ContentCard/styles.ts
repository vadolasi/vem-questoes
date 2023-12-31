import { styled } from "@/styles";  

export const Container = styled('div', {
    width: '500px',
    height: '500px',

    background: '$white_1',
    border: '1px solid $border',
    borderRadius: '23px',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    filter: 'drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.15))',

    margin: "0 auto",

    'h1': {
        width: '100%', 
        padding: '13px 0',

        textAlign: 'center',
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: '27px',

        background: '$blue_2',
        borderRadius: '23px 23px 0 0',
    },

    
    
    '@media (max-width: 1200px)': {
        width: '350px',
      },
    '@media (max-width: 365px)':{
        width: '230px',
    }
})


export const Menu = styled("div", {
    width: "100%",
    padding: "24px 18px",

    overflowY: "auto",

    '.spin':{
        marginLeft: '40%',
        marginTop: '30%',
},



   '@media (max-width: 1200px)': {
    '.spin':{
        marginLeft: '35%',
        marginTop: '40%',
   },
  }
    
})