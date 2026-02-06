import { FormPageInputBottom } from "./FormPageInputBottom";
import { FormPageInputBottom2 } from "./FormPageInputBottom2";
import { FormPageInputCheckBoxes } from "./FormPageInputCheckBoxes";
import { FormInputLeft } from "./FormPageInputLeft";
import { FormPageInputRadioButton } from "./FormPageInputRadioButton";
import { FormPageInputRight } from "./FormPageInputRight";

const FormPageInput = () => {
    return <>
        <h3 className="font-bold text-3xl mt-2">Basic Input</h3>
        <div className="flex gap-x-2">
            <FormInputLeft />
            <FormPageInputRight />
        </div>
        <h3 className="text-3xl font-bold mt-3">Select & Textarea</h3>
        <div className="flex gap-x-2">
            <FormPageInputBottom />
            <FormPageInputBottom2 />
        </div>
        <h3 className="text-3xl font-bold mt-3">Checkboxes & Radio Button</h3>
        <div className="flex gap-x-2">
            <FormPageInputCheckBoxes />
            <FormPageInputRadioButton />
        </div>
    </>
};

export default FormPageInput;
