export const FormPageInputCheckBoxes = () => {
    return <>
        <div className="w-[50%] bg-white  shadow-[0px_0px_39px_0px_rgba(34,60,80,0.2)] rounded-2xl p-4 flex flex-col gap-y-4 mt-3">
            <p className="text-2xl font-bold">CheckBoxes</p>
            <div className="flex gap-x-2">
                <input type="checkbox" />
                <p className="text-xl">Send me email notifications</p>
            </div>

            <div className="flex gap-x-2">
                <input type="checkbox" />
                <p className="text-xl">Subscribe to newsletter</p>
            </div>

            <div className="flex gap-x-2">
                <input type="checkbox" />
                <p className="text-xl">Enable two-factor authentication</p>
            </div>
        </div>
    </>
}