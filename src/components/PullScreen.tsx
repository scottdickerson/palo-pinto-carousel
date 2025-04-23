export const PullScreen = () => {
    return (
        <a
            href="/en/details/HomeForMillenia"
            className="flex flex-col items-center justify-center h-screen w-screen font-calderShadow bg-pullScreen"
        >
            <h1 className="uppercase text-[128px] animate-scale">
                Touch To Begin
            </h1>
            <button
                onClick={(event) => {
                    event.preventDefault()
                    event.stopPropagation()
                    window.location.href = '/es/details/HomeForMillenia'
                }}
                className="text-center text-[44px] h-20 pt-1 pl-10 pr-10 gap-4 min-w-[800px] bg-title bg-no-repeat bg-cover"
            >
                Toque Para Iniciar
            </button>
        </a>
    )
}
