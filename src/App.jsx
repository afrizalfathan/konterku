import { useState, useEffect } from "react"

import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import LoginNavigation from "./components/LoginNavigation"
import Tambah from "./components/Tambah"
import AddPulsa from "./components/AddPulsa"
import AddPaketData from "./components/AddPaketData"
import axios from "axios"
import Barang from "./components/Barang"
import EditBarang from "./components/EditBarang"
import Konfirmasi from "./components/Konfirmasi"

function App() {
    const [pulsa, setPulsa] = useState({})
    const [paket, setPaket] = useState({})
    const [harga, setHarga] = useState(0)
    const [nominal, setNominal] = useState(0)
    const [provider, setProvider] = useState("")
    const [namaPaket, setNamaPaket] = useState("")
    const [deskripsi, setDeskripsi] = useState("")

    const [getPulsa, setGetPulsa] = useState([])
    const [getPaket, setGetPaket] = useState([])

    const [inputBuy, setInputBuy] = useState({})
    const [inputPulsa, setInputPulsa] = useState("")
    const [inputProvider, setInputProvider] = useState("")
    const [inputGmail, setInputGmail] = useState("")
    const [inputHandphone, setInputHandphone] = useState("")
    const [inputMethodPembayaran, setInputMethodPembayaran] = useState("")

    const inputBuyHandler = () => {
        const tanggalBeli = new Date()

        let day = tanggalBeli.getDate()
        let month = tanggalBeli.getMonth() + 1
        let year = tanggalBeli.getFullYear()

        let currentDate = `${day}-${month}-${year}`
        setInputBuy({
            inputPulsa,
            inputProvider,
            inputGmail,
            inputHandphone,
            inputMethodPembayaran,
            statusPembayaran: "Pending",
            tanggalPembelian: currentDate,
        })
    }

    useEffect(() => {
        getPaketEffect()
        getPulsaEffect()
    }, [])

    const getPaketEffect = () => {
        axios
            .get("http://localhost/api/user/paket_data")
            .then((response) => {
                setGetPaket(response.data)
            })
            .catch((err) => console.log(err))
    }

    const getPulsaEffect = () => {
        axios
            .get("http://localhost/api/user/harga_pulsa")
            .then((response) => {
                setGetPulsa(response.data)
            })
            .catch((err) => console.log(err))
    }

    const addPaketDataHandler = () => {
        setPaket({
            nama_paket: namaPaket,
            harga,
            provider,
            deskripsi,
        })

        axios.post("http://localhost/api/user/paket_data", paket)
    }

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigation />}>
                        <Route
                            index
                            element={
                                <Home
                                    getPulsa={getPulsa}
                                    setInputGmail={setInputGmail}
                                    setInputHandphone={setInputHandphone}
                                    setInputProvider={setInputProvider}
                                    setInputPulsa={setInputPulsa}
                                    provider={provider}
                                    setInputMethodPembayaran={
                                        setInputMethodPembayaran
                                    }
                                    inputBuyHandler={inputBuyHandler}
                                />
                            }
                        />
                        <Route
                            path="konfirmasi"
                            element={<Konfirmasi inputBuy={inputBuy} />}
                        />
                    </Route>

                    <Route path="/login" element={<LoginNavigation />}>
                        <Route index element={<Home getPulsa={getPulsa} />} />
                        <Route path="tambah" element={<Tambah />}>
                            <Route
                                index
                                element={
                                    <AddPulsa
                                        setNominal={setNominal}
                                        setHarga={setHarga}
                                        setProvider={setProvider}
                                        addPaketDataHandler={
                                            addPaketDataHandler
                                        }
                                    />
                                }
                            />
                            <Route
                                path="paket"
                                element={
                                    <AddPaketData
                                        setNamaPaket={setNamaPaket}
                                        setDeskripsi={setDeskripsi}
                                        setHarga={setHarga}
                                        setProvider={setProvider}
                                        addPaketDataHandler={
                                            addPaketDataHandler
                                        }
                                    />
                                }
                            />
                        </Route>
                        <Route
                            path="barang"
                            element={
                                <Barang
                                    getPaket={getPaket}
                                    getPulsa={getPulsa}
                                />
                            }
                        />
                        <Route
                            path="barang/:id/edit"
                            element={
                                <EditBarang
                                    setNamaPaket={setNamaPaket}
                                    setDeskripsi={setDeskripsi}
                                    setHarga={setHarga}
                                    setProvider={setProvider}
                                />
                            }
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
