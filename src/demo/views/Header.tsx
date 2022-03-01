import { Link } from 'solid-app-router';
import { Component } from 'solid-js';

export const Header: Component = () => {
    return (
        <header>
            <nav class="navbar bg-base-200">
                <div class="flex-1">
                    <Link href="/" class="btn btn-ghost normal-case text-xl">SolidJs</Link>
                </div>
                <div class="flex-none">
                    <button class="btn btn-square btn-ghost">
                        <i class="fa-solid fa-ellipsis"/>
                    </button>
                </div>
            </nav>
        </header>
    );
};