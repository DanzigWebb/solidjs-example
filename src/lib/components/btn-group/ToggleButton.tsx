import { Component, onMount } from 'solid-js';
import { useToggleButtons } from './ToggleButtonProvider';

type Props = {
    value: any;
    defaultChecked?: boolean;
}

export const ToggleButton: Component<Props> = (
    {
        value,
        defaultChecked = false,
        children,
    }
) => {
    const {activeBtn, setActive} = useToggleButtons();

    onMount(() => {
        if (defaultChecked) {
            setActive(value);
        }
    })

    function onClick() {
        setActive(value);
    }

    return (
        <button
            class="btn"
            classList={{'btn-active': value === activeBtn()}}
            onClick={onClick}
        >
            {children}
        </button>
    );
};