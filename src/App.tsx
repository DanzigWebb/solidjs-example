import { Component, For } from 'solid-js';
import { ToggleButton, ToggleButtonsGroup } from '@components/btn-group';
import { createMemo, createSignal } from 'solid-js';
import { Menu } from '@components/menu/Menu';
import { Tooltip } from '@components/tooltip/Tooltip';
import { MenuOption } from '@components/menu';
import { Modal, ModalAction } from '@components/modal';
import { Select } from '@components/form/select/Select';
import { Option } from '@components/form/select/Option';

const App: Component = () => {

    const [activeBtn, setActiveBtn] = createSignal(1);
    const [menuShow, setMenuShow] = createSignal(false);
    const [menuTrigger, setMenuTrigger] = createSignal<HTMLElement>();
    const [modalShow, setModalShow] = createSignal(false);

    function toggleMenu() {
        setMenuShow(!menuShow());
    }

    function toggleModal() {
        setModalShow(!modalShow());
    }

    const isMenuShow = createMemo(() => menuShow());

    const selectArray = Array(20).fill(0).map((_, i) => i + 1);

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
            <h3 class="text-xl">Select</h3>
            <div class="divider my-4"/>

            <Select placeholder="Check your option">
                <For each={selectArray}>
                    {item =>
                        <Option value={'Option ' + item}>
                            {'Option ' + item}
                        </Option>
                    }
                </For>
            </Select>

            <div class="divider my-4"/>
            <h3 class="text-xl">Menu and tooltip</h3>
            <div class="divider my-4"/>


            <Tooltip
                message="Click to show menu"
                placement="right"
            >
                <button
                    class="btn btn-primary"
                    ref={setMenuTrigger}
                    onClick={toggleMenu}
                >
                    Menu
                </button>
            </Tooltip>

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

            <div class="divider my-4"/>
            <h3 class="text-xl">Menu and tooltip</h3>
            <div class="divider my-4"/>

            <button
                className="btn btn-primary"
                onClick={() => setModalShow(true)}
            >
                Open modal
            </button>

            <Modal isShow={modalShow()} onBackdropClick={toggleModal}>
                <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for
                    free!</p>
                <ModalAction>
                    <button class="btn" onClick={toggleModal}>Yay!</button>
                </ModalAction>
            </Modal>
        </div>
    );
};

export default App;
