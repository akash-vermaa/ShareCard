const { createTheme } = require("@mui/material");


const HomeTheme = createTheme({
    components: {
        MuiButton:{
            styleOverrides:{
                outlined:{
                    border: "1px solid #919EAB52",
                    color: "#5161FF",
                    "&:hover":{
                        border: "1px solid #919EAB52",
                        color: "#5161FF", 
                    }
                },
                contained:{
                    color: "#FFFFFF",
                    background: "#5161FF",
                    "&:hover": {
                        color: "#FFFFFF",
                        background: "#5161FF"
                    }
                }
            }
        }
    }
})

export default HomeTheme