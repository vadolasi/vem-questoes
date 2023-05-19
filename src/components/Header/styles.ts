import { styled } from "@/styles";

export const Container = styled('header', {
    width: '100vw',
    padding: '23px 42px',

    zIndex: 3,

    display: "flex",
    justifyContent: 'space-between',

    gridArea: 'header',


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

    'button:hover, a:hover':{
        cursor: 'pointer',
        color: "$blue_1"
    },
});

export const ProfileInfo = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: '10px',

    padding: '3px 15px 3px 2px',

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

export const Line = styled("div", {
  height: '1px',
  zIndex: 6,

  display: "flex",
  width: '100vw',
  backgroundColor: "$white_1"
})
