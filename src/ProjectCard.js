import './ProjectCard.css'
import { Card, Button } from 'react-bootstrap';;

const ProjectCard = ({ projectData }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={projectData.img} />
            <Card.Body>
                <Card.Title>{projectData.title}</Card.Title>
                <Card.Text>
                    {projectData.description}
                </Card.Text>
                <Card.Text>
                    Tag 1: {projectData.tags[0]}
                </Card.Text>
                <Card.Text>
                    Tag 2: {projectData.tags[1]}
                </Card.Text>
                <Card.Text>
                    Tag 3: {projectData.tags[2]}
                </Card.Text>
                <Card.Text>
                    Tag 4: {projectData.tags[3]}
                </Card.Text>
                <Button variant="primary">View More</Button>
            </Card.Body>
        </Card>
    )
};

export default ProjectCard;