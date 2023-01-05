import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';


import Homepage from '../layouts/Homepage.jsx';
import About  from '../layouts/About.jsx';
import Notfoundpage from '../layouts/Notfoundpage.jsx';

import { Blogpage } from '../layouts/Blogpage';
import { Createpost } from '../layouts/Createpost';
import { Editpost } from '../layouts/Editpost';
import { Singlepage } from '../layouts/Singlepage';
import { LoginPage } from '../layouts/Loginpage';

import Layout from '../layouts/Layout'

import { AuthProvider } from '../hoocks/AuthProvider'
import RequireAuth from '../hoocks/RequireAuth'


function RouterApp() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="about" element={<About />}>
                        <Route path="contacts" element={<p>Our contact</p>} />
                        <Route path="team" element={<p>Our team</p>} />
                    </Route>
                    <Route path="about-us" element={<Navigate to="/about" replace />} />
                    <Route path="posts" element={<Blogpage />} />
                    <Route path="posts/:id" element={<Singlepage />} />
                    <Route path="posts/:id/edit" element={<Editpost />} />
                    <Route path="posts/new" element={
                        <RequireAuth>
                            <Createpost />
                        </RequireAuth>
                    } />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="*" element={<Notfoundpage />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default RouterApp;
