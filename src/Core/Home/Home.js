"use client"

import { Button, ThemeProvider } from "@mui/material"
import HomeTheme from "@/Themes/HomeTheme"
import Header from "@/Components/Header"

const Home = ()=> {
    return(
        <ThemeProvider theme={ HomeTheme }>
            <Header />
        </ThemeProvider>
    )
}

export default Home