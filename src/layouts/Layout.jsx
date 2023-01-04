import React from "react";
import { Outlet } from 'react-router-dom';
import CustomLink from './CustomLink'


export default function Layout () {
    return (
        <>
       {/* <header>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
        </header>*/}

        <main className="container">
            <header>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </header>

            <Outlet />
        </main>

        <footer className="container">&copy; 2023</footer>
        </>
    )
}


