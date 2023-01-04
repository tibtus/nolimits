import React from "react";
import { Routes, Route } from 'react-router-dom';

import Homepage from '../layouts/Homepage.js';
import About  from '../layouts/About.js';
import Notfoundpage from '../layouts/Notfoundpage.js';

import Layout from '../layouts/Layout'

import { AuthProvider } from '../hoocks/AuthProvider'

function RouterApp() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="about" element={<About />} />

                    {/*<Route path="posts" element={<Blogpage />} />*/}
                    {/*<Route path="posts/:id" element={<Singlepage />} />*/}
                    {/*<Route path="posts/:id/edit" element={<Editpost />} />*/}
                    {/*<Route path="login" element={<LoginPage />} />*/}

                    <Route path="*" element={<Notfoundpage />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default RouterApp;
