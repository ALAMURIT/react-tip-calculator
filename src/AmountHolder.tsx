function AmountHolder({_holder="", _amount="0"}){
    return(
        <div className="bg-red-100">
            <p>{_holder}</p>
            <p>/person</p>
            <p>{_amount}</p>
        </div>
    )
}
export default AmountHolder