import type { Component } from 'solid-js';
import { ToggleButton, ToggleButtonsGroup } from '@components/btn-group';

const App: Component = () => {
  return (
    <div class="container p-4">
        <h2 class="text-4xl font-bold text-center mb-10">SolidJs examples</h2>

        <ToggleButtonsGroup>
            <ToggleButton index={1}>1</ToggleButton>
            <ToggleButton index={2}>2</ToggleButton>
            <ToggleButton index={3}>3</ToggleButton>
        </ToggleButtonsGroup>
    </div>
  );
};

export default App;
