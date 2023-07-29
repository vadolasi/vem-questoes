import { styled } from "@/styles";


export const Container = styled("div", {
    width: '300px',

    display: 'flex',
    flexDirection: "column",
    alignItems: 'center',
    gap: '15px',
    

    background: '$white_1',
    padding: '10px 15px',
    borderRadius: '5px',

    position: 'absolute',
    bottom:'-390px',
    right: 0,

    boxShadow: '2px 2px 4px rgba(0,0,0,0.5)',

    '& .hidden':{
        display: 'none'
    },
    '.input-wrapper':{
        display: 'flex',
        flexDirection: 'column',

        gap: '5px',

        width: '100%',

        label: {
            fontSize: '14px',
            lineHeight: '24px',

            fontWeight: 'bold',

            color: '#4E4958'
        },

        textarea: {
            background: '#FAFAFC',

            height: '112px',

            border: '1px solid $border',
            borderRadius: '8px',

            outline: 0,

            resize: 'none',

            padding: '10px',
        },

        input: {
            background: '#FAFAFC',

            height: '48px',

            border: '1px solid $border',
            borderRadius: '8px',

            outline: 0,

            padding: '3px 5px',
        },
    },
})