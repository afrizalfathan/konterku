import { useState, useEffect } from "react"
import Table from "react-bootstrap/Table"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import axios from "axios"
import Button from "react-bootstrap/Button"
import { Link, Outlet } from "react-router-dom"

function Barang({ getPaket }) {
    return (
        <div className="tabel-barang">
            <h1>Barang</h1>
            <DropdownButton id="dropdown-basic-button" title="Pulsa">
                <Link to="/login/tambah/paket">
                    <Dropdown.Item href="#/action-1">Paket Data</Dropdown.Item>
                </Link>
                <Link to="/login/tambah/">
                    <Dropdown.Item href="#/action-2">Pulsa</Dropdown.Item>
                </Link>
            </DropdownButton>
            <Outlet />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nama Paket</th>
                        <th>Harga</th>
                        <th>Deskripsi</th>
                        <th>Provider</th>

                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody>
                    {getPaket.map((index) => (
                        <tr key={index.id}>
                            <td>{index.nama_paket}</td>
                            <td>{index.harga}</td>
                            <td>{index.deskripsi}</td>

                            <td>{index.provider}</td>

                            <td>
                                <Link to={`/login/barang/${index.id}/edit`}>
                                    <Button>Edit</Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Barang
