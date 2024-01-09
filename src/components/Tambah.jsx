import React from "react"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"
import { Outlet, Link } from "react-router-dom"

function Tambah() {
    return (
        <div className="tambah-container">
            <h4>Jenis Tambahkan : </h4>
            <DropdownButton id="dropdown-basic-button" title="Pulsa">
                <Link to="/login/tambah/paket">
                    <Dropdown.Item href="#/action-1">Paket Data</Dropdown.Item>
                </Link>
                <Link to="/login/tambah/">
                    <Dropdown.Item href="#/action-2">Pulsa</Dropdown.Item>
                </Link>
            </DropdownButton>
            <Outlet></Outlet>
        </div>
    )
}

export default Tambah
