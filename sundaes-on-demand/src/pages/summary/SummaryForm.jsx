import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from  'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

// const Example = () => (
//   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
//     <Button variant="success">Click me to see</Button>
//   </OverlayTrigger>
// );

export default function SummaryForm() {

  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        no ice cream actually be delivered
      </Popover.Content>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to 
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: 'blue' }}>Terms and conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms and conditions">
        <Form.Check
          type="checkbox"
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcChecked}>
        Confirm Order
      </Button>
    </Form>
  );

};