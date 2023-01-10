import "./Result.scss"
import Card from 'react-bootstrap/Card';
import { useContext, useState } from "react";
import EstimationContext from "../../contexts/EstimationContext";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

function Result() {

    const [showCopiedMessage, setShowCopiedMessage] = useState(false);
    const storyPoints = [1, 2, 3, 5, 8, 13, 20, 40, 100];

    const { globalEstimation } = useContext(EstimationContext);
    const estimationTopics = Object.keys(globalEstimation);
    const totalEstimation = estimationTopics.reduce((total, currentTopic) => total += parseInt(globalEstimation[currentTopic]), 0)

    const closestStoryPoint = storyPoints.reduce(function (result, current) {
        return (Math.abs(current - totalEstimation) < Math.abs(result - totalEstimation) ? current : result);
    });

    const copyStoryPoints = function () {
        navigator.clipboard.writeText(closestStoryPoint);

        setShowCopiedMessage(true);
        setTimeout(() => {
            setShowCopiedMessage(false);
        }, 1000);
    }

    return (
        <Card className="result-card">
            <Card.Body>
                <h1>Your Estimation</h1>
                <Badge className="result">
                    {totalEstimation} {totalEstimation != closestStoryPoint && <span>({closestStoryPoint})</span>}
                </Badge>
                <Button className="w-100 mt-2" onClick={copyStoryPoints}>Copy Story Points</Button>
                {showCopiedMessage && <p className="text-center">Story Points Copied!</p>}
            </Card.Body>
        </Card>
    );
}

export default Result;
