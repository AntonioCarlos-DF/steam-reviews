import { useState } from "react";
import axios from "axios";

function ReviewForm({ setReviews }) {
  const [form, setForm] = useState({
    steamId: "",
    gameName: "",
    reviewText: "",
    rating: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/reviews", form);
    setReviews(prev => [...prev, res.data]);
    setForm({ steamId: "", gameName: "", reviewText: "", rating: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="gameName" placeholder="Nome do jogo" value={form.gameName} onChange={handleChange} />
      <input name="rating" type="number" placeholder="Nota" value={form.rating} onChange={handleChange} />
      <textarea name="reviewText" placeholder="Escreva sua review..." value={form.reviewText} onChange={handleChange}></textarea>
      <button type="submit">Salvar Review</button>
    </form>
  );
}

export default ReviewForm;
