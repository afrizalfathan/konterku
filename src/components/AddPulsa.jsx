import Button from "react-bootstrap/Button"
import React from "react"
import Form from "react-bootstrap/Form"

function AddPulsa({ setNominal, setHarga, setProvider, addPulsaHandler }) {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupPulsa">
                    <Form.Label>Pulsa :</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Pulsa "
                        onChange={(e) => setNominal(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupHargaPulsa">
                    <Form.Label>Harga</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Harga "
                        onChange={(e) => setHarga(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupProviderPulsa">
                    <Form.Label>Provider</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Provider "
                        onChange={(e) => setProvider(e.target.value)}
                    />
                </Form.Group>
                <Button variant="warning" onClick={addPulsaHandler}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddPulsa
