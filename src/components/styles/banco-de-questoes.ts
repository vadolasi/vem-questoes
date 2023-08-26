import { styled } from "@/styles";

export const Navigation = styled("div", {
    width: "100%",
    marginTop: "42px",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
});


export const GoTo = styled("div", {
    width: '115px',
    position: 'relative',

    padding: '8px 10px',
    border: '1px solid $text',
    borderRadius: '8px',

    display: "flex",
    alignItems: "center",

    '& input': {
        width: '80px',
        background: 'none',
        outline: 'none',
        color: '$text',
        border: "none"
    },

    '& span': {
        width: "max-content",

        position: 'absolute',
        left: '50%',
        top: "-0px",
        transform: 'translate(-50%, -50%)',

        backgroundColor:'$white_2',
        padding: '2px',

        color: '$text',
        textTransform: 'uppercase',

        transition: '0.2s'
    },
    '& button': {
        background: "none",
        border: "none",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        cursor: "pointer",
    },
});

export const QuestionStatement = styled("div", {
    width: "100%",
    marginTop: "42px",

    '.title': {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        position: 'relative',

        "h1":{
            lineHeight: '33px',
        }
    },

    ".questionInfo":{
        ".load":{
            width: '100%',
            height: '70px',

            display: 'grid',
            placeContent: 'center',
        },
        "p":{
            width: "100%",

            lineHeight: '27px',
            textAlign: "justify",

            margin: "18px 0"
        },
        "ul": {
            listStyle: "none",

            display: "flex",
            alignItems: "center",
            gap: "5px",
        },

        'li':{
            display: 'flex',
            aligItems: 'center',
        }
    },

    '.questionAlternatives': {
        marginTop: "20px",

        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",

        gap: "16px",

        ".deleted":{
            opacity: 0.5,
            textDecorationLine: "line-through",
        },


        "& li": {
            display: "flex",
            alignItems: "center",
            gap: "10px",
        },

        "& li:hover .delete":{
            display: "grid",
        }
    }
})

export const QuestionButtons = styled("div", {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    margin: "42px 0px",


    '.resposta': {
        width: "124px",

        "button":{
            border: 'none',
            borderRadius: '8px',

            transition: 'filter 0.2s',


            '&:hover': {
                filter: 'brightness(0.9)'
            }
        }
    },


    ".actionsButton":{
        display: "flex",
        alignItems: "center",

        listStyle: "none",

        gap: "18px",

        'li .open':{
            background: '$blue_2',
        },

        "button": {
            height: '36px',

            background: '$white_1',

            border: '1px solid $border',
            borderRadius: '8px',

            cursor: 'pointer',

            transition: 'filter 0.2s',

            display: "flex",
            alignItems: "center",

            '&:hover': {
                filter: 'brightness(0.9)'
            },

            "span": {
                borderLeft: "1px solid $border",

                height: "100%",
                lineHeight: "36px",

                padding: "0 8px"
            },

            "svg":{
                width: "21px",
                height: "21px",

                margin: "0 8px",
            }
        }
    }
})

export const Search = styled('div', {
    display: "grid",
    gridTemplateColumns: "500px 150px",
    alignItems: "center",
    gap: "17px",

    margin: "0 auto"

})

export const Container = styled('div', {
  width: "100vw",
  height: "100vh",

  display: 'grid',
  gridTemplateColumns: '270px auto',
  gridTemplateRows: '100px auto',
  gridTemplateAreas:
  `
  "header header"
  "menu content"
  `,


  '@media (max-width: 1200px)': {
          gridTemplateRows: 'auto',
          gridTemplateAreas:
          `
          "header header"
          "content content"
          `,
  }
});


export const Content = styled("div", {
  width: "100%",
  gridArea: 'content',
  paddingTop: "33px",
  paddingLeft: "42px",

  '.MatterWrap':{
          width: "1020px",
          margin: "42px auto 20px",

  },

  position: "relative",

  '.hidden': {
          display: "none"
  },

  '@media (max-width: 1200px)': {
          paddingTop: "15px",
          paddingLeft: "15px",
  }
});
