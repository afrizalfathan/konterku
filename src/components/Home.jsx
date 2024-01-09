import React from "react"
import { Button, Container, Row, Col, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import sip from "../assets/sip.png"
import aman from "../assets/safe.png"
import praktis from "../assets/simpel.png"
import notes from "../assets/notes.png"

function Home({
    getPulsa,
    setInputPulsa,
    setInputProvider,
    setInputGmail,
    setInputHandphone,
    setInputMethodPembayaran,
    inputBuyHandler,
    provider,
}) {
    return (
        <div>
            <div>
                <h1 className="text-center">Selamat Datang Di Konterku!</h1>
            </div>
            <br />
            <Row className="py-5 container-fluid d-flex">
                <Col sm={7}>
                    <div className="d-flex justify-content-center m-auto">
                        <div className="mx-3">
                            <br />
                            <div className="bordered border-3 border-top border-bottom">
                                <p className="h2">
                                    Isi Pulsa dan Kuota, Hanya{" "}
                                    <span className="text-warning">
                                        Satu Klik
                                    </span>{" "}
                                    Dari Jauh!
                                </p>
                            </div>
                            <div className="bordered">
                                <p>
                                    KonterKu adalah solusi penjualan pulsa dan
                                    kuota secara online melalui website dan
                                    memberikan anda akses mudah, cepat, dan aman
                                    ke berbagai produk seluler 24/7
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col sm={4} className="ms-2">
                    <Container className="collor rounded pt-2 pb-3">
                        <p className="text-center mb-3">
                            Dapatkan Pulsa dan kuota disini
                        </p>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) =>
                                        setInputGmail(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Form.Select
                                className="mb-3"
                                onChange={(e) => {
                                    setInputProvider(e.target.value)
                                }}
                            >
                                <option disabled selected>
                                    Provider
                                </option>

                                {[
                                    "Telkomsel",
                                    "Indosat",
                                    "XL",
                                    "Tri",
                                    "Axis",
                                    "Smartfren",
                                    "by.u",
                                ].map((index) => (
                                    <option value={index}>{index}</option>
                                ))}
                            </Form.Select>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="number"
                                    placeholder="Nomor Handphone"
                                    onChange={(e) =>
                                        setInputHandphone(e.target.value)
                                    }
                                />
                            </Form.Group>
                            <Form.Select
                                className="mb-3"
                                onChange={(e) => {
                                    setInputPulsa(e.target.value)
                                }}
                            >
                                <option disabled selected>
                                    Pulsa
                                </option>
                                {getPulsa.map((index) => (
                                    <option value={index.nominal}>
                                        Pulsa - {index.nominal}
                                    </option>
                                ))}
                            </Form.Select>
                            <Form.Select
                                className="mb-3"
                                onChange={(e) => {
                                    setInputMethodPembayaran(e.target.value)
                                    console.log(e.target.value)
                                }}
                            >
                                <option selected>Pembayaran</option>
                                <option value="Bank BCA">Bank BCA</option>
                                <option value="Bank Permata">
                                    Bank Permata
                                </option>
                                <option value="Bank BSI">Bank BSI</option>
                            </Form.Select>
                            <Form.Check
                                className="mt-2 text-center"
                                type="checkbox"
                                id="flexCheckDefault"
                                label="Baca dulu syarat & ketentuan sebelum melakukan order"
                            />
                            <Link to="/konfirmasi">
                                <Button
                                    onClick={inputBuyHandler}
                                    href="konfirmasi"
                                    variant="warning"
                                    className="px-5 justify-content-center d-flex"
                                >
                                    Pesan sekarang
                                </Button>
                            </Link>
                        </Form>
                    </Container>
                </Col>
            </Row>
            <Container align="center">
                <div className="rounded bordered2 rounded collor">
                    <div>
                        Jangan Sampai Terlewatkan Program dan Promo Dari Kami
                        <br />
                        <Button
                            variant="light"
                            className="rounded-pill shadow-lg"
                        >
                            Lihat Promo
                        </Button>
                    </div>
                </div>
            </Container>
            {/*kenapa harus kami start*/}
            <Container className="my-5 col-10 col-sm-9 col-md-8 col-lg-6">
                <h2 className="text-center mb-5">
                    Keuntungan bertransaksi di KonterKu
                </h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <Button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                <strong>Mudah </strong>
                                <img
                                    src={sip}
                                    width="20px"
                                    height="20px"
                                    alt="Icon"
                                />
                            </Button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>Dengan KonterKu,</strong> kamu bisa
                                melakukan transaksi kapan saja dan dimana saja.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <Button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <strong>Aman </strong>
                                <img
                                    src={aman}
                                    width="20px"
                                    height="20px"
                                    alt="Icon"
                                />
                            </Button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Kami memastikan semua informasi yang ada terjaga{" "}
                                <strong>aman</strong> dalam setiap transaksi
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <Button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                <strong>Praktis </strong>
                                <img
                                    src={praktis}
                                    width="20px"
                                    height="20px"
                                    alt="Icon"
                                />
                            </Button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                Transaksi dapat dilakukan hanya dengan beberapa
                                kali klik saja
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="collor m-auto p-5">
                <p className="h2 text-center">Alur Transaksi</p>
            </div>
            <Container fluid>
                <Container className="mt-5">
                    <Row className="text-center"></Row>
                    <Row>
                        <Col md={3} className="hovered-card">
                            <div className="justify-content-center">
                                <div className="d-flex justify-content-center">
                                    <i className="bi bi-bag-check-fill display-5"></i>
                                </div>
                            </div>
                            <div className="mt-3 text-center text-dark">
                                <h4>Order</h4>
                            </div>
                        </Col>
                        <Col md={3} className="hovered-card">
                            <div className="justify-content-center">
                                <div className=" d-flex align-items-center justify-content-center">
                                    <i className="bi bi-currency-dollar display-5"></i>
                                </div>
                            </div>
                            <div className="mt-3 text-center text-dark">
                                <h4>Bayar</h4>
                            </div>
                        </Col>
                        <Col md={3} className="hovered-card">
                            <div className="justify-content-center">
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="bi bi-receipt display-5"></i>
                                </div>
                            </div>
                            <div className="mt-3 text-center text-dark">
                                <h4>Konfirmasi</h4>
                            </div>
                        </Col>
                        <Col md={3} className="hovered-card">
                            <div className="justify-content-center">
                                <div className="d-flex align-items-center justify-content-center">
                                    <i className="bi bi-hand-thumbs-up display-5"></i>
                                </div>
                            </div>
                            <div className="mt-3 text-center text-dark">
                                <h4>Selesai</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <hr className="mt-5" />
            <Container fluid py-5>
                <Container>
                    <h2 className="text-center mb-5">Panduan singkat</h2>
                    <div className="col-12 mb-3">
                        <figure>
                            <blockquote className="blockquote">
                                <p>
                                    <img
                                        src={notes}
                                        width="40px"
                                        height="40px"
                                        alt="Icon"
                                    />{" "}
                                    Bagaimana Cara Melakukan Pembayaran?
                                </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <cite title="Source Title">
                                    Setelah melakukan order, nominal harga dan
                                    cara pembayaran serta nomor rekening akan
                                    muncul di halaman detail transaksi.
                                    Selanjutnya lakukan pembayaran sesuai jumlah
                                    tersebut, harus sama dengan yang tertera
                                    tidak perlu dibulatkan nominalnya.
                                </cite>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-12 mb-3">
                        <figure className="text-end">
                            <blockquote className="blockquote">
                                <p>
                                    <img
                                        src={notes}
                                        width="40px"
                                        height="40px"
                                        alt="Icon"
                                    />{" "}
                                    Apakah Bisa Melakukan Order Tanpa Login?
                                </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <cite title="Source Title">
                                    Bisa, Anda bisa melakukan order tanpa harus
                                    login hanya untuk pembayaran dengan transfer
                                    bank, namun disarankan untuk mendaftar
                                    terlebih dahulu agar transaksi berikutnya
                                    akan menjadi lebih mudah.
                                </cite>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-12 mb-3">
                        <figure>
                            <blockquote className="blockquote">
                                <p>
                                    <img
                                        src={notes}
                                        width="40px"
                                        height="40px"
                                        alt="Icon"
                                    />{" "}
                                    Bagaimana Cara Mengisi Pulsa Atau Kuota?
                                </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <cite title="Source Title">
                                    Cukup lengkapi isian data pada form order,
                                    mulai pemilihan produk sampai metode
                                    pembayaran yang akan digunakan. Kemudian
                                    klik tombol pesan sekarang. Pastikan data
                                    yang Anda masukkan sudah benar sebelum klik
                                    tombol order.
                                </cite>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="col-12 mb-3">
                        <figure className="text-end">
                            <blockquote className="blockquote">
                                <p>
                                    <img
                                        src={notes}
                                        width="40px"
                                        height="40px"
                                        alt="Icon"
                                    />{" "}
                                    Berapa Lama Pengisian Kuota Diproses?
                                </p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                <cite title="Source Title">
                                    Sistem akan langsung melakukan pengisian
                                    setelah pembayaran anda terkonfirmasi oleh
                                    sistem. Jika dalam 5 menit kuota anda belum
                                    masuk segera pilih menu Bantuan.
                                </cite>
                            </figcaption>
                        </figure>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default Home
