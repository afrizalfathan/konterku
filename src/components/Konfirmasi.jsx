import React from "react"
import {
    Container,
    Row,
    Col,
    Form,
    Card,
    ListGroup,
    Button,
    Image,
} from "react-bootstrap"
import bca from "../assets/bca.png"

const Konfirmasi = ({ inputBuy }) => {
    console.log(inputBuy)
    return (
        <Container fluid>
            <Row className="p-0 m-0">
                {/* Left side */}
                <Col sm={6} className="justify-content-center d-flex ms-5 mt-5">
                    <Form action="">
                        <Row className="collor p-5">
                            {/* Product Information */}
                            <Col sm={6}>
                                <Card
                                    border="primary"
                                    className="mb-3 bg-white"
                                >
                                    <Card.Body>
                                        <Form.Group controlId="productType">
                                            <Form.Label className="ms-2">
                                                <h4>Jenis Produk</h4>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value="PULSA"
                                            />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* Provider */}
                            <Col sm={6}>
                                <Card
                                    border="primary"
                                    className="mb-3 bg-white"
                                >
                                    <Card.Body>
                                        <Form.Group controlId="provider">
                                            <Form.Label className="ms-2">
                                                <h4>Provider</h4>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value={inputBuy.inputProvider}
                                            />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* Selected Package */}
                            <Col sm={6}>
                                <Card
                                    border="primary"
                                    className="mb-3 bg-white"
                                >
                                    <Card.Body>
                                        <Form.Group controlId="selectedPackage">
                                            <Form.Label className="ms-2">
                                                <h4>Pilih</h4>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value={`${inputBuy.inputPulsa}`}
                                            />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* Phone Number */}
                            <Col sm={6}>
                                <Card
                                    border="primary"
                                    className="mb-3 bg-white"
                                >
                                    <Card.Body>
                                        <Form.Group controlId="phoneNumber">
                                            <Form.Label className="ms-2">
                                                <h4>No Handphone</h4>
                                            </Form.Label>
                                            <Form.Control
                                                type="tel"
                                                readOnly
                                                value={inputBuy.inputHandphone}
                                            />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* Payment Method */}
                            <Col sm={6}>
                                <Card
                                    border="primary"
                                    className="mb-3 bg-white"
                                >
                                    <Card.Body>
                                        <Form.Group controlId="paymentMethod">
                                            <Form.Label className="ms-2">
                                                <h4>Pembayaran</h4>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value={
                                                    inputBuy.inputMethodPembayaran
                                                }
                                            />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* Purchase Date */}
                            <Col sm={6}>
                                <Card
                                    border="primary"
                                    className="mb-3 bg-white"
                                >
                                    <Card.Body>
                                        <Form.Group controlId="purchaseDate">
                                            <Form.Label className="ms-2">
                                                <h4>Tanggal Pembelian</h4>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value={
                                                    inputBuy.tanggalPembelian
                                                }
                                            />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* Payment Status */}
                            <Col sm={6}>
                                <Card
                                    border="primary"
                                    className="mb-3 bg-white"
                                >
                                    <Card.Body>
                                        <Form.Group controlId="paymentStatus">
                                            <Form.Label className="ms-2">
                                                <h4>Status Pembayaran</h4>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value="PENDING"
                                            />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>

                            {/* Purchase Status */}
                            <Col sm={6}>
                                <Card
                                    border="primary"
                                    className="mb-3 bg-white"
                                >
                                    <Card.Body>
                                        <Form.Group controlId="purchaseStatus">
                                            <Form.Label className="ms-2">
                                                <h4>Status Pembelian</h4>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                readOnly
                                                value="PROSES"
                                            />
                                        </Form.Group>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>

                        {/* Warning Content */}
                        <Row>
                            <Col sm={7}>
                                <div className="container bg-warning">
                                    <p>
                                        Jika ada kendala silahkan hub CS (0858
                                        8392 8365)
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Col>

                {/* Right side */}
                <Col sm={4}>
                    <Container className="rounded">
                        <Card className="collor justify-content-center d-flex m-5">
                            <div className="d-flex justify-content-center m-5">
                                <img
                                    src={bca}
                                    width="300px"
                                    height="100px"
                                    alt="BCA Logo"
                                />
                            </div>
                            <Card.Body>
                                <ul className="list-group list-group-flush text-center collor">
                                    <li className="list-group-item">
                                        No. Rekening 6830707598
                                    </li>
                                    <li className="list-group-item">
                                        Atas Nama Ariel Syifa Humaira
                                    </li>
                                    <li className="list-group-item">
                                        {`Rp. ${inputBuy.inputPulsa}`}
                                    </li>
                                    <li className="list-group-item">
                                        Kode unik Rp1
                                    </li>
                                    <li className="list-group-item">
                                        {`Rp. ${inputBuy.inputPulsa}`}
                                    </li>
                                </ul>
                            </Card.Body>

                            <ul>
                                <li>
                                    Silahkan lakukan pembayaran =
                                    {`Rp. ${inputBuy.inputPulsa}`}
                                </li>
                                <li>
                                    Setelah melakukan pembayaran, klik
                                    konfirmasi pembayaran
                                </li>
                                <li>Pembayaran berlaku s/d Jam 23.59</li>
                                <li>
                                    Jika sudah konfirmasi pembayaran tetapi
                                    pulsa/data belum masuk, silahkan hubungi cs
                                    kami
                                </li>
                            </ul>

                            <Card.Footer className="p-2 justify-content-center d-flex">
                                <Button href="#" variant="primary">
                                    KONFIRMASI PEMBAYARAN
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Container>
                </Col>
            </Row>

            {/* Footer */}
            <footer>
                <div className="collor">
                    <Row
                        style={{
                            maxWidth: "100%",
                            height: "140px",
                            maxHeight: "100%",
                        }}
                    >
                        <Col
                            sm={6}
                            className="d-flex justify-content-center mt-5"
                        >
                            Tentang kami | Bantuan | Syarat & Ketentuan
                        </Col>
                        <Col sm={6} className="mt-3">
                            <div className="justify-content-center d-flex">
                                <p className="h5">Metode Pembayaran</p>
                            </div>
                            <div className="justify-content-center d-flex">
                                <img
                                    src={bca}
                                    alt="logo bca"
                                    width="130px"
                                    height="50px"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            </footer>
        </Container>
    )
}

export default Konfirmasi
