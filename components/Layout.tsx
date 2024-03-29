import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import useAppData from '@/app/data/context/hook/useAppData'
import ForcarAutenticacao from '../components/auth/FocarAutenticacao'
// import AppContext from '@/context/AppContext'

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
     const { tema } = useAppData()
    return (
        <ForcarAutenticacao>
            <div className={`${tema} flex h-screen w-screen`}>
                <MenuLateral />
                <div className={`flex flex-col w-full bg-gray-300 p-7 dark:bg-gray-800`}>
                    <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
                    <Conteudo>
                        {props.children}
                    </Conteudo>
                </div>
            </div>
        </ForcarAutenticacao>
    )
}