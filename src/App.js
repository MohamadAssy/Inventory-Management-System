import React, { useState } from "react";
import "./App.css";
import InventoryForm from "./components/InventoryForm";
import InventoryTable from "./components/InventoryTable";
import SearchBar from "./components/SearchBar";
import AIAssistant from "./components/AIAssistant";

function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    category: "",
    status: "in stock",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Auto-status AI logic
    if (name === "quantity") {
      const qty = parseInt(value);
      let status = "in stock";
      if (qty === 0) status = "ordered";
      else if (qty < 5) status = "low stock";
      else status = "in stock";
      setFormData({ ...formData, quantity: value, status });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = formData;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, formData]);
    }
    setFormData({ name: "", quantity: "", category: "", status: "in stock" });
  };

  const handleEdit = (index) => {
    setFormData(items[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };


  return (
    <div style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Inventory Management System</h1>

      <InventoryForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        editIndex={editIndex}
      />

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <div style={{ marginBottom: "20px" }}>
        <strong>Total Items:</strong> {items.length} |
        <br />
        <strong> In Stock:</strong> {items.filter(i => i.status === "in stock").length} |
        <strong> Low Stock:</strong> {items.filter(i => i.status === "low stock").length} |
        <strong> Ordered:</strong> {items.filter(i => i.status === "ordered").length} |
        <strong> Discontinued:</strong> {items.filter(i => i.status === "discontinued").length}
      </div>

      <InventoryTable
        items={items}
        searchTerm={searchTerm}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      <AIAssistant />

    </div>
  );
}

export default App;
