import Card from 'react-bootstrap/Card';
import EstimationItem from '../EstimationItem/EstimationItem';

function Estimation() {
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
      </Card.Body>
    </Card>
  );
}

export default Estimation;
