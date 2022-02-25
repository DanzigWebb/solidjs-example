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
import { Progress } from '@components/progress/Progress';
import { Tabs } from '@components/tabs/Tabs';
import { Tab } from '@components/tabs/Tab';
import { Steps } from '@components/steps/Steps';
import { Step } from '@components/steps/Step';

const App: Component = () => {

    const [activeBtn, setActiveBtn] = createSignal(1);
    const [menuShow, setMenuShow] = createSignal(false);
    const [menuTrigger, setMenuTrigger] = createSignal<HTMLElement>();
    const [modalShow, setModalShow] = createSignal(false);
    const [alertShow, setAlertShow] = createSignal(false);
    const [alertType, setAlertType] = createSignal<AlertType>();
    const [progress, setProgress] = createSignal(10);
    const [stepIndex, setStepIndex] = createSignal(0);

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

    function updateStepIndex(type: 'next' | 'prev') {
        const index = type === 'next'
            ? stepIndex() + 1
            : stepIndex() - 1;

        setStepIndex(index);
    }

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

            <ToggleButtonsGroup
                onChange={(v) => {
                    console.log('on [ToggleButtonsGroup] changed', v);
                    setActiveBtn(v);
                }}
                defaultValue={activeBtn()}
            >
                <ToggleButton value="prev">«</ToggleButton>
                <ToggleButton value={1}>1</ToggleButton>
                <ToggleButton value={2}>2</ToggleButton>
                <ToggleButton value="" disabled>...</ToggleButton>
                <ToggleButton value={99}>99</ToggleButton>
                <ToggleButton value="next">»</ToggleButton>
            </ToggleButtonsGroup>

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

            <div class="divider my-4"/>
            <h3 class="text-xl">Progress</h3>
            <div class="divider my-4"/>

            <div className="grid gap-3 max-w-sm">
                <input
                    type="number"
                    class="input input-bordered"
                    placeholder="check progress value"
                    value={progress()}
                    onInput={e => setProgress(+(e.target as HTMLInputElement).value)}
                />

                <Progress value={progress()} color="primary"/>
            </div>

            <div class="divider my-4"/>
            <h3 class="text-xl">Steps</h3>
            <div class="divider my-4"/>

            <Steps stepIndex={stepIndex} steps={[
                [
                    <Step label="Register" index={0}/>,

                    <StepItem
                        onNextStep={updateStepIndex}
                        onPrevStep={updateStepIndex}
                    >
                        <h3 class="text-2xl">Step content 1</h3>
                    </StepItem>
                ],
                [
                    <Step label="Choose plan" index={1}/>,
                    <StepItem
                        onNextStep={updateStepIndex}
                        onPrevStep={updateStepIndex}
                    >
                        <h3 class="text-2xl">Step content 2</h3>
                    </StepItem>
                ],
                [
                    <Step label="Purchase" index={2}/>,
                    <StepItem
                        onNextStep={updateStepIndex}
                        onPrevStep={updateStepIndex}
                    >
                        <h3 class="text-2xl">Step content 3</h3>
                    </StepItem>
                ],
            ]}/>

            <div class="divider my-4"/>
            <h3 class="text-xl">Tabs</h3>
            <div class="divider my-4"/>

            <Tabs
                tabList={[
                    <Tab label="Tab 1" index={0}>Content of 1</Tab>,
                    <Tab label="Tab 2" index={1}>Content of 2</Tab>,
                    <Tab label="Tab 3" index={2}>Content of 3</Tab>,
                ]}
            />

        </div>
    );
};

export default App;


type StepItemProps = {
    onNextStep: (type: 'next' | 'prev') => void;
    onPrevStep: (type: 'next' | 'prev') => void;
}

const StepItem: Component<StepItemProps> = (props) => {
    return (
        <div class="flex flex-col gap-2">
            <div>
                {props.children}
            </div>

            <div>
                <button class="btn btn-sm mr-2" onClick={() => props.onNextStep('next')}>
                    next
                </button>
                <button class="btn btn-sm" onClick={() => props.onPrevStep('prev')}>
                    prev
                </button>
            </div>
        </div>
    );
};
