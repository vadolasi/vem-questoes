import { styled } from "@/styles";

export const Container = styled('div', {
    width: '100%',

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: '19px 15px',

    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '16px',

    background: '$white_2',

    border: "2px solid $blue_2",
    borderRadius: "23px",

    marginBottom: "18px",

    transition: "0.3s",

    cursor: "pointer",
    
    '&:hover': {
        background: '$blue_1',

        border: "2px solid $text",

        ".dataInfo span svg": {
            color: '$text',
        }
    },


    ".examInfo": {
        display: "flex",
        alignItems: "center",
        gap: "8px",

    },
    ".dataInfo":{   
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",

        gap: "12px",


        "span": {
            display: "flex",
            alignItems: "center",

            gap: "2px",

            "& svg": {
                transition: "0.3s",
                color: '$blue_1',
                width: '15px',
                height: "15px",
            }
        }
    }

 
})