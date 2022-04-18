import './ProjectCard.css'
import ModalChart from './ModalChart';
import { useState, useEffect } from "react";
import { Card, Button, Badge, Container } from 'react-bootstrap';

function ProjectCard({ projectData }) {

    const [modalShow, setModalShow] = useState(false);
    const [equipmentData, setEquipmentData] = useState([]);
    const [materialData, setMaterialData] = useState([]);

    useEffect(() => {

        (async () => {

            let equipData = {};
            let matData = {};
            const EData = [];
            const MData = [];
            let temp = {};

            try {

                // Loop for Extarct Unique Datapoints & Frequency 

                // Loop for Equipment
                for (let j = 0; j < projectData.data.equipment.length; j++) {
                    if (projectData.data.equipment[j] in equipData) {
                        equipData[projectData.data.equipment[j]] = equipData[projectData.data.equipment[j]] + 1;
                    } else {
                        equipData[projectData.data.equipment[j]] = 1;
                    }
                }

                for (const equip in equipData) {
                    temp = { label: equip, value: equipData[equip] };
                    EData.push(temp);
                }

                // Loop for Material
                for (let j = 0; j < projectData.data.material.length; j++) {
                    if (projectData.data.material[j] in matData) {
                        matData[projectData.data.material[j]] = matData[projectData.data.material[j]] + 1;
                    } else {
                        matData[projectData.data.material[j]] = 1;
                    }
                }

                for (const mat in matData) {
                    temp = { label: mat, value: matData[mat] };
                    MData.push(temp);
                }

            } catch (error) {
                console.log(error);
            }
            setEquipmentData(EData);
            setMaterialData(MData);

        })();
    });

    return (
        <Card className="project-card" >
            <Card.Img className="card-image" variant="top" src={projectData.img} />
            <Card.Body>
                <Card.Title className="card-title">{projectData.title}</Card.Title>
                <Card.Text className="card-desc">{projectData.description}</Card.Text>
                <Badge className="card-tags">{projectData.tags[0]}</Badge> <Badge className="card-tags">{projectData.tags[1]}</Badge> <Badge className="card-tags">{projectData.tags[2]}</Badge> <Badge className="card-tags">{projectData.tags[3]}</Badge>
            </Card.Body>
            <Container className="d-flex justify-content-center">
                <Button className="card-button" size="sm" onClick={() => setModalShow(true)}>View More</Button>
                <ModalChart
                    show={modalShow}
                    materialData={materialData}
                    equipmentData={equipmentData}
                    projectData={projectData}
                    onHide={() => setModalShow(false)}
                />
            </Container>
        </Card >
    )
};

export default ProjectCard;