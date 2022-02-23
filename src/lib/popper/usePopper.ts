import { Accessor, createEffect, createSignal, onCleanup } from 'solid-js';
import { createPopper, Instance, Options } from '@popperjs/core';

export default function usePopper<T extends HTMLElement, P extends HTMLElement>(
    referenceAccessor: Accessor<T | undefined | null>,
    popperAccessor: Accessor<T | undefined | null>,
    options: Partial<Options> = {},
): () => Instance | undefined {
    const [instance, setInstance] = createSignal<Instance>();

    createEffect(() => {
        setInstance(undefined);

        const reference = referenceAccessor();
        const popper = popperAccessor();

        if (reference && popper) {
            const instance = createPopper(reference, popper, options);

            setInstance(instance);

            onCleanup(() => {
                instance.destroy();
            });
        }
    });

    return () => instance();
}