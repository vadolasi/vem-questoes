import { globalCss } from ".";

export const globalStyles = globalCss({
'*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
},

html: {
    scrollBehavior: 'smooth',
},

body: {
    '-webkit-font-smoothing': 'antialised',
},


'body, input, textarea, button': {
    fontFamily: 'Nunito',
    fontWeight: 400,
    
},

'*::-webkit-scrollbar': {
    width: '7px',
},

'*::-webkit-scrollbar-thumb': {
    backgroundColor: '$blue_1',
    borderRadius: '20px',
}


})