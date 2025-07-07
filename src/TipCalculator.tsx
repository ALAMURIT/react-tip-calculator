import InputWidget from "./InputWidget";

export default function TipCalculator(){
    return(
        <div>
            {/* input div */}
            <div>
                <InputWidget _textHolder="amount" _value={5}></InputWidget>
                <InputWidget _textHolder="people" _value={8}></InputWidget>
            </div>
            {/* output div */}
            <div>

            </div>
        </div>
    )
}