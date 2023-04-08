import React from 'react';
import {useSelector} from 'react-redux'
import {Navigate, useSearchParams} from "react-router-dom";
import LoginCard from "../../components/auth/LoginCard";
import {mainUrlByRole} from "../../utils";
const LoginPage = () => {

    const auth = useSelector(state => state.auth)
    const [searchParams] = useSearchParams();

    const redirectUrl = searchParams.get('next') ?? mainUrlByRole(auth.user)

    return auth.isAuthenticated ? <Navigate replace to={redirectUrl} /> :(
        <div className='flex flex-col justify-center items-center gap-y-3  h-screen'>
            <LoginCard />
        </div>
    );
};

export default LoginPage;