import { onMount, PropsWithChildren } from 'solid-js';
import { useToggleButtons } from './ToggleButtonProvider';

type Props<T = any> = {
    value: T;
    defaultChecked?: boolean;
    onCheck?: (v: T) => void;
}

export const ToggleButton = <T extends any = any>(props: PropsWithChildren<Props<T>>) => {
    const {
        value,
        defaultChecked = false,
        onCheck = () => {},
    } = props;

    const {activeBtn, setActive} = useToggleButtons();

    /*
    * Помечаем кнопку как активную,
    * если указан соответсвующй пропс
    */
    onMount(() => {
        if (defaultChecked) {
            setActive(value);
        }
    });

    /*
    * Помечаем как активную,
    * игнорируем если уже активна
    */
    function onClick() {
        if (!(value === activeBtn())) {
            setActive(value);
            onCheck(value);
        }
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