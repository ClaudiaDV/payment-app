import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Panel } from 'react-bootstrap';

class PaymentsForm extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
      card: '',
      date: '',
      code: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      name: '',
      card: '',
      date: '',
      code: ''
    });
  }

  handleChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }
  getValidationName() {
      const length = this.state.name.length;
      if (length > 3) return 'success';
      else if (length > 2) return 'warning';
      else if (length > 0) return 'error';
      return null;
    }
  getValidationCard() {
      const card = this.state.card;
      const length = card.length;
      const cardRegex=/^(?:(\d{4}\s?){4}|(\d{4,6}\s?){3})$/;

      if (cardRegex.test(card)) return 'success';
      else if (length > 0) return 'error'
      return null;
  }
  getValidationDate() {
      const date = this.state.date;
      const length = this.state.date.length;
      const dateRegex = /(0?[1-9]|1[0-2])\/(\d{2})$/;

      if (dateRegex.test(date)) return 'success';
      else if (length > 0) return 'error'
      return null;
  }
  getValidationCode() {
    const code = this.state.code;
    const length = code.length;

    const codeRegex =/^[0-9]{3,4}$/;
     
    if (codeRegex.test(code)) return 'success';
    else if (length > 0) return 'error'
    return null;
  }

  render() {
    return (
      <div>
      <Panel>
         <Panel.Body>
           <form onSubmit={this.handleSubmit} className="card-body">
             <FormGroup
               controlId="inputName"
               validationState={this.getValidationName()}
             >
             <ControlLabel>Payment</ControlLabel>
             
             <FormControl
               type="text"
               name="name"
               className="form-control"
               value={this.state.name}
               onChange={this.handleChange}
               placeholder="Payment name"
               required = {true}
             />
             <FormControl.Feedback />
             <HelpBlock>The validation is by longitud.</HelpBlock>
           </FormGroup>
               <FormGroup
                 controlId="inputcard"
                 validationState={this.getValidationCard()}
               >
               <ControlLabel>Card Number</ControlLabel>
               <FormControl
                 type="number"
                 name="card"
                 className="form-control"
                 value={this.state.card}
                 onChange={this.handleChange}
                 placeholder="xxxx xxxx xxxx xxxx"
                 required = {true}
               />
               <FormControl.Feedback />
               <HelpBlock>The validation is by longitud.</HelpBlock>
             </FormGroup>
             <FormGroup
               controlId="inputDate"
               validationState={this.getValidationDate()}
             >
             <ControlLabel>Expiration (mm/yy)</ControlLabel>
             <FormControl
               type="text"
               name="date"
               className="form-control"
               value={this.state.date}
               onChange={this.handleChange}
               placeholder="10/18"
               required = {true}
             />
             <FormControl.Feedback />
             <HelpBlock>The validation is by date format.</HelpBlock>
           </FormGroup>
           <FormGroup
             controlId="inputCode"
             validationState={this.getValidationCode()}
           >
           <ControlLabel>Security Code</ControlLabel>
           <FormControl
             type="number"
             name="code"
             className="form-control"
             value={this.state.code}
             onChange={this.handleChange}
             placeholder="123"
             required = {true}
           />
           <FormControl.Feedback />
           <HelpBlock>The validation is by Security Code.</HelpBlock>
         </FormGroup>
           <Button bsStyle="primary"type="submit">Register</Button>
         </form>
         </Panel.Body>
       </Panel>

      </div>
    )
  }

}

export default PaymentsForm;
