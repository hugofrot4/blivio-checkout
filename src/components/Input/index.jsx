import { useEffect, useState } from "react"
import InputMask from "react-input-mask";
import { IoAlertCircleOutline } from "react-icons/io5";

export default function Input({name, type, label, icon, value, setValue, validationError, mask}){
    const [error, setError] = useState(false);
    const [valid, setValid] = useState(false);

    const handleInputChange = (e) => {
        setValue(e.target.value)

        if(e.target.value.trim() === ""){
            setValid(false)
            setError(true)
        } else {
            setValid(true)
            setError(false)
        }
    }

    useEffect(() => {
        if(value.trim() === ""){
            setValid(false)
        } else {
            setValid(true)
        }
    }, [value])

    return(
        <div>
            <div className={`relative group bg-white py-2 px-4 flex items-center gap-4 rounded text-grey-cart-text border-2 border-grey-cart focus-within:border-primary w-full h-16 ${error && 'border border-red-error'}`}>
                {icon}
                <div className="flex flex-col w-full gap-1">
                    <label htmlFor={name} className={`uppercase text-sm translate-y-4  cursor-text  group-focus-within:translate-y-0  group-focus-within:text-xs group-focus-within:text-primary duration-200 ${valid && '!translate-y-0 !text-xs'}`}>{label}</label>
                    <InputMask
                        className="w-full outline-none text-black"
                        type={type}
                        name={name}
                        id={name}
                        value={value}
                        onChangeCapture={handleInputChange}
                        mask={mask}
                    />
                </div>
                <IoAlertCircleOutline size={20} className={`text-red-error absolute top-[21px] right-2 hidden ${error && '!block'}`}/>
            </div>
            {error && 
                <p className="text-red-error text-xs">{validationError}</p>
            }
        </div>
    )
}