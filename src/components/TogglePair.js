import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState, useEffect } from "react";


const TogglePair = ({ options }) => {

    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    return (
        <>
            <ButtonGroup>
                {options.map((radio, idx) => (
                    <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => setRadioValue(e.currentTarget.value)}
                    >
                        {radio.name}
                    </ToggleButton>
                ))}
            </ButtonGroup>
        </>
    );
}

export default TogglePair;