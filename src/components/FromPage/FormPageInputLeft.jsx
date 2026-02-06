export const FormInputLeft = () => {
    return (
        <>
            <div className="bg-white shadow-[0px_0px_39px_0px_rgba(34,60,80,0.2)] w-[50%] rounded-2xl p-4 flex flex-col gap-y-4 mt-5">
                <p className="font-bold text-[20px]">Text Inputs</p>
                <form className="flex flex-col gap-y-3 w-full">
                    <div className="flex flex-col gap-y-1 p-2 rounded-xl">
                        <b>Full Name</b>
                        <input type="text" placeholder="Jon Doe" className="p-3 border border-gray-800 rounded-2xl outline-0" />
                    </div>
                    <div className="flex flex-col gap-y-1 p-2 rounded-xl">
                        <b>Email Address</b>
                        <input type="email" placeholder="john@example.com" className="p-3 border border-gray-800 rounded-2xl outline-0" />
                    </div>
                    <div className="flex flex-col gap-y-1 p-2 rounded-xl">
                        <b>Phone Number</b>
                        <input type="number" placeholder="+1 (555) 123-567" className="p-3 border border-gray-800 rounded-2xl outline-0" />
                    </div>
                    <div className="flex flex-col gap-y-1 p-2 rounded-xl">
                        <b>Website</b>
                        <input type="text" placeholder="https://example.com" className="p-3 border border-gray-800 rounded-2xl outline-0" />
                    </div>
                </form>
            </div>
        </>
    )
}