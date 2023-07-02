import {styled} from '@/styles'


export const Container = styled("div", {
    width: "930px",
    padding: "16px",

    margin: "0 auto",

    background: "$white_1",

    border: "1px solid $border",
    borderRadius: "23px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",


    '.TimerContainer': {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
        
        '.Timer span':{
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '55px',
        },

        'svg':{
            width: '50px',
            height: '50px',

            color: '$blue_1'
        },

        'button':{
            background: 'none',
            border: 'none',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

            transition: '300ms',

            cursor: 'pointer',

            '&:hover':{
                filter: 'brightness(0.9)'
            },

            'svg':{
                width: '40px',
                height: '40px',
            },
        }
    },

});
