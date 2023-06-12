import {styled} from '@/styles'


export const CorrectAnswerContainer = styled("div", {
  width: "100%",
  height: '100%',
  overflow: 'hidden',
  position: 'absolute',
})

export const ContainerFilter = styled("div", {
    width: "100%",
    padding: "16px",

    background: "$white_1",

    border: "1px solid $border",
    borderRadius: "23px",

    display: "flex",
    flexDirection: "column",
    gap: "15px",

    '.inputs':{
        display: 'flex',
        gap: '20px',
    },

    '.Selects':{
        display: 'flex',
        flexWrap: "wrap",
        gap: "10px",
        width: "100%"
    },

    '.buttons': {
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "10px",

        '.filter': {
            color: "$blue_1",
            border: "1px solid $blue_1",
        },
        '.reset': {
            color: "$red",
            border: "1px solid $red",
        },
    },

    '@media (max-width: 1200px)': {
    width: "350px",
    '.Selects':{
        display: 'grid',
        gridTemplateColumns: "150px",
        gridTemplateRows: "auto auto auto auto",
        gap: "10px"
    },
}
});

export const Fieldset = styled("fieldset", {
    border: "none",

    "legend": {
        fontFamily: 'Nunito',
        fontWeight: 700,
        fontSize: '14px',
        lineHeight: '19px',
    }
});

export const ButtonFilter = styled("button", {
    width: '131px',

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2px",

    padding: "3px 10px",

    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '19px',

    borderRadius: "33px",

    background: "transparent",

    cursor: 'pointer',

    transition: "0.2s",

    "&:hover":{
        filter: "brightness(0.8)"
    },

    "svg": {
        width: "20px",
        height: "20px",
    },


})


export const ContainerPagination = styled("div", {
  display: "flex",
  alignItems: "center",

})

export const ButtonPagination = styled("button", {
      fontFamily: 'Nunito',
      fontWeight: 700,

      height: '42px',
      width: '42px',
      color: "$border",
      background: "$white_1",
      border: "1px solid $border",
      borderRadius: "7px",

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      cursor: "pointer",

      transition: "0.3s",

      "&:hover":{
          color: "$text",
      },

      "&:disabled": {
          filter: "brightness(0.8)"
      }

})

export const MenuPagination = styled("ul", {
  listStyle: "none",
  display: "flex",
  alignItems: "center",
  gap: "3px",

  margin: "0px 5px",

  ".current":{
      color: "$white_2",
      background: "$blue_1"
  },

  "button": {
      fontFamily: 'Nunito',
      fontWeight: 700,
      fontSize: '20px',

      height: '42px',
      width: '42px',
      background: "$white_1",
      border: "1px solid $border",
      borderRadius: "7px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",

      cursor: "pointer",

      transition: "0.3s",

      "&:hover":{
          filter: "brightness(0.8)"
      },
  }
})
