import LogoIcon from "@/Templates/Images/LogoIcon/LogoIcon"
import { Stack } from "@mui/material"
import NavigationSection from "../NavigationSection"

const Header = ()=> {
    return (
        <Stack
            padding={"0.5rem 0.75rem"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
        >
            <LogoIcon
                size="1.25rem"
                color="black"
            />
            <NavigationSection />
        </Stack>
    )
}

export default Header