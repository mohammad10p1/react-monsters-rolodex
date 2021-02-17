import React from "react";
import './search-box.styles.css'

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div className="">
            <input
                type="search"
                className="search"
                placeholder={placeholder}
                onChange={handleChange} />
        </div>
    )
}