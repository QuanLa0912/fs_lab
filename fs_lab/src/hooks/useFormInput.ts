import { useState } from "react";
import type { ChangeEvent } from "react";

export function useFormInput(initValue = "") {
    const [value, setValue] = useState(initValue);
    const [error, setError] = useState("");

    function onChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setValue(event.target.value)
    }

    return{
        value,
        error,
        setError, 
        onChange
    }
}

export default useFormInput;