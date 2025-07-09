import { useState } from "react";
import InputWidget from "./InputWidget";
import AmountHolder from "./AmountHolder";

export default function TipCalculator(){
    const [_amount, _setAmount] = useState(0)
    const [_person, _setPerson] = useState(1)
    const [_tipPercentage, _setTipPercentage] = useState(0)

    return(
        <div className="w-full h-screen flex justify-center content-center items-center bg-amber-200">
            {/* input div */}
            <div>
                <InputWidget _label="Amount" _onChange={e => _setAmount(Number(e.target.value))}></InputWidget>
                <InputWidget _label="Tip %" _onChange={e => _setTipPercentage(Number(e.target.value))}></InputWidget>
                <InputWidget _label="Person" _onChange={e => _setPerson(Number(e.target.value))}></InputWidget>
                <p>tip per person: {(_amount/_person)*(_tipPercentage/100)}</p>
            </div>
            {/* output div */}
            <div>
                <AmountHolder _holder="Tip" _amount={String(_amount*(_tipPercentage/100))}></AmountHolder>
                <AmountHolder _holder="Amount per person" _amount={String((_amount/_person) + (_amount/_person)*(_tipPercentage/100))}></AmountHolder>
            </div>
        </div>
    )
}