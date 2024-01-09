import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useParams } from "react-router-dom"
import axios from "axios"

function EditBarang({ setNamaPaket, setDeskripsi, setHarga, setProvider }) {
    const { id } = useParams()

    const [getPaket, setGetPaket] = useState([])

    useEffect(() => {
        getPulsaEffect()
    }, [])

    const getPulsaEffect = () => {
        axios
            .get(`http://localhost/api/user/paket_data/${id}`)
            .then((response) => {
                console.log(response.data)
                setGetPaket(response.data)
            })
            .catch((err) => console.log(err))
    }

    const saveHandler = () => {
        axios
            .put(`http://localhost/api/user/paket_data/${id}/edit`, {
                id: getPaket.id,
                nama_paket: getPaket.nama_paket,
                harga: getPaket.harga,
                deskripsi: getPaket.deskripsi,
                provider: getPaket.provider,
            })
            .then((response) => {
                console.log(response)
            })
            .catch((err) => console.log(err))
        console.log(getPaket)
    }

    return (
        <div className="edit-container">
            <h1>Edit</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nama Paket Data :</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Pulsa "
                        defaultValue={getPaket.nama_paket}
                        onChange={(e) => setNamaPaket(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Harga :</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Harga "
                        defaultValue={getPaket.harga}
                        onChange={(e) => setHarga(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Provider :</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Provider "
                        defaultValue={getPaket.provider}
                        onChange={(e) => setProvider(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Deskripsi :</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Deskripsi "
                        defaultValue={getPaket.deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                    />
                </Form.Group>
                <Button variant="warning" onClick={saveHandler}>
                    Save
                </Button>
            </Form>
        </div>
    )
}

export default EditBarang
