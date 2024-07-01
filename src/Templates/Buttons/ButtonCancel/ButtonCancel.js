import { Button } from "@mui/material"

const ButtonCancel = ({ title, onClick })=> {
    return (
        <Button
            onClick={ onClick }
        >
            { title }
        </Button>
    )
}

export default ButtonCancel