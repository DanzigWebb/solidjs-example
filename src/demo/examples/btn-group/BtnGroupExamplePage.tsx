import { Component, createSignal } from 'solid-js';
import { ToggleButton, ToggleButtonsGroup } from '@components/btn-group';

const BtnGroupExamplePage: Component = () => {
    const [activeBtn, setActiveBtn] = createSignal(1);

    return (
        <div class="container p-4">
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
        </div>
    );
};

export default BtnGroupExamplePage;