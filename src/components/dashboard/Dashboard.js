import React from 'react';
import { Col, Row } from 'reactstrap';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: ''
    };
  }

  render = () => {
    const {} = this.props;
    return (
      <div id="formContent">
        <Col md={10} className="container-fluid">
          <h1>Here!</h1>
        </Col>
      </div>
    );
  };
}

export default Dashboard;
