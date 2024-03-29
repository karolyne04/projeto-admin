import Link from "next/link"
import { usePathname } from "next/navigation"

interface MenuItemProps {
    className?: string
    url?: string
    texto: string
    icone: any
    onClick?: (evento: any) => void
}

export default function MenuItem(props: MenuItemProps) {
    function renderizarLink() {
        return (
            <a className={`flex flex-col justify-center items-center h-20 w-20 `}>
                {props.icone}
                <span className={`text-xs font-light text-gray-600`}>
                    {props.texto}
                </span>
            </a>
        )
    }
    return (
        <li onClick={props.onClick} className={`hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800`}>
            
             <Link href={props.url} className={`flex flex-col justify-center items-center h-20 w-20 dark:text-gray-200`}>
                
                    {props.icone}
                    <span className={`text-x font-light text-gray-600`}>
                        {props.texto}
                    </span>

        
            </Link> 
        </li>
    )
}