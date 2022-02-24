import { Accessor, Component, createContext, createSignal, onCleanup, Show, useContext } from 'solid-js';
import { Portal } from 'solid-js/web';
import usePopper from '@root/src/lib/popper/usePopper';

type ContextType = {
    value: Accessor<string>
    setValue: (v: string) => void;
}

const SelectContext = createContext<ContextType>();

type Props = {
    placeholder?: string;
}

export const Select: Component<Props> = (props) => {

    const [value, setValue] = createSignal('');
    const [show, setShow] = createSignal(false);

    const [reference, setReference] = createSignal<HTMLElement>();
    const [popper, setPopper] = createSignal<HTMLElement>();

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

    const store: ContextType = {
        value,
        setValue
    };

    function onFocus() {
        setShow(true);
    }


    function destroyDropdown() {
        setShow(false);
    }

    return (
        <SelectContext.Provider value={store}>
            <input
                ref={setReference}
                class="select select-bordered"
                value={value()}
                placeholder={props.placeholder || ''}
                onFocus={onFocus}
            />

            <Show when={show()}>
                <Portal>
                    <div
                        class="z-50 fixed top-0 bottom-0 left-0 right-0"
                        onClick={() => destroyDropdown()}
                    >
                        <div
                            ref={setPopper}
                            style={{'min-width': reference()?.scrollWidth + 'px'}}
                            class="p-2 shadow menu dropdown-content bg-base-200"
                            tabIndex="0"
                        >
                            {props.children}
                        </div>
                    </div>
                </Portal>
            </Show>
        </SelectContext.Provider>
    );
};

export const useSelect = () => useContext(SelectContext)!;