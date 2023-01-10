import Card from 'react-bootstrap/Card';
import EstimationItem from '../EstimationItem/EstimationItem';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import EstimationContext from '../../contexts/EstimationContext';

function Estimation() {

const {resetEstimation} = useContext(EstimationContext);

  return (
    <Card>
      <Card.Body>
        <EstimationItem topic="technical-design" title="Technical Design" />
        <EstimationItem topic="database" title="Database" />
        <EstimationItem topic="api" title="API" />
        <EstimationItem topic="business-logic" title="Business Logic" />
        <EstimationItem topic="client" title="Client" />
        <EstimationItem topic="documentation" title="Documentation" />
        <EstimationItem topic="testing" title="Testing" />
        <Button className="w-100" onClick={resetEstimation}>Reset</Button>
      </Card.Body>
    </Card>
  );
}

export default Estimation;
