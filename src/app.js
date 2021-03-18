import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './app.css';
import rawData from './data.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      beastData: rawData,
      isSelected: false
    }
  }

  selectBeast = () => this.setState({ isSelected: false});

  handleClose = () => this.setState({ isSelected: true});

  render() {
    return(
      <>
      <Header />
      <Container fluid>
        <Row>
          <Col>
            <Main
              beastData={this.state.beastData}
              isSelected={this.state.isSelected}
              unselectBeast={this.handleClose}
              showBeast={this.selectBeast}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
      </>
    );
  }
}

export default App;
