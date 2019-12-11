import React, { Component } from 'react';
import './App.css';
import PaymentsForm from './components/PaymentsForm';
import HeadBar from './components/HeadBar';

import { Glyphicon, Table, Row, Col, Grid, Panel } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
        "payments": [],
        "wCode": false
    }
    this.handleAddTable = this.handleAddTable.bind(this);
    this.seeCode = this.seeCode.bind(this);
  }

  removeTodo(index) {
    this.setState({
      payments: this.state.payments.filter((e, i) => {
        return i !== index
      })
    });
  }

  seeCode(){
    this.setState({
      wCode: !this.state.wCode
    })
   
  }
  handleAddTable(todo) {
    this.setState({
      payments: [...this.state.payments, todo]
    })
  }

  render() {
    const payments = this.state.payments.map((todo, i) => {
      return (
        <tr key={i}>
          <td>{todo.name}</td>
          <td>{todo.card}</td>
          <td>{todo.date}</td>
          <td>{this.state.wCode ? todo.code : '***'}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={this.removeTodo.bind(this, i)}>
               <Glyphicon glyph="trash" />
            </button>
            <button
              className="btn btn-primary"
              onClick={this.seeCode}>
               <Glyphicon glyph={this.state.wCode ? "eye-close": "eye-open" } />
            </button>
          </td>
        </tr>
      )
    });

    return (
      <div className="App">
        <HeadBar/>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={4}>
              <PaymentsForm onAddTodo={this.handleAddTable}></PaymentsForm>
             
            </Col>
            <Col xs={12} md={8}>
            <Panel>
               <Panel.Body>
                 <Table striped hover>
                   <thead>
                     <tr>
                       <th scope="col">Name</th>
                       <th scope="col">Card number</th>
                       <th scope="col">Date</th>
                       <th scope="col">CVV</th>
                       <th scope="col">Action</th>
                     </tr>
                   </thead>
                   <tbody>
                       {payments}
                   </tbody>
                   </Table>
               </Panel.Body>
             </Panel>
            </Col>
          </Row>
          </Grid>
      </div>
    );
  }
}

export default App;
