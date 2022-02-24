import type { Component } from 'solid-js';
import { ToggleButton, ToggleButtonsGroup } from '@components/btn-group';
import { createMemo, createSignal } from 'solid-js';
import { Menu } from '@components/menu/Menu';
import { MenuOption } from '@components/menu/MenuOption';

const App: Component = () => {

    const [activeBtn, setActiveBtn] = createSignal(1);
    const [menuShow, setMenuShow] = createSignal(false);
    const [menuTrigger, setMenuTrigger] = createSignal<HTMLElement>();

    function toggleMenu() {
        setMenuShow(!menuShow());
    }

    const isMenuShow = createMemo(() => menuShow());

    return (
        <div class="container p-4">
            <h2 class="text-4xl font-bold text-center mb-10">SolidJs examples</h2>

            <h3 class="text-xl">Toggle buttons</h3>
            <div class="divider my-4"/>

            <ToggleButtonsGroup
                onChange={(v) => {
                    console.log('on [ToggleButtonsGroup] changed', v);
                    setActiveBtn(v);
                }}
                defaultValue={activeBtn()}
            >
                <ToggleButton value={1}>1</ToggleButton>
                <ToggleButton value={2}>2</ToggleButton>
                <ToggleButton value={3}>3</ToggleButton>
            </ToggleButtonsGroup>

            <p class="p-4">Value of btn: {activeBtn()}</p>

            <div class="divider my-4"/>
            <h3 class="text-xl">Menu</h3>
            <div class="divider my-4"/>

            <button
                class="btn btn-primary"
                ref={setMenuTrigger}
                onClick={toggleMenu}
            >
                Menu
            </button>

            <Menu
                isShow={isMenuShow()}
                onBackdropClick={toggleMenu}
                reference={menuTrigger()}
            >
                <div style={{'min-width': '150px'}} onClick={toggleMenu}>
                    <MenuOption>Item 1</MenuOption>
                    <MenuOption>Item 2</MenuOption>
                    <MenuOption>Item 3</MenuOption>
                </div>
            </Menu>
        </div>
    );
};

export default App;
