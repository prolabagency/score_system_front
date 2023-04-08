import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from "./components/layouts/MainLayout";
import UsersListPage from "./pages/UsersListPage";
import LoginPage from "./pages/auth/LoginPage";
import {ToastContainer} from "react-toastify";
import StaffsListPage from "./pages/StaffsListPage";
import StaffDetailPage from './pages/StaffDetailPage';
import ProfilePage from './pages/auth/ProfilePage';
import ChangeProfilePage from "./pages/auth/ChangeProfilePage";
import ChangePasswordPage from "./pages/auth/ChangePasswordPage";
import HeadListPage from "./pages/HeadListPage";
import UserDetailPage from "./pages/UserDetailPage";
import {DIRECTOR_ROLE, HEAD_ROLE, STAFF_ROLE} from "./utils/constance";
import MainPage from "./pages/MainPage";
import HeadGroupListPage from './pages/HeadGroupListPage.jsx';
import NotFoundPage from "@/pages/errors/NotFoundPage.jsx";
import GroupListPage from "@/pages/GroupListPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout role={STAFF_ROLE} />}>
                    <Route index element={<MainPage />} />
                    <Route path='profile/' element={<ProfilePage />} />
                    <Route path='profile/change/' element={<ChangeProfilePage />} />
                    <Route path='profile/change-password/' element={<ChangePasswordPage />} />
                </Route>
                <Route path='head/' element={<MainLayout role={HEAD_ROLE} />}>
                    <Route index element={<MainPage />} />
                    <Route path='groups/' element={<HeadGroupListPage />} />
                    <Route path='groups/staffs/' element={<StaffsListPage />} />
                    <Route path='groups/staffs/:id/' element={<StaffDetailPage />} />
                    <Route path='profile/' element={<ProfilePage />} />
                    <Route path='profile/change/' element={<ChangeProfilePage />} />
                    <Route path='profile/change-password/' element={<ChangePasswordPage />} />
                </Route>
                <Route path='director/' element={<MainLayout role={DIRECTOR_ROLE} />}>
                    <Route index element={<GroupListPage />} />
                    <Route path='staffs/' element={<UsersListPage />} />
                    <Route path='staffs/:id/' element={<UserDetailPage />} />
                    <Route path='heads/' element={<HeadListPage />} />
                    <Route path='profile/' element={<ProfilePage />} />
                    <Route path='profile/change/' element={<ChangeProfilePage />} />
                    <Route path='profile/change-password/' element={<ChangePasswordPage />} />
                </Route>
                <Route path='login/' element={<LoginPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
