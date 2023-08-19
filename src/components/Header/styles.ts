import { styled } from "@/styles";

export const Container = styled('header', {
    width: '100%',
    padding: '23px 42px',

    zIndex: 3,

    display: "flex",
    justifyContent: 'space-between',

    gridArea: 'header',
    border: '1px solid $white_1',
    borderBottomWidth: '1px',

    "& .hidden":{
        display: 'none',
    },
    ".Logo": {
        width: "85px",
        height: "56px"
    },

    ".show": {
        display: "flex"
    },
    ".hidden": {
        display: "none"
    },

    '.Mobile': {
        display: 'none',
        zIndex: 4,
    },


    '@media (max-width: 1200px)': {
        '.Mobile':{
            display: 'flex',
            zIndex: 4,
        }
      }

});

export const Profile = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    background: "$white_1",
    border: '1px solid $border',
    borderRadius: '23px',

    height: "max-content",

    position: 'relative',

    'button:hover, a:hover':{
        cursor: 'pointer',
        color: "$blue_1"
    },

    '.notificacoes':{
        width: '25px',
        height: '25px',

        cursor: 'pointer',

        position: "absolute",
        top: '15px',
        left: '-30px',
    },

    '.notificacoesBox':{
        width: '350px',
        height: '300px',

        cursor: 'pointer',

        position: "absolute",
        top: '-5px',
        left: '-390px',

        zIndex: 10,

        border: '1px solid $border',
        borderRadius: '4px',

        padding: '10px',
        background: '$white_1',

        boxShadow: '4px 4px 14px rgba(0,0,0,0.5)',

        h1:{
            fontSize: '18px',
            lineHeight: '20px',

            borderBottom: '1px solid black',
            paddingBottom: '5px'

        },

        '@media (max-width: 1200px)': {
            top: '60px',
            left: '-150px',
          }

    }
});

export const ProfileInfo = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: '10px',

    padding: '3px',

    background: "$white_1",

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

});

export const DropMenu = styled("ul", {
    display: "flex",
    flexDirection: "column",
    gap: '10px',

    width: '100%',

    padding: '10px',

    listStyle: "none",

    transition: "0.5s",

    zIndex: 4,

    'li button, li a':{
        background: 'none',
        border: 'none',

        display: "flex",
        alignItems: "center",
        gap: '10px',

        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '22px',

        textDecoration: "none",
        color: "$text",

        transition: "0.2s",
    },

    'li a svg':{
        fontSize: '20px',
    },



})
