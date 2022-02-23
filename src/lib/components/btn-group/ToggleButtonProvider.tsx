import { createSignal, createContext, useContext, Accessor, Component } from 'solid-js';
import { SelectionModel } from '@components/btn-group/utils/selection.model';

type ContextType<T = any> = {
    activeBtn: Accessor<SelectionModel<T | undefined>>;
    setActive: (btnIndex: T) => void;
}

const ButtonToggleContext = createContext<ContextType>();

type Props = {
    onChange?: (value: any[]) => void;
    defaultValue?: any;
    multiple?: boolean;
}

export const ToggleButtonsProvider: Component<Props> = (props) => {

    const {
        onChange = () => {},
        defaultValue = null,
        multiple = false,
    } = props;

    const model = new SelectionModel().add(defaultValue);

    const [activeBtn, setActiveBtn] = createSignal(model);

    const store: ContextType = {
        activeBtn,
        setActive(btnValue) {
            if (activeBtn().has(btnValue)) {
                const value = removeValue(btnValue);
                setActiveBtn(value);
            } else {
                const value = addValue(btnValue);
                setActiveBtn(value);
            }

            onChange(Array.from(activeBtn().get()));
        }
    };

    function addValue(value: any) {
        if (multiple) {
            return new SelectionModel(model.add(value));
        } else {
            return new SelectionModel(model.clear().add(value));
        }
    }

    function removeValue(value: any) {
        return new SelectionModel(model.remove(value));
    }

    return (
        <ButtonToggleContext.Provider value={store}>
            {props.children}
        </ButtonToggleContext.Provider>
    );
};

export const useToggleButtons = () => useContext(ButtonToggleContext)!;