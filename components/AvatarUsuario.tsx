import Link from "next/link"
import Image from "next/image"
import useAuth from "@/app/data/context/hook/useAuth"

interface AvatarUsuarioProps {
    className?: string
    
}
export default function AvatarUsuario(props: AvatarUsuarioProps) {
    const { usuario } = useAuth()

    return (
        <Link href="/perfil">
            <Image src={usuario?.imagemUrl ?? '/Tomilho-Lucy-M.web'}
             alt="Avatar do Usuário"
             className={`h-10 w-10 rounded-full cursor-pointer ${props.className}`}/>
        </Link>
    )
}