import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onEatmango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  onEatbanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-container">
          <h1 className="heading">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="fruit-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />

              <button
                className="button"
                type="button"
                onClick={this.onEatmango}
              >
                Eat Mango
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="fruit-image"
              />
              <button
                className="button"
                type="button"
                onClick={this.onEatbanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
