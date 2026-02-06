import { useState } from "react";
import { IoSunnySharp } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";

export const LayoutHeaderTheme = () => {
    const [isSun, setIaSun] = useState(true)
    return (
        <button className="text-[25px]" onClick={() => setIaSun(!isSun)}>
            {isSun ? <IoSunnySharp /> : <LuMoon />}
        </button>
    );
};
