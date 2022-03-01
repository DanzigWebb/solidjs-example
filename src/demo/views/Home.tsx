import { Outlet } from 'solid-app-router';
import { Component } from 'solid-js';
import { Header } from '@root/src/demo/views/Header';

export const Home: Component = () => {
    return (
        <main class="main">
            <Header/>
            <Outlet/>
        </main>
    );
};