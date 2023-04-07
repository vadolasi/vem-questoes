import { globalCss } from ".";

export const globalStyles = globalCss({
'*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
},

body: {
'-webkit-font-smoothing': 'antialised',
},


'body, input, textarea, button': {
    fontFamily: 'Nunito',
    fontWeight: 400,
    
}


})