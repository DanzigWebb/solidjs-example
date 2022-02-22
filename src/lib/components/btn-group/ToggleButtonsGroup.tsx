import { Component } from 'solid-js';
import { ToggleButtonsProvider } from './ToggleButtonProvider';

type Props = {
    onChange?: (btnValue: any) => void;
}

export const ToggleButtonsGroup: Component<Props> = (props) => {

    return (
        <ToggleButtonsProvider onChange={props.onChange}>
            <div class="btn-group">
                {props.children}
            </div>
        </ToggleButtonsProvider>
    );
};