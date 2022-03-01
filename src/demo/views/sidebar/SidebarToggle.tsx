import { Component } from 'solid-js';
import { Swap } from '@components/swap/Swap';
import { useApp } from '@root/src/demo/providers/AppProvider';

const DrawerBtn: Component<{ icon: string, onClick: () => void }> = (props) => {
    return (
        <button className="btn btn-ghost btn-circle" onClick={() => props.onClick()}>
            <i class={`fa-solid ${props.icon}`}/>
        </button>
    );
};

export const SidebarToggle: Component = () => {

    const context = useApp();

    return (
        <Swap
            state={context.showDrawer()
                ? 'off'
                : 'on'
            }
            on={<DrawerBtn
                icon="fa-bars"
                onClick={() => context.toggleDrawer()}
            />}
            off={<DrawerBtn
                icon="fa-xmark"
                onClick={() => context.toggleDrawer()}
            />}
        />
    );
};