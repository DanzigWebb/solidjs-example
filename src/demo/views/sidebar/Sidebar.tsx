import { Component } from 'solid-js';
import { useApp } from '@root/src/demo/providers/AppProvider';
import { Link } from 'solid-app-router';

type Props = {
    show: boolean;
}

export const Sidebar: Component<Props> = (props) => {

    const app = useApp();

    return (
        <div class="drawer drawer-mobile w-full">
            <input type="checkbox" checked={props.show} class="drawer-toggle"/>
            <div class="flex flex-col items-center justify-center drawer-content">
                {props.children}
            </div>
            <div class="drawer-side">
                <label class="drawer-overlay" onClick={() => app.toggleDrawer()}/>
                <ul class="menu p-4 overflow-y-auto w-56 bg-base-300 text-base-content">
                    <li><Link href="/toggle-buttons">Toggle Buttons</Link></li>
                </ul>
            </div>
        </div>
    );
};