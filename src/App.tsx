import type { Component } from 'solid-js';
import { ToggleButton, ToggleButtonsGroup } from '@components/btn-group';

const App: Component = () => {
  return (
    <div class="container p-4">
        <h2 class="text-4xl font-bold text-center mb-10">SolidJs examples</h2>

        <ToggleButtonsGroup onChange={(v) => console.log('on [ToggleButtonsGroup] changed', v)}>
            <ToggleButton value={1}>1</ToggleButton>
            <ToggleButton value={2}>2</ToggleButton>
            <ToggleButton value={3} defaultChecked>3</ToggleButton>
        </ToggleButtonsGroup>
    </div>
  );
};

export default App;
