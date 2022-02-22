import { createSignal, createContext, useContext, Accessor, Component } from 'solid-js';

type ContextType<T = any> = {
    activeBtn: Accessor<T | undefined>;
    setActive: (btnIndex: T) => void;
}

const ButtonToggleContext = createContext<ContextType>();

type Props = {
    onChange?: (value: any) => void;
}

export const ToggleButtonsProvider: Component<Props> = (props) => {

    const {
       onChange = () => {},
    } = props;

    const [activeBtn, setActiveBtn] = createSignal();

    const store: ContextType = {
        activeBtn,
        setActive(btnIndex) {
            setActiveBtn(btnIndex);
            onChange(btnIndex);
        }
    };

    return (
        <ButtonToggleContext.Provider value={store}>
            {props.children}
        </ButtonToggleContext.Provider>
    );
}

export const useToggleButtons = () => useContext(ButtonToggleContext)!;