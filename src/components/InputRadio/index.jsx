import { useEffect, useState } from "react";
import { IoMdRadioButtonOn } from "react-icons/io";

export default function InputRadio({group, value, title, description, price, tag, changer, setChanger}){
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(changer === value);
    }, [changer, value]);

    const handleRadioChange = (e) => {
        setChanger(e.target.value)
    }

    return(
        <label htmlFor={value} className={`group p-4 flex items-center justify-between border  rounded duration-200 ${checked ? 'border-primary' : 'border-border-radio'}`}>
            <div className="flex items-center gap-1">
                <input
                    className="hidden peer"
                    type="radio"
                    name={group}
                    value={value}
                    id={value}
                    onChange={handleRadioChange}
                />
                <div className="duration-200 text-radio-icon peer-checked:text-primary">
                    <IoMdRadioButtonOn size={24}/>
                </div>
                <div className="text-description">
                    <p className="text-sm">{title} {tag && <span className="bg-green-tag text-green-tag-text text-[10px] py-[1px] px-[6px] rounded-full font-semibold">melhor escolha</span>}</p>
                    <p className="text-xs">{description}</p>
                </div>
            </div>
            <p className="text-sm text-description">{price}</p>
        </label>
    )
}