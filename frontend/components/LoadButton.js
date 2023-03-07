import { Button } from "react-bootstrap"
export const LoadButton = ({filterType, showModal, setAddContactModal}) => {
    return (
        <Button variant="white" className="btn-rounded-circle bg-primary text-white mb-3" onClick={() => setAddContactModal(true)}>
            +
        </Button>
    )
}