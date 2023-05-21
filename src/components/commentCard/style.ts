import { styled } from "@/styles";

export const Container = styled("div", {
    width: '450px',
    
    header:{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        justifyContent: 'space-between',

        borderBottom: '1px solid $border',

        '.info':{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',


            p:{
                fontSize: '14px',
                lineHeight: '19px',
            },

            img:{
                width: '36px',
                height: '36px',
    
                borderRadius: '50%',
            },
        },

        '.hora':{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',

            span:{
                fontWeight: 700,
                fontSize: '12px',
                lineHeight: '16px',
                color: '#B2BFBA',
            },
        },
    },


    '.content':{
        padding: '10px',

        p:{
            width: '100%',
            wordBreak: 'break',
            fontSize: '14px',
            lineHeight: '19px',

        }
    }
})