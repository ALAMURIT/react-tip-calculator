import { useState } from "react";
import InputWidget from "./InputWidget";
import AmountHolder from "./AmountHolder";
import ButtonWidget from "./ButtonWidget";

export default function TipCalculator() {
    const [_amount, _setAmount] = useState(0)
    const [_person, _setPerson] = useState(1)
    const [_tipPercentage, _setTipPercentage] = useState(0)

    return (
        <div className="w-full h-screen flex justify-center content-center items-center bg-teal-100">
            <div className="flex flex-row bg-white w-1/2 h-1/2 justify-center items-center p-5 rounded-2xl">
                {/* input div */}
                <div className="w-1/2 h-full p-5 rounded-md flex flex-col justify-evenly">
                    <InputWidget _label="Amount" _onChange={e => _setAmount(Number(e.target.value))}></InputWidget>
                    <div className="w-full">
                        <p className='font-normal text-gray-700'>Tip %</p>
                        <div className="grid grid-cols-3 gap-3 w-full">
                            <ButtonWidget _buttonName="5%" _onClick={() => _setTipPercentage(5)}></ButtonWidget>
                            <ButtonWidget _buttonName="10%" _onClick={() => _setTipPercentage(10)}></ButtonWidget>
                            <ButtonWidget _buttonName="15%" _onClick={() => _setTipPercentage(15)}></ButtonWidget>
                            <ButtonWidget _buttonName="25%" _onClick={() => _setTipPercentage(25)}></ButtonWidget>
                            <ButtonWidget _buttonName="50%" _onClick={() => _setTipPercentage(50)}></ButtonWidget>
                            <input type="text" placeholder="custom" onChange={e => _setTipPercentage(Number(e.target.value))} className="field-sizing-fixed w-full focus:outline-2 rounded-sm outline-teal-300"></input>
                        </div>
                    </div>
                    <InputWidget _label="Number of people" _onChange={e => _setPerson(Number(e.target.value))}></InputWidget>
                </div>
                {/* output div */}
                <div className="w-1/2 h-full p-5 bg-teal-500 rounded-lg">
                    <AmountHolder _holder="Tip" _amount={String((_amount * (_tipPercentage / 100)).toFixed(2))}></AmountHolder>
                    <AmountHolder _holder="Amount per person" _amount={String(((_amount / _person) + (_amount / _person) * (_tipPercentage / 100)).toFixed(2))}></AmountHolder>
                </div>
            </div>
        </div>
    )
}