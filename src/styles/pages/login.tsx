import { styled } from "..";

export const Container = styled('div', {
    height: '100vh',
    
    display: 'flex',
    alignItems: 'stretch',
})

export const Background = styled('div', {
  img: {
    flex: 1,

  }
})

export const Form = styled('form', {
    width: '330px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

})