import Button from "react-bootstrap/Button"
import React from "react"
import Form from "react-bootstrap/Form"

function AddPaketData({
    setHarga,
    setProvider,
    setNamaPaket,
    setDeskripsi,
    addPaketDataHandler,
}) {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nama Paket Data :</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Pulsa "
                        onChange={(e) => setNamaPaket(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Harga :</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Harga "
                        onChange={(e) => setHarga(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Provider :</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Provider "
                        onChange={(e) => setProvider(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Deskripsi :</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Deskripsi "
                        onChange={(e) => setDeskripsi(e.target.value)}
                    />
                </Form.Group>
                <Button variant="warning" onClick={addPaketDataHandler}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddPaketData
