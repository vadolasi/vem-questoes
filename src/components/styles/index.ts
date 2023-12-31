import { styled } from '../../styles'

export const Container = styled('div', {
        width: "100%",
        height: "100vh",
        overflowX: "hidden",

        '.hidden': {
          display: 'none'
        },
        '& .focus':{
                gridTemplateColumns: 'auto',
                gridTemplateRows: 'auto',
                gridTemplateAreas:
                `
                "content"
                `,
        },
    '@media (max-width: 1200px)': {
        gridTemplateRows: 'auto',
        gridTemplateAreas:
        `
        "header header"
        "content content"
        `,
      },
      '.box': {
        width: "100%",
        height: "380px",

        display: "grid",
        placeContent: 'center'
      },
      '.circle': {
        width: '200px',
        height: '200px',
      }
});


export const Content = styled('main', {
        gridArea: 'content',

        padding: '42px',

        display: 'flex',
        gap: "50px",
        flexWrap: "wrap"
})

export const OfferCard = styled('div', {
        width: '444px',
        height: '500px',

        margin: "0px auto",

        background: '$white_1',
        border: '1px solid $border',
        borderRadius: '23px',

        '.spin':{
                marginLeft: '40%',
                marginTop: '30%',
        },


        '.Header': {
                height: '122px',
                padding: '16px',
                background: 'linear-gradient(90.64deg, #00CFFF 0.43%, #82E7FF 99.52%)',

                display: 'flex',

                borderRadius: '23px',

                position: 'relative',



                "div": {
                        display: 'flex',
                        flexDirection: "column",
                        alignItems: "flex-start",

                        "h1": {
                                fontWeight: 700,
                                fontSize: '20px',
                                lineHeight: '27px',
                        },

                        "p": {
                                fontWeight: 500,
                                fontSize: '14px',
                                lineHeight: '19px',
                        },

                        "button": {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",

                                width: "250px",

                                marginTop: "12px",

                                padding: "8px 9px",

                                border: 'none',

                                background: 'linear-gradient(90.14deg, #82E7FF 28.46%, rgba(130, 231, 255, 0) 99.9%)',
                                borderRadius: '18px',

                                fontWeight: 700,
                                fontSize: '16px',
                                lineHeight: '22px',

                                cursor: "pointer",

                                "& svg": {
                                        width: "24px",
                                        height: "24px",
                                }
                        }

                },

                'img':{
                        width: '166px',
                        height: '166px',

                        position: 'absolute',
                        bottom: '0px',
                        right: '-25px',
                },

                '.content':{
                        width: "300px",
                        height: "300px",

                        display: "grid",
                        placeContent: "center",


                }
        },
        '@media (max-width: 1200px)': {
                width: '300px',

                'img':{
                        display: "none"
                },

                '.spin':{
                        marginLeft: '35%',
                        marginTop: '40%',
                },
              },

        '@media (max-width: 365px)':{
                width: '230px',
                ".Header":{
                        height: "165px",
                        "div":{
                                "button": {
                                        width: "200px",
                                },
                        }
                }
        }
})
