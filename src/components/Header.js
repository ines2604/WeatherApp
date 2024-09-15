import React from "react";

function Header({city, setCity, searchPress}) {
    return (
        <header className="app-header text-center py-4">
        <h1 className="mb-4 text-primary">Weather App</h1>
        <form onSubmit={searchPress} className="d-flex justify-content-center mb-3">
            <input
            type="text"
            className="form-control w-25 me-2"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
            <button type="button" className="btn btn-outline-primary" onClick={searchPress}>
                Search
            </button>
        </form>
        </header>
    );
}

export default Header;
