interface CouteudoProps {
    children?: any
}

export default function Couteudo(props: CouteudoProps) {
    return (
        <div className={`flex flex-col mt-7 dark:text-gray-200`}>
            {props.children}
        </div>
    )
}