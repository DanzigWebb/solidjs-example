import { Component, For } from 'solid-js';
import { ToggleButton, ToggleButtonsGroup } from '@components/btn-group';
import { createMemo, createSignal } from 'solid-js';
import { Menu } from '@components/menu/Menu';
import { Tooltip } from '@components/tooltip/Tooltip';
import { MenuOption } from '@components/menu';
import { Modal, ModalAction } from '@components/modal';
import { Select } from '@components/form/select/Select';
import { Option } from '@components/form/select/Option';
import { Alert, AlertType } from '@components/alert/Alert';

const App: Component = () => {

    const [activeBtn, setActiveBtn] = createSignal(1);
    const [menuShow, setMenuShow] = createSignal(false);
    const [menuTrigger, setMenuTrigger] = createSignal<HTMLElement>();
    const [modalShow, setModalShow] = createSignal(false);
    const [alertShow, setAlertShow] = createSignal(false);
    const [alertType, setAlertType] = createSignal<AlertType>();

    function toggleMenu() {
        setMenuShow(!menuShow());
    }

    function toggleModal() {
        setModalShow(!modalShow());
    }

    function toggleAlert() {
        setAlertShow(!alertShow());
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
                <p class="py-4">
                    You've been selected for a chance to get one year of subscription to use Wikipedia for free!
                </p>
                <ModalAction>
                    <button class="btn" onClick={toggleModal}>Yay!</button>
                </ModalAction>
            </Modal>

            <div class="divider my-4"/>
            <h3 class="text-xl">Alerts</h3>
            <div class="divider my-4"/>

            <div class="grid max-w-sm gap-2">
                <button class="btn" onClick={() => {
                    setAlertType(undefined);
                    toggleAlert();
                }}>
                    Show default alert
                </button>
                <button class="btn btn-info" onClick={() => {
                    setAlertType('info');
                    toggleAlert();
                }}>
                    Show info alert
                </button>
                <button class="btn btn-error" onClick={() => {
                    setAlertType('error');
                    toggleAlert();
                }}>
                    Show error alert
                </button>
                <button class="btn btn-success" onClick={() => {
                    setAlertType('success');
                    toggleAlert();
                }}>
                    Show success alert
                </button>
                <button class="btn btn-warning" onClick={() => {
                    setAlertType('warning');
                    toggleAlert();
                }}>
                    Show warning alert
                </button>
            </div>

            <Alert
                show={alertShow()}
                type={alertType()}
            >
                <div>We use cookies for no reason!</div>
                <div class="flex-none">
                    <button class="btn btn-sm btn-ghost" onClick={toggleAlert}>Ok</button>
                </div>
            </Alert>
        </div>
    );
};

export default App;
