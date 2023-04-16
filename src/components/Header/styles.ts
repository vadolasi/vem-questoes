import { styled } from "@/styles";

export const Container = styled('header', {
    width: '100%',
    padding: '23px 42px',

    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-between',


    '.Profile': {
        display: "flex",
        alignItems: "center",
        gap: '10px',

        padding: '2px 15px 2px 2px',
        
        background: "$white_1",

        border: '1px solid $border',
        borderRadius: '23px',


        'img':{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
        },

        'p':{
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '22px',
        },

        'button': {
            background: 'none',
            border: 'none',

            display: 'grid',
            placeContent: 'center',

            fontSize: '24px',

            transition: '0.3s',
        },

        'button:hover': {
            cursor: 'pointer',
        },

    }
    
})