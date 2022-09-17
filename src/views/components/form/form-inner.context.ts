import {useContext} from "react";
import {FormInnerContext} from "./form";


export function useFormSubmit() {
    const context = useContext(FormInnerContext);
    if (!context) {
        throw new Error("useFormSubmit can only be used inside of FormInnerContext.Provider");
    }
    return context.onSubmit;

}

