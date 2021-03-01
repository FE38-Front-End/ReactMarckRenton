import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      firstValue: '',
      secondValue: '',
    }
    this.firstNameRer=React.createRef();
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value}
    );
  }
  handleCurse = () => {
    this.setState({
        secondValue: this.state.firstValue * 2.61.toFixed(3)
      }
    )
  }

  componentDidMount() {
    this.firstNameRer.current.focus();
  }

  render() {
    const {firstValue, secondValue} = this.state;
    return <div>
      <input type="number" name='firstValue' value={this.state.firstValue} onChange={this.handleChange}
             onKeyUp={this.handleCurse} ref={this.firstNameRer} placeholder='$'/>
      <input type="number" name='secondValue' value={this.state.secondValue} onChange={this.handleChange}/>
    </div>
  }
}

export default Form;



