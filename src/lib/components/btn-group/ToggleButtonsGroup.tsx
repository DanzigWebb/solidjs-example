import { Component } from 'solid-js';
import { ToggleButtonsProvider } from './ToggleButtonProvider';

type Props = {}

export const ToggleButtonsGroup: Component<Props> = (props) => {

    return (
        <ToggleButtonsProvider>
            <div class="btn-group">
                {props.children}
            </div>
        </ToggleButtonsProvider>
    );
};