export const Login = () => {
    return (
        <>
            <div className="h-screen flex flex-col gap-y-3 justify-center items-center">
                <div className="flex items-center gap-x-3">
                    <p className="pl-6 pr-6 pt-4 pb-4 text-2xl bg-blue-800 text-white rounded-2xl">T</p>
                    <h1 className="text-2xl font-bold">TailPanel</h1>
                </div>
                <div className="shadow-[2px_-1px_39px_0px_rgba(34,60,80,0.2)] rounded-2xl h-[400px] w-[300px] bg-white p-8 flex flex-col gap-y-3">
                    <div className="mt-8 flex flex-col gap-y-3">
                        <p className="font-bold text-xl">Email Address</p>
                        <input type="email" placeholder="you@example.com" className="border border-gray-500 p-2 rounded-2xl outline-0" />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <p className="font-bold text-xl">Password</p>
                        <input type="password" placeholder="********" className="border border-gray-500 rounded-2xl outline-0 p-2" />
                    </div>
                    <div className="flex gap-x-2">
                        <input type="checkbox" />
                        <p>Remember me</p>
                    </div>
                    <button className="cursor-pointer pl-4 pr-4 pt-3 pb-3 text-white rounded-2xl bg-blue-600">Sing In</button>
                </div>
            </div>
        </>
    )
}