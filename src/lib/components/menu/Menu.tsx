import { Component, createSignal, onCleanup, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
import usePopper from '@root/src/lib/popper/usePopper';

type Props = {
    isShow: boolean;
    reference?: HTMLElement;
    onBackdropClick?: () => void;
}

export const Menu: Component<Props> = (props) => {

    const [reference] = createSignal(props.reference);
    const [popper, setPopper] = createSignal<HTMLElement>();

    function onBackdropClick() {
        props.onBackdropClick && props.onBackdropClick();
    }

    const instance = usePopper(reference, popper, {
        modifiers: [{
            name: 'offset',
            options: {
                offset: [0, 8],
            },
        }]
    });

    onCleanup(() => {
        instance()?.destroy();
    });

    return (
        <Show when={props.isShow}>
            <Portal>
                <div
                    class="z-50 fixed top-0 bottom-0 left-0 right-0"
                    onClick={() => onBackdropClick()}
                >
                    <ul
                        class="menu bg-base-200 z-10"
                        ref={setPopper}
                        onClick={e => e.stopPropagation()}
                    >
                        {props.children}
                    </ul>
                </div>
            </Portal>
        </Show>
    );
};