import React, {useState} from 'react';

import Field from './Field';
import { PayPalButton } from "react-paypal-button-v2";
import ErrorMessage from './ErrorMessage'

const CLIENT_ID = 'AeAe1ZFo6-gHAB17f-dzA6_F1AurTtyOzF9_sbg6NNlQGGpf1QQUnlwqU0ZKbup_Hn1j87eT2GOD_pOX';

class PaymentComponent extends React.Component {

  state = {
    email: '',
    amount: '',
    email: '',
    error: null,
    showButtons: false,
    loading: true,
    paid: false
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.amount !== this.state.amount) {
      this.setState({ amount: nextProps.amount });
    }
  }

  setBillingDetails(details) {
    if (details.amount != null) {
      let error = details.amount > 0 ? null: 'Invalid amount'; 
      this.setState({ amount: details.amount, error });
    }
    if (details.email != null) {
      const error = validateEmail(details.email) ? null : 'Invalid email';
      console.log("error: ", details.email, error);
      this.setState({ email: details.email, error });
    }
  }
  render() {
    return (
      <form className="Form" >
        <fieldset className="FormGroup">
          <Field
            label="Amount"
            id="amount"
            type="number"
            placeholder="100"
            required
            value={this.state.amount}
            onChange={(e) => {
              console.log(e.target.value);
              this.setBillingDetails({amount: e.target.value});
            }} />
        </fieldset>
        <fieldset className="FormGroup">
          <Field
            label="email"
            id="email"
            type="email"
            placeholder="example@ucsd.edu"
            required
            value={this.state.email}
            onChange={(e) => {
              console.log(e.target);
              this.setBillingDetails({email: e.target.value});
            }} />
        </fieldset>

        {this.state.error && <ErrorMessage>{this.state.error}</ErrorMessage>}
        <div >
          <PayPalButton
            amount={this.state.amount}
            options={{
              clientId: CLIENT_ID
            }}
            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
            onSuccess={(details, data) => {
              alert("Transaction completed by " + details.payer.name.given_name);
              this.props.onSuccess({data, details});
            }} />
        </div>
      </form>
    );
  }
}

function validateEmail(emailField){
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(emailField);
}

export default PaymentComponent;