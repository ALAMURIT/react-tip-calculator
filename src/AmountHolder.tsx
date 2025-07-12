function AmountHolder({_holder="", _amount="0"}){
    return(
        <div className="flex flex-row items-center w-full justify-between">
            <div>
                <p className="text-white">{_holder}</p>
                <p className="text-teal-700">/ person</p>
            </div>
            <div>
                <p className="text-4xl">$ {_amount}</p>
            </div>
        </div>
    )
}
export default AmountHolder