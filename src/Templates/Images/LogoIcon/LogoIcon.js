import { Typography } from "@mui/material"

const LogoIcon = ({ size="1rem", color="#3f3f9f" })=> {
    return(
        <Typography
            color={color}
            fontSize={size}
            fontFamily={`"Times New Roman", Times, serif`}
            fontWeight={600}
            sx={{
                backgroundcolor: "primary",
                backgroundImage: `linear-gradient(45deg, #5514B4, #FF80FF)`,
                backgroundSize: "100%",
                backgroundRepeat: "repeat",
                backgroundClip: "text",
                background: "linear-gradient(45deg, #5514B4, #FF80FF)",
                WebkitBackgroundClip: "text",
                fontSize: "2.5rem",
                fontWeight: "600",
                fontFamily:'roboto',
                WebkitTextFillColor: "transparent"
            }}
        >
            Share Card
        </Typography>
    )
}

export default LogoIcon