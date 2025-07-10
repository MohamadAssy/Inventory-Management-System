import React from "react";

const InventoryForm = ({
    formData,
    handleChange,
    handleSubmit,
    editIndex,
}) => {
    return (
        <form
            onSubmit={handleSubmit}
            style={{
                marginBottom: "20px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
            }}
        >
            <input
                name="name"
                placeholder="Item Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                name="quantity"
                type="number"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
            />
            <input
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                required
            />
            <select name="status" value={formData.status} onChange={handleChange}>
                <option value="in stock">In Stock</option>
                <option value="low stock">Low Stock</option>
                <option value="ordered">Ordered</option>
                <option value="discontinued">Discontinued</option>
            </select>
            <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
        </form>
    );
};

export default InventoryForm;
