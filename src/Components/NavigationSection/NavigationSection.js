import { Stack } from "@mui/material"
import { NAV_ITEMS } from "./NavigationSection.constants"
import NavItem from "@/Templates/Texts/NavItem"

const NavigationSection = ()=> {
    return(
        <Stack
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            gap={"3rem"}
        >
            { NAV_ITEMS.map((item, index)=> (
                <NavItem
                    key={ item.id }
                    title={ item.label }
                    link={ item.link }
                    size="1.5rem"
                />
            ))}
        </Stack>
    )
}
export default NavigationSection