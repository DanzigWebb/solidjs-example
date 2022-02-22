import { Component } from 'solid-js';
import { useToggleButtons } from './ToggleButtonProvider';

type Props = {
    value: any;
}

export const ToggleButton: Component<Props> = (props) => {
    const {value} = props;
    const {activeBtn, setActive} = useToggleButtons();

    function onClick() {
        setActive(value);
    }

    return (
        <button
            class="btn"
            classList={{'btn-active': value === activeBtn()}}
            onClick={onClick}
        >
            {props.children}
        </button>
    );
};