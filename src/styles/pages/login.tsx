import { styled } from "..";
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
    width: 'clamp(200px, 250px + 10vw, 330px)',
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
})