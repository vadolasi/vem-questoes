import { styled } from "../../styles";
import coverImage from '../../assets/LoginCover.png'
export const Container = styled('div', {
    height: '100vh',
    width: '100vw',

    display: 'flex',
    alignItems: 'stretch',
    gap: '10px',
    
    '.form': {
      height: '100vh',
      width: '100vw',

 
      display: 'grid',
      placeContent: 'center',
    },

})

export const Background = styled('div', {
  width: '1200px',
  
  backgroundImage: `url(${coverImage.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  '@media (max-width: 650px)': {
    display: 'none',
  }
})

export const Form = styled('form', {
    width: '480px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',


    gap: '45px',

    textAlign: 'center',

    padding: '44px 39px',
    backgroundColor: '$white_1', 
    border: `1px solid $border`,
    borderRadius: '28px',

    boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.15)',

    '.InputWrapper': {
      width: "100%",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: 'center',

      gap: '25px',
    },


    '@media (max-width: 650px)': {
      width: '330px',
    }

})