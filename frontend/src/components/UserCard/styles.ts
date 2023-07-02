import { styled } from "@/styles";

export const Container = styled('div', {
    width: '100%',

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: '10px 15px',

    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '16px',

    background: '$white_2',

    border: "2px solid $blue_2",
    borderRadius: "23px",

    marginBottom: "18px",
    
    ".userInfo": {
        display: "flex",
        alignItems: "center",
        gap: "8px",

        'img':{
            width: '34px',
            height: '34px',
            borderRadius: '50%',
        }
    },
    ".examInfo":{   
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",

        gap: "12px",

        "span": {
            display: "flex",
            alignItems: "center",

            gap: "2px",

            "& svg": {
                color: '$blue_1',
                width: '15px',
                height: "15px",
            }
        }
    }

 
})