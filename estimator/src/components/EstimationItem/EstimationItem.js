import "./EstimationItem.scss"
import Form from 'react-bootstrap/Form';
import { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan, faAngleDoubleDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import EstimationContext from "../../contexts/EstimationContext";

function EstimationItem(props) {

  const { globalEstimation, setTopicEstimation } = useContext(EstimationContext);

  const [estimation, setEstimation] = useState(0);

  useEffect(() => {
    const score = globalEstimation[props.topic];
    setEstimation(score ? score : 0);
  }, [globalEstimation]);

  const onEstimationChange = (event, estimationState) => {
    setEstimation(event.target.value);
    setTopicEstimation(props.topic, event.target.value);
  }

  return (
    <div className="estimation-item">
      <Form.Group className="mb-3">
        <Form.Label>{props.title}</Form.Label>
        <div key={`${props.topic}-radio`} className='mb-3'>
          <Form.Check inline label={(<FontAwesomeIcon icon={faBan} />)} name={`${props.topic}-radio`} type="radio" id={`${props.topic}-radio-1`} checked={estimation == "0"} onChange={onEstimationChange} value="0" />
          <Form.Check inline label={(<FontAwesomeIcon icon={faAngleDoubleDown} />)} name={`${props.topic}-radio`} type="radio" id={`${props.topic}-radio-2`} checked={estimation == "1"} onChange={onEstimationChange} value="1" />
          <Form.Check inline label={(<FontAwesomeIcon icon={faCircle} />)} name={`${props.topic}-radio`} type="radio" id={`${props.topic}-radio-3`} checked={estimation == "2"} onChange={onEstimationChange} value="2" />
          <Form.Check inline label={(<FontAwesomeIcon icon={faAngleDoubleUp} />)} name={`${props.topic}-radio`} type="radio" id={`${props.topic}-radio-4`} checked={estimation == "3"} onChange={onEstimationChange} value="3" />
        </div>
      </Form.Group>
    </div>
  );
}

export default EstimationItem;
