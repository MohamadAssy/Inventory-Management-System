import React, { useState, useEffect } from "react";

const SearchBar = ({ searchTerm, setSearchTerm, items }) => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (searchTerm.length > 2) {
            const relatedItems = items.filter(item =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.category.toLowerCase().includes(searchTerm.toLowerCase())
            ).slice(0, 5);

            setSuggestions(relatedItems);
        } else {
            setSuggestions([]);
        }
    }, [searchTerm, items]);

    return (
        <input
            type="text"
            placeholder="Search by name, category, or status"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: "15px", width: "100%", padding: "8px" }}
        />
    );
};

export default SearchBar;