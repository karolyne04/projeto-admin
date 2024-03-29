import '/global.css';
import 'tailwindcss/tailwind.css'
import { AppProvider } from '../app/data/context/AppContext'
import { AuthProvider } from './data/context/AuthContext';
import { Component } from 'react';

function MyApp({ pageProps }) {
    return (
        <AuthProvider>
            <AppProvider>
                <Component {...pageProps}/>
            </AppProvider>
        </AuthProvider>
    )
}

export default MyApp