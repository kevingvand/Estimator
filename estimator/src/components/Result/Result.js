import "./Result.scss"
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import EstimationContext from "../../contexts/EstimationContext";
import Badge from 'react-bootstrap/Badge';

function Result() {
    const storyPoints = [1, 2, 3, 5, 8, 13, 20, 40, 100]

    const { globalEstimation } = useContext(EstimationContext);
    const estimationTopics = Object.keys(globalEstimation);
    const totalEstimation = estimationTopics.reduce((total, currentTopic) => total += parseInt(globalEstimation[currentTopic]), 0)

    const closestStoryPoint = storyPoints.reduce(function (result, current) {
        return (Math.abs(current - totalEstimation) < Math.abs(result - totalEstimation) ? current : result);
    });

    return (
        <Card className="result-card">
            <Card.Body>
                <h1>Your Estimation</h1>
                <Badge className="result">
                    {totalEstimation} {totalEstimation != closestStoryPoint && <span>({closestStoryPoint})</span>}
                </Badge>
            </Card.Body>
        </Card>
    );
}

export default Result;
