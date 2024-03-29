import Image from "next/image"
import spinner from '../../public/Spinner-1s-200px.gif'
import useAuth from "@/app/data/context/hook/useAuth"
import Head from "next/head"

export default function forcarAutenticacao(props) {

    const { usuario, carregando } = useAuth()

    function renderizarConteudo() {
            return (
                <>
                    <Head>
                        <script dangerouslySetInnerHTML={{
                            __html:`
                                if(!document.cookie?.includes("admin-template-cod3r-auth")  
                                    window.location.href = "/autenticacao"
                            `
                        }}/>
                    </Head>
                    {props.children}
                </>
            )
        }

        function renderizarCarregando() {
            return (
                <div className="flex justify-center items-center h-screen">
                        <Image src={spinner} alt="carregando"/>
                </div>
            )
        }
        if(!carregando && usuario?.email) {
            return renderizarConteudo()
        } else if(carregando) {
            return renderizarCarregando()
        } else {
            // params.push('/auteticacao') ver na documentação como faz a chamada
            
            return null
        }
}