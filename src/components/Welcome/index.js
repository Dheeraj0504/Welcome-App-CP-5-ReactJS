// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribe = () => {
    // console.log("Subscribed")
    this.setState(prevState => {
      // console.log(`previous state value: ${prevState.isSubscribed}`)
      return {
        isSubscribed: !prevState.isSubscribed,
      }
    })
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    /*---Using Ternary Operator---*/
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    /* ---Using Element Variable---*/
    const buttonText = this.getButtonText()

    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button className="button" type="button" onClick={this.onSubscribe}>
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
