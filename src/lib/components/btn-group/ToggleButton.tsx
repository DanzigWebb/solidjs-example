import { onMount, PropsWithChildren } from 'solid-js';
import { useToggleButtons } from './ToggleButtonProvider';

type Props<T = any> = {
    value: T;
    defaultChecked?: boolean;
    onCheck?: (v: T) => void;
}

export const ToggleButton = <T extends any = any>(props: PropsWithChildren<Props<T>>) => {
    const {
        onCheck = () => {},
    } = props;

    const {activeBtn, setActive} = useToggleButtons();

    /*
    * Помечаем кнопку как активную,
    * если указан соответсвующй пропс
    */
    onMount(() => {
        if (props.defaultChecked) {
            setActive(props.value);
        }
    });

    /*
    * Помечаем как активную,
    * игнорируем если уже активна
    */
    function onClick() {
        setActive(props.value);
        onCheck(props.value);
    }

    return (
        <button
            class="btn"
            classList={{'btn-active': activeBtn().has(props.value)}}
            onClick={onClick}
        >
            {props.children}
        </button>
    );
};