import { createSignal, createContext, useContext, Accessor } from 'solid-js';

type ContextType<T = any> = {
    activeBtn: Accessor<T | undefined>;
    setActive: (btnIndex: T) => void;
}

const ButtonToggleContext = createContext<ContextType>();

export function ToggleButtonsProvider(props: any) {
    const [activeBtn, setActiveBtn] = createSignal();

    const store: ContextType = {
        activeBtn,
        setActive(btnIndex) {
            setActiveBtn(btnIndex);
        }
    };

    return (
        <ButtonToggleContext.Provider value={store}>
            {props.children}
        </ButtonToggleContext.Provider>
    );
}

export const useToggleButtons = () => useContext(ButtonToggleContext)!;