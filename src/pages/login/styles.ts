import { styled } from "../../styles";
import coverImage from '../../assets/LoginCover.png'
export const Container = styled('div', {
    height: '100vh',
    
    display: 'flex',
    alignItems: 'stretch',

    gap: '15vw',
    
    '.form': {
      height: '100vh',
 
      display: 'grid',
      placeContent: 'center',
      paddingRight: '15vw',
    }
})

export const Background = styled('div', {
  width: '550px',
  
  backgroundImage: `url(${coverImage.src})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
})

export const Form = styled('form', {
    width: '330px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    margin: 'auto',

    gap: '24px',

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

      gap: '15px',
    }
})