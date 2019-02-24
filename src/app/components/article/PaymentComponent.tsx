import React, { SFC } from "react";
import {
  Button,
  Icon,
  Modal,
  Header,
  Input,
  Label,
  Message
} from "semantic-ui-react";

export const PaymentComponent: SFC<{
  isPaymentModalOpen: boolean;
  setIsPaymentModalOpen: () => void;
  paymentValue: number;
  paymentError: string;
  setPaymentValue: (value: number) => void;
  setPaymentError: (error: string) => void;
}> = ({
  isPaymentModalOpen,
  setIsPaymentModalOpen,
  paymentValue,
  paymentError,
  setPaymentValue,
  setPaymentError
}) => {
  const options = {
    key: "rzp_test_Yeo63BRlG8OPbp",
    amount: paymentValue * 100, // 2000 paise = INR 20
    name: "Swatkats Co.",
    description: "Goodwill for society",
    image: "/braille.png",
    handler: function(response: any) {
      alert(response.razorpay_payment_id);
    },
    prefill: {
      contact: "8888877777",
      name: "Gaurav Kumar",
      email: "test@test.com"
    },
    notes: {
      address: "Hello World"
    },
    theme: {
      color: "#a5673f"
    }
  };

  const payment = new Razorpay(options);

  return (
    <Modal open={isPaymentModalOpen} basic size="mini">
      <Header icon="rupee sign" content="Make Payment" />
      <Modal.Content>
        <Input
          labelPosition="right"
          type="text"
          placeholder="Amount"
          fluid
          value={paymentValue}
          onChange={event => setPaymentValue(Number(event.target.value))}
        >
          <Label basic>₹</Label>
          <input />
          <Label>.00</Label>
        </Input>
        <Message
          hidden={!Boolean(paymentError)}
          negative
          size="mini"
          content={paymentError}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button
          color="green"
          floated="left"
          onClick={() => setIsPaymentModalOpen()}
          inverted
        >
          <Icon name="checkmark" />
          Close
        </Button>
        <Button
          color="green"
          floated="right"
          onClick={() => payment.open()}
          inverted
        >
          <Icon name="checkmark" />
          Make Payment
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
