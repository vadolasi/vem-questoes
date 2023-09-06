import { styled } from "@/styles";


export const Container = styled("div", {
    width: '100vw',
    height: '100vh',

})

export const Page = styled("div", {
    width: "750px",

    margin: "0 auto",


    header: {
        width: '417px',
        color: "$blue_1",
        h1:{
            fontWeight: 400,

            fontSize: '48px',
            lineHeight: '60px',
        
            marginBottom: '18px', 
        
        },

        p:{
            fontSize: '20px',
            lineHeight: '30px',
        },
    },

    '.Main':{
        display: "flex",
        flexDirection: "column",

        background: '$white_1',
        width: '750px',

        marginTop: '58px',

        height: '500px',
        borderRadius: '20px',

        padding: '64px',
        
        overflowY: 'auto'
    },

    form: {
        display: "flex",
        flexDirection: "column",

        background: '$white_1',
        width: '750px',

        marginTop: '58px',

        minHeight: '300px',
        borderRadius: '20px',

        gap: '30px',
        

        fieldset: {
            border: 'none',

            '.fieldset-wrapper':{
                display: 'flex',
                flexDirection: 'column',

                gap: '16px',


                legend: {
                    fontSize: '24px',
                    lineHeight: '34px',

                    color: '$text',

                    borderBottom: '1px solid $text',
                    paddingBottom: '16px',
                },

                '.col-3':{
                    display: 'grid',
                    gridTemplateColumns: '100px 250px 250px',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                },

                '.input-wrapper':{
                    display: 'flex',
                    flexDirection: 'column',

                    gap: '8px',

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

                        height: '56px',

                        border: '1px solid $border',
                        borderRadius: '8px',

                        outline: 0,

                        padding: '5px',
                    },

                    select:{
                        background: '#FAFAFC',

                        height: '56px',

                        border: '1px solid $border',
                        borderRadius: '8px',

                        outline: 0,

                        padding: '5px',
                    },

                },

                '.wrapper':{
                    display: 'grid',
                    gridTemplateColumns: '100px 500px',
                    alignItems: 'center',

                    '.checkbox':{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',

                        label: {
                            fontSize: '16px',
                            lineHeight: '24px',
    
                            fontWeight: 'bold',
    
                            color: '#4E4958'
                        },
                        input:{
                            width: '20px',
                            height: '20px'
                        },
                    },
                }
            },
        },
    }
})