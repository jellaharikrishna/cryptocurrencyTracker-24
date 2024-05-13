import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyDetails()
  }

  getCurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
    }))
    this.setState({cryptocurrenciesList: updatedData, isLoading: false})
  }

  render() {
    const {cryptocurrenciesList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="cryptocurrency-container">
        <h1 className="cryptocurrency-title">Cryptocurrency Tracker</h1>
        <img
          className="cryptocurrency-image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="cryptocurrency-card">
          <div className="coin-type-card">
            <p className="coin-heading">Coin Type</p>
            <div className="currency-type-card">
              <p className="currency-type">USD</p>
              <p className="currency-type">EURO</p>
            </div>
          </div>
          <ul className="cryptocurrency-data-container">
            {cryptocurrenciesList.map(eachData => (
              <CryptocurrencyItem
                key={eachData.id}
                currencyDataDetails={eachData}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
