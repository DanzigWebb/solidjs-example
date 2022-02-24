import { Component } from 'solid-js';
import { useSelect } from '@components/form/select/Select';

type Props = {
    value: string;
}

export const Option: Component<Props> = (props) => {

    const {value, setValue} = useSelect();

    return (
        <li><a onClick={() => setValue(props.value)} classList={{active: value() === props.value}}>{props.children}</a></li>
    );
};