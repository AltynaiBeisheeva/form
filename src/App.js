import React, { useState } from "react";
import './App.css';

export default function Form() {
    const [form, setForm] = useState({
        fio: "",
        number: "",
        email: ""
    });
    const [showData, setShowData] = useState(false);

    const handleShowData = () => {
        setShowData(true);
    };

    return (
        <div className="form-container">
            <label>
                FIO:
                <input
                    type="text"
                    value={form.fio}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            fio: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Phone number:
                <input
                    type="tel"
                    value={form.number}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            number: e.target.value
                        });
                    }}
                />
            </label>

            <label>
                Email:
                <input
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                        setForm({
                            ...form,
                            email: e.target.value
                        });
                    }}
                />
            </label>

            <button onClick={handleShowData}>Показать</button>

            {showData && (
                <div className="real">
                    <p>FIO: {form.fio}</p>
                    <p>Phone number: {form.number}</p>
                    <p>Email: {form.email}</p>
                </div>
            )}
        </div>
    );
}
