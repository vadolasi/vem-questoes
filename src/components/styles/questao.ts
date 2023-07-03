import { styled } from "@/styles";


export const Container = styled("div", {
    width: '100vw',
    height: '100vh',
    
    "&::before":{
        content: '',
        width: "100%",
        height: "436px",

        zIndex: -1,

        position: "absolute",
        top: 0,
        left: 0,
        
        background: "$blue_1",
    },

})

export const Page = styled("div", {
    width: "750px",

    margin: "0 auto",


    header: {
        marginTop: '140px',
        width: '417px',

        h1:{
            fontWeight: 400,

            fontSize: '48px',
            lineHeight: '60px',
        
            color: '#FFFFFF',
            marginBottom: '18px', 
        
        },

        p:{
            fontSize: '20px',
            lineHeight: '30px',
        
        
            color: '#FFFFFF'
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

        padding: '64px',

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