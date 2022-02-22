import { Component } from 'solid-js';
import { ToggleButtonsProvider } from './ToggleButtonProvider';

type Props = {
    onChange?: (btnValue: any) => void;
    defaultValue?: any;
}

export const ToggleButtonsGroup: Component<Props> = (props) => {

    const {
        onChange = () => {},
        defaultValue = null,
    } = props;

    return (
        <ToggleButtonsProvider defaultValue={defaultValue} onChange={onChange}>
            <div class="btn-group">
                {props.children}
            </div>
        </ToggleButtonsProvider>
    );
};