function AmountHolder({_holder="", _amount="0"}){
    return(
        <div>
            <p>{_holder}</p>
            <p>/person</p>
            <p>{_amount}</p>
        </div>
    )
}
export default AmountHolder