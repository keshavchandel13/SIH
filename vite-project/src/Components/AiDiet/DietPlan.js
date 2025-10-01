import { useState } from "react";

export default function DietForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    dosha: "",
    goal: "",
    allergies: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...form, allergies: form.allergies.split(",") };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="age" placeholder="Age" type="number" onChange={handleChange} required />
      <select name="gender" onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select name="dosha" onChange={handleChange} required>
        <option value="">Select Dosha</option>
        <option value="vata">Vata</option>
        <option value="pitta">Pitta</option>
        <option value="kapha">Kapha</option>
      </select>
      <input name="goal" placeholder="Goal (weight loss, wellness, etc)" onChange={handleChange} />
      <input name="allergies" placeholder="Allergies (comma separated)" onChange={handleChange} />
      <button type="submit">Get Diet Recommendation</button>
    </form>
  );
}
