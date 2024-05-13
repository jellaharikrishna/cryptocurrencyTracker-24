import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDataDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currencyDataDetails

  return (
    <li className="currency-data-card">
      <div className="currency-logo-name-card">
        <img className="currency-logo" src={currencyLogo} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-value-card">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
