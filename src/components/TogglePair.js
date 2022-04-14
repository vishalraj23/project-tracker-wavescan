import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { useState, useEffect } from "react";


const TogglePair = ({ options }) => {

    const [radioValue, setRadioValue] = useState('1');

    return (
        <>
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton id="tbg-radio-1" value={1} onChange={() => setRadioValue('1')}>
                    {options[0]}
                </ToggleButton>
                <ToggleButton id="tbg-radio-2" value={2} onChange={() => setRadioValue('2')}>
                    {options[1]}
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    );
}

export default TogglePair;