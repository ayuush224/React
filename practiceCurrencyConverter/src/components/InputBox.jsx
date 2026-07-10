function InputBox({
    label,
    amount,
    onAmountChange,
    currency,
    onCurrencyChange,
    amountDisabled,
    currencyOptions = [],
    currencyDisabled
}){
    return (
    <>
        <div className="flex flex-wrap flex-col bg-white rounded-2xl p-2.5 w-full">
            <div className="flex justify-between">
                <div className="text-center p-1">{label}</div>
                <div className="text-center p-1">Currency Type</div>
            </div>

            <div className="flex flex-row justify-between p-2">
                <input
                    className="outline-none p-1.5 bg-white border-2 rounded-lg"
                    value={amount}
                    type="number"
                    onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
                    placeholder="Amount"
                    disabled={amountDisabled}
                />
                <select
                    className="cursor-pointer border-2 rounded-xl"
                    value={currency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}   
                >
                    {currencyOptions.map((currency) => {
                        return (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        )
                    })};
                </select>
            </div>
        </div>
    </>
)};

export default InputBox;