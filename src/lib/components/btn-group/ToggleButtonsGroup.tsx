import { Component } from 'solid-js';
import { ToggleButtonsProvider } from './ToggleButtonProvider';

type Props = {
    onChange?: (btnValue: any) => void;
    defaultValue?: any;
    multiple?: boolean;
}

export const ToggleButtonsGroup: Component<Props> = (props) => {

    const {
        onChange = () => {},
        defaultValue = null,
        multiple = false,
    } = props;

    return (
        <ToggleButtonsProvider
            defaultValue={defaultValue}
            multiple={multiple}
            onChange={onChange}
        >
            <div class="btn-group">
                {props.children}
            </div>
        </ToggleButtonsProvider>
    );
};