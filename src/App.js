import React from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import Display from './Components/Display';


class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      result: "",
      deci: false
    }
  }

  onClick = button => {
    let res = this.state.result
    let operator = this.state.operator
    if (button === "=") {
      this.calculate();
      
    } else if (button === "Del") {
      this.setState({ result: this.state.result.slice(0, -1) })
    } else if (button === "Clear") {
      this.setState({ result: "" })
    } else if (this.state.result === "0" && button === "0") {
      this.setState({ result: '' + button })
    /*} else if (button === "+" ||
      button === "-" ||
      button === "*" ||
      button === "/") {
      if (!this.state.operator) {
        res += button
        operator = true
        this.setState({ deci: false })
      } else {
        const num = res.slice(0, res.length - 1)
        res = num
        res += button
      }
      this.setState({ result: res }) 
    } else if (button === ".") {
      if (!this.state.deci) {
        res += "."
        this.setState({ deci: true })
      }
      this.setState({ result: res }) */
    }else if (/\./.test(button)){
      res += button 
      this.setState({result : res})
    
    } else {
      this.setState({ result: this.state.result + button, operator })
    }
  }

  calculate = () => {
    var res = ''

    if (this.state.result.includes('--')) {
      res = this.state.result.replace('--', '+')
    } else {
      res = this.state.result
    }

    try {
      this.setState({
        result: (eval(res) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Display id="display" result={this.state.result || "0"} />
        <Buttons onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
