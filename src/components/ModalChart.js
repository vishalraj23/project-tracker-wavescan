import { Modal, Button, Container } from "react-bootstrap";
import TogglePair from "./TogglePair";
import PieChart from "./PieChart";

const ModalChart = ({ show, onHide, equipmentData, materialData, projectData }) => {

    const chartType = ['Pie Chart', 'Bar Chart'];

    const dataType = ['Equipment', 'Material'];

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
                    <TogglePair options={dataType}></TogglePair>
                    <Container class="d-flex justify-content-center">
                        <PieChart
                            data={equipmentData}
                            outerRadius={170}
                            innerRadius={0}
                        ></PieChart>
                    </Container>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default ModalChart;

