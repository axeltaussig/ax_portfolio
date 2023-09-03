import React, { useState } from "react";

const Subscribe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (req, res) => {}
    return (
        <form onSubmit={handleSubmit}>
            <h4>
                Subscribe To Newsletter
            </h4>
            <label>
                Full Name:
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <label>
                Email
                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </label>
        </form>
    )
}

export default Subscribe