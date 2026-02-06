export const LayoutContentTop = ({ title, text }) => {
    return (
        <>
            <div className="flex flex-col gap-y-2.5 mt-[70px]">
                <h3 className="font-bold text-3xl">{title}</h3>
                <p className="text-gray-500">{text}</p>
            </div>
        </>
    )
}