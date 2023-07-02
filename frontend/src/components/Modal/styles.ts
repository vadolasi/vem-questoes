import { styled } from "@/styles";

export const Container = styled("div", {
    width: "100vw",
    height: "100vh",

    backgroundColor: 'rgba(0,0,0,0.4)',

    position: "absolute",
    zIndex: 2,
    top: 0,
    right: 0,

    display: 'grid',
    placeContent: 'center',
});


export const ModalWindow = styled("div", {
    width: "480px",
    padding: "30px",

    position: 'relative',

    zIndex: 3,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",

    background: '$white_1',
    border: '1px solid $border',
    borderRadius: '15px',

    'h1':{
        fontWeight: 700,
        fontSize: '20px',
        lineHeight: '27px',
    },

    '.Header': {
        width: '100%',

        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        gap: '15px',

        paddingBottom: '10px',
        borderBottom: '1px solid $border',

    },

    '.ExamInfos': {
        width: '100%',

        display: 'grid',
        gridTemplateColumns: '220px 130px',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',

        ".Buttons":{
            display: 'flex',
            alignItems: 'center',
            gap: '17px',

            '.hidden':{
                display: 'none'
            },

            'button':{
                fontSize: '20px',

                cursor: 'pointer',
                transition: '0.3s',

                '&:hover':{
                    color: '$blue_1'
                }
            }
          

        }

    },

    '.Close':{
        position: "absolute",
        top: "7px",
        right: "7px",

        fontSize: '15px',
        transition: '0.3s',

        cursor: 'pointer',

        background: 'none',
        border: 'none'
    },
    
    ".Close:hover":{
        transform: 'scale(1.3)',
        color: '$red',
    },


    '.RunSimulado': {
        width: '100%',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',

        ".ButtonSimulado":{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',

            borderRadius: '15px',
            border: 'none',

            width: '150px',
            padding: '4px 0',
            cursor: 'pointer',

            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '27px',

            background: '$blue_1',

            color: '$text',
            textDecoration: 'none',
            }
        }
    
})