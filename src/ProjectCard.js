import './ProjectCard.css'
import { Card, Button, Badge, Container } from 'react-bootstrap';;

const ProjectCard = ({ projectData }) => {
    return (
        <Card className="project-card" >
            <Card.Img className="card-image" variant="top" src={projectData.img} />
            <Card.Body>
                <Card.Title className='card-title'>{projectData.title}</Card.Title>
                <Card.Text className='card-desc'>{projectData.description}</Card.Text>
                <Badge className='card-tags'>{projectData.tags[0]}</Badge> <Badge className='card-tags'>{projectData.tags[1]}</Badge> <Badge className='card-tags'>{projectData.tags[2]}</Badge> <Badge className='card-tags'>{projectData.tags[3]}</Badge>
                {/* 
                {projectData.tags.map((item, index) => (
                    <Badge className='card-tags'>{projectData.tags[index]}</Badge>))}
                    */}
            </Card.Body>
            <Container class="d-flex justify-content-center"><Button className='card-button' size="sm">View More</Button></Container>
        </Card >
    )
};

export default ProjectCard;