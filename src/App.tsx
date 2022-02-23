import type { Component } from 'solid-js';
import { ToggleButton, ToggleButtonsGroup } from '@components/btn-group';
import { createSignal } from 'solid-js';

const App: Component = () => {
    const [activeBtn, setActiveBtn] = createSignal(1);

    return (
        <div class="container p-4">
            <h2 class="text-4xl font-bold text-center mb-10">SolidJs examples</h2>

            <ToggleButtonsGroup
                onChange={(v) => {
                    console.log('on [ToggleButtonsGroup] changed', v);
                    setActiveBtn(v);
                }}
                defaultValue={activeBtn()}
                multiple
            >
                <ToggleButton value={1}>1</ToggleButton>
                <ToggleButton value={2}>2</ToggleButton>
                <ToggleButton value={3}>3</ToggleButton>
            </ToggleButtonsGroup>

            <p class="p-4">Value of btn: {activeBtn()}</p>
        </div>
    );
};

export default App;
