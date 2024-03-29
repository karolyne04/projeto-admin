'use client'
import { useState, createContext, useEffect } from "react";



interface AppContextPros {
    tema?: string
    alterarTema?: () => void
}

const AppContext = createContext<AppContextPros>({})


export function AppProvider(props) {
    const [tema, setTema] = useState('dark')


    function alterarTema() {
       const novoTema = tema === '' ? 'dark' : ''
       setTema(novoTema)
       localStorage.setItem('tema', novoTema)
    }

    useEffect(() => {
            const temaSalvo = localStorage.getItem('tema')
            setTema(temaSalvo)
        }, [])


    return (
        <AppContext.Provider value={{ tema, alterarTema
         }}>
            {props.children}

        </AppContext.Provider>
    )
}

export default AppContext
