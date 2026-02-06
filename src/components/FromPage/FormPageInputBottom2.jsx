export const FormPageInputBottom2 = () => {
    return (
        <>
            <div className="bg-white shadow-[0px_0px_39px_0px_rgba(34,60,80,0.2)] w-[50%] rounded-2xl p-4 flex flex-col  gap-y-4 mt-5 h-[500px]">
                <p className="text-2xl font-bold">Textarea</p>
                <div className="flex flex-col gap-y-2">
                    <p className="text-xl font-bold">Bio</p>
                    <textarea className="w-full rounded-2xl outline-0 border border-gray-600 p-2 h-[150px]" placeholder="Tell us about yourself"></textarea>
                </div>

                <div className="flex flex-col gap-y-2">
                    <p className="text-xl font-bold">Message</p>
                    <textarea className="w-full rounded-2xl outline-0 border border-gray-600 p-2 h-[150px]" placeholder="Write your massage here..."></textarea>
                </div>
            </div>
        </>
    )
}