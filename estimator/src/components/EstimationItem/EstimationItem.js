import "./EstimationItem.scss"
import Form from 'react-bootstrap/Form';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
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
          <ButtonGroup className="mb-3">
            <ToggleButton name={`${props.topic}-radio`} type="radio" id={`${props.topic}-radio-1`} variant="outline-danger" checked={estimation == "0"} value="0" onChange={onEstimationChange}>
              <FontAwesomeIcon icon={faBan} />
            </ToggleButton>
            <ToggleButton name={`${props.topic}-radio`} type="radio" id={`${props.topic}-radio-2`} variant="outline-primary" checked={estimation == "1"} value="1" onChange={onEstimationChange}>
              <FontAwesomeIcon icon={faAngleDoubleDown} />
            </ToggleButton>
            <ToggleButton name={`${props.topic}-radio`} type="radio" id={`${props.topic}-radio-3`} variant="outline-primary" checked={estimation == "2"} value="2" onChange={onEstimationChange}>
              <FontAwesomeIcon icon={faCircle} />
            </ToggleButton>
            <ToggleButton name={`${props.topic}-radio`} type="radio" id={`${props.topic}-radio-4`} variant="outline-primary" checked={estimation == "3"} value="3" onChange={onEstimationChange}>
              <FontAwesomeIcon icon={faAngleDoubleUp} />
            </ToggleButton>
          </ButtonGroup>
        </div>
      </Form.Group >
    </div >
  );
}

export default EstimationItem;
