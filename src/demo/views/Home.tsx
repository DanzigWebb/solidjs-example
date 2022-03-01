import { Outlet } from 'solid-app-router';
import { Component, JSX } from 'solid-js';
import { Header } from '@root/src/demo/views/header/Header';
import { Sidebar } from '@root/src/demo/views/sidebar/Sidebar';
import { useApp } from '@root/src/demo/providers/AppProvider';

const styles: JSX.CSSProperties = {
    'height': '100vh',
    'display': 'grid',
    'grid-template-rows': 'auto 1fr'
};

export const Home: Component = () => {
    const appContext = useApp();

    return (
        <main class="main" style={styles}>
            <Header/>
            <Sidebar show={appContext.showDrawer()}>
                <Outlet/>
            </Sidebar>
        </main>
    );
};