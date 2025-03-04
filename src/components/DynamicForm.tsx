import React, { useState } from 'react';

export default function DynamicForm() {
  const [fields, setFields] = useState([{ id: Date.now(), type: "text", value: "" }]);

  const addField = () => {
    setFields([...fields, { id: Date.now(), type: "text", value: "" }]);
  };

  const removeField = (id) => {
    if (fields.length > 1) {
      setFields(fields.filter(field => field.id !== id));
    }
  };

  const handleTypeChange = (id, newType) => {
    setFields(fields.map(field => field.id === id ? { ...field, type: newType } : field));
  };

  const handleValueChange = (id, newValue) => {
    setFields(fields.map(field => field.id === id ? { ...field, value: newValue } : field));
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", JSON.stringify(fields, null, 2));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h3>Dynamic Form Builder</h3>
      {fields.map((field, index) => (
        <div key={field.id} style={{ marginBottom: "10px", display: "flex", alignItems: "center" }}>
          <select
            value={field.type}
            onChange={(e) => handleTypeChange(field.id, e.target.value)}
            style={{ marginRight: "10px" }}
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="date">Date</option>
          </select>
          <input
            type={field.type}
            value={field.value}
            onChange={(e) => handleValueChange(field.id, e.target.value)}
            style={{ flex: 1, marginRight: "10px" }}
          />
          {fields.length > 1 && (
            <button onClick={() => removeField(field.id)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px" }}>
              X
            </button>
          )}
        </div>
      ))}
      <button onClick={addField} style={{ marginTop: "10px", padding: "5px 10px", backgroundColor: "blue", color: "white", border: "none" }}>+ Add Field</button>
      <button onClick={handleSubmit} style={{ marginTop: "10px", padding: "5px 10px", marginLeft: "10px", backgroundColor: "green", color: "white", border: "none" }}>Submit</button>
    </div>
  );
}
