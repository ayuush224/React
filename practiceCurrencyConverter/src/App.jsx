import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const swap = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <>
    <div className='h-screen w-full bg-[#FBF6F6] p-2 flex justify-center items-center'>
      <div className='bg-[#0BA6DF] w-2xl border-2 border-white p-2.5 rounded-2xl'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='flex flex-col justify-center items-center gap-2'>
            <InputBox
              label={"From"}
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              amountDisabled={false}
              currencyOptions={options}
              currency={from}
              onCurrencyChange={(currency) => setFrom(currency)}
            />

            <button
              className='bg-[#FAA533] border-2px cursor-pointer
              rounded-lg p-1 px-2 text-black w-5/100 absolute top-46/100'
              onClick={swap}
            >swap</button>
            
            <InputBox
              label={"To"}
              amount={convertedAmount}
              onAmountChange={(amount) => setConvertedAmount(amount)}
              amountDisabled={true}
              currencyOptions={options}
              currency={to}
              onCurrencyChange={(currency) => setTo(currency)}
            />

            <button
              type='submit'
              onClick={convert}
              className='cursor-pointer bg-[#F7F0F0] p-1 rounded-lg w-full'
            >
              Convert {from} to {to}
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
)}

export default App