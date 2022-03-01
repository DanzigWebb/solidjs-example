import { Link } from 'solid-app-router';
import { Component } from 'solid-js';
import { SidebarToggle } from '@root/src/demo/views/sidebar/SidebarToggle';

export const Header: Component = () => {
    return (
        <header>
            <nav class="navbar bg-base-200">
                <div class="flex-1">
                    <Link href="/" class="btn btn-ghost normal-case text-xl">SolidJs</Link>
                </div>
                <div class="flex-none">
                    <div className="lg:hidden">
                        <SidebarToggle/>
                    </div>
                </div>
            </nav>
        </header>
    );
};
