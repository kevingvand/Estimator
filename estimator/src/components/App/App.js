import './App.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Estimation from '../Estimation/Estimation';
import Result from '../Result/Result';
import { EstimationContextProvider, EstimationContext } from '../../contexts/EstimationContext';

function App() {

  return (
    <div className="app">
      <EstimationContextProvider>
        <Container>
          <Row>
            <Col>
              <Estimation />
            </Col>
            <Col>
              <Result />
            </Col>
          </Row>
        </Container>
      </EstimationContextProvider>
    </div>
  );
}

export default App;
