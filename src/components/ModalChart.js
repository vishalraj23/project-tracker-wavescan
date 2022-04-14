import { Modal, Button, Container } from "react-bootstrap";
import TogglePair from "./TogglePair";
import PieChart from "./PieChart";

const ModalChart = ({ show, onHide, equipmentData, materialData, projectData }) => {

    const chartType = [
        { name: 'Pie Chart', value: '1' },
        { name: 'Bar Chart', value: '2' },
    ];

    const dataType = [
        { name: 'Equipment', value: '1' },
        { name: 'Material', value: '2' },
    ];

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {projectData.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container class="d-flex justify-content-center">
                    <TogglePair options={chartType}></TogglePair>
                    <TogglePair options={dataType}></TogglePair>
                    <PieChart
                        data={equipmentData}
                        outerRadius={150}
                        innerRadius={0}
                    ></PieChart>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalChart;

