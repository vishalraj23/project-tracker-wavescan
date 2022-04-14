import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

const TogglePair = ({ options }) => {

    return (
        <>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton id="tbg-radio-1" value={1}>
                    {options[0]}
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2}>
                    {options[1]}
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}

export default TogglePair;