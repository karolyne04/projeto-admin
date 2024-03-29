export default function Logo() {
    return (
        <div className={` flex flex-col h-14 w-14 bg-white rounded-full justify-center items-center`}>
            <div className="h-3 w-3 rounded-full bg-red-600 mb-1"/>
            <div className="flex mt-1">
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-1"/>
                <div className="h-3 w-3 rounded-full bg-green-600 ml-1"/>

            </div>
        </div>
    )
}