import { Component } from 'solid-js';
import { useToggleButtons } from './ToggleButtonProvider';

type Props = {
    index: any;
}

export const ToggleButton: Component<Props> = (props) => {
    const {index} = props;
    const {activeBtn, setActive} = useToggleButtons();

    function onClick() {
        setActive(index);
    }

    return (
        <button
            class={`btn ${index === activeBtn() ? 'btn-active' : ''}`}
            onClick={onClick}
        >
            {props.children}
        </button>
    );
};