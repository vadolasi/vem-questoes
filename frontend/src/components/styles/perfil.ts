import { styled } from '../../styles'

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

        overflowX: "hidden"
})


export const Content = styled('div', {
        width: '100%',

        '> header': {
            width:' 100%',
            height: '140px',
            background: '$blue_2',
            'a':{
                fontSize: '16px',
            }
        }
            
})


export const Form = styled('form', {
        maxWidth: '350px',

        margin: "-104px auto 0",

        '>div:nth-child(4)': {
                marginTop: '24px',
        },

        'div span':{
              background: "$white_2"  
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px"
})


export const Avatar = styled("div", {
        position: 'relative',
        margin: '0 auto 32px',
        width: '186px',
        height: '186px',
        '>img': {
            width: '186px',
            height: '186px',
            borderRadius: '50%',
        },

        '>label':{
            width: '48px',
            height: '48px',
            backgroundColor: '$blue_2',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: '7px',
            right: '7px',
            cursor: 'pointer',

        'input':{
            display: 'none',
        },
        'svg': {
            width: '20px',
            height: '20px',
            color:' $white_2',
        }
        }
})
  
