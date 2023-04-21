import { styled } from "@/styles";

export const Container = styled('header', {
    width: '100%',
    padding: '23px 42px',

    zIndex: 2,

    display: "flex",
    justifyContent: 'space-between',

    gridArea: 'header',

    borderBottom: '1px solid $white_1',

    ".show": {
        display: "flex"
    },
    ".hidden": {
        display: "none"
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

    'button:hover':{
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

    'li button':{
        background: 'none',
        border: 'none',

        display: "flex",
        alignItems: "center",
        gap: '10px',

        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '22px',

        transition: "0.2s",
    },

    'li button svg':{
        fontSize: '20px',
    }
})