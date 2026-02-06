export const FormPageInputRadioButton = () => {
    return (
        <>
            <div className="w-[50%] bg-white  shadow-[0px_0px_39px_0px_rgba(34,60,80,0.2)] rounded-2xl p-4 flex flex-col gap-y-4 mt-3">
                <p className="text-2xl font-bold">Radio Buttons</p>
                <div className="flex gap-x-2">
                    <input type="checkbox" />
                    <p className="text-xl">Free Plan</p>
                </div>

                <div className="flex gap-x-2">
                    <input type="checkbox" />
                    <p className="text-xl">Basic Plan $29/month</p>
                </div>

                <div className="flex gap-x-2">
                    <input type="checkbox" />
                    <p className="text-xl">Enterprise Plan - Custom pricing</p>
                </div>
            </div>
        </>
    )
}