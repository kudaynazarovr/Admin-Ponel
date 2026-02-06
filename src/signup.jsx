export const Signup = () => {
    return (
        <>
            <div className="p-8 h-screen bg-white flex flex-col justify-center items-center">
                <div className="flex flex-col items-center gap-y-4">
                    <div className="flex gap-x-4 items-center">
                        <p className="bg-blue-800 p-5 text-white text-xl rounded-2xl">T</p>
                        <b className="text-3xl">TailPanel</b>
                    </div>
                    <p className="text-gray-500">Create your account</p>
                </div>

                <div className="shadow-[2px_-1px_39px_0px_rgba(34,60,80,0.2)] bg-white p-8 w-[35%] h-[60%] rounded-2xl flex flex-col gap-y-4">
                    <div className="flex flex-col gap-y-3">
                        <p className="text-xl font-bold">Full Name</p>
                        <input type="text" placeholder="John Doe" className="p-2 border border-gray-500 rounded-2xl outline-0" />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <p className="text-2xl font-bold">Email Address</p>
                        <input type="email" placeholder="you@example.com" className="p-2 border border-gray-500 rounded-2xl outline-0" />
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <p className="text-2xl font-bold">password</p>
                        <input type="password" placeholder="********" className="p-2 border border-gray-500 rounded-2xl outline-0" />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-2xl font-bold">Confirm Password</p>
                        <input type="password" placeholder="********" className="p-2 border border-gray-500 rounded-2xl outline-0" />
                    </div>
                    <div className="flex gap-x-3 items-center">
                        <input type="checkbox" />
                        <p className="text-gray-500">I agree to the Terms of Service and and  Privacy Policy</p>
                    </div>
                    <button className="pl-4 pr-4 pt-3 pb-3 bg-blue-800 rounded-2xl text-white cursor-pointer">Create Account</button>
                </div>

            </div>
        </>
    )
}