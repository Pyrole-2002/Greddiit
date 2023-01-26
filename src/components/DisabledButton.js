import React from "react";
import Button from "@mui/material/Button";

function DisabledButton(props) {
    return (
        <div>
            <Button
                variant="contained"
                disabled
            >
                {props.TextInButton}
            </Button>
        </div>
    );
}

export default DisabledButton;
