import useAuth from "@/app/data/context/hook/useAuth";
import MenuItem from "./MenuItem";
import {Home, ajuste, sino, logout} from "../components/icons/";
import Logo from "./Logo";

export default function MenuLateral() {

    const { logout } = useAuth()
    return (
        <aside className="flex flex-col bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-gray-200">
            <div className={`flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-500 to-purple-800
            h-20 w-20`}>

              <Logo/>
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Início" icone={Home} />   
                <MenuItem url="/ajustes" texto="Ajustes" icone={ajuste} /> 
                <MenuItem url="/notificacao" texto="Notificação" icone={sino}/>
            </ul>
            <ul>
                <MenuItem  url="" className={`text-red-600 hover:bg-red-400 hover:text-white dark:text-red-400 dar:hover:text-white`} texto="" icone={logout}/>
            </ul>
           
        </aside>
    )
}