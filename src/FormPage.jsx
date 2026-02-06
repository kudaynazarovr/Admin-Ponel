import FormPageInput from "./components/FromPage/FormPageInput";
import { LayoutContentTop } from "./components/content/LayoutContentTop"

const Form = ({ text, title }) => {
    return (
        <div className="p-8 bg-white">
            <LayoutContentTop title={"Form Elements"} text={"Comprehensive form components with validation and various input types."} />
            <FormPageInput />
        </div>
    );
};

export default Form
