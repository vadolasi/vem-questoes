import { styled } from "..";
import coverImage from '../../assets/LoginCover.png'
export const Container = styled('div', {
    height: '100vh',
    
    display: 'flex',
    alignItems: 'stretch',
})

export const Background = styled('div', {
  flex: 1,
  
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

    textAlign: 'center',

})