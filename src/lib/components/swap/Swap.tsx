import { Component, createSignal, JSXElement } from 'solid-js';

type Props = {
    on: JSXElement;
    off: JSXElement;
}

export const Swap: Component<Props> = (props) => {
    const [state, setState] = createSignal(false);

    return (
        <label class="swap swap-rotate" onClick={() => setState(!state())}>

            <input type="checkbox" checked/>
            <span class="swap-on">
                {props.on}
            </span>
            <span class="swap-off">
                {props.off}
            </span>
        </label>
    );
};