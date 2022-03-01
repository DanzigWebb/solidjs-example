import { Route, Routes } from 'solid-app-router';
import { Component } from 'solid-js';
import { Home } from '@root/src/demo/views/Home';

export const AppRouting: Component = () => {

    return (
        <Routes>
            <Route path="/" element={<Home/>}>

            </Route>
        </Routes>
    );
};