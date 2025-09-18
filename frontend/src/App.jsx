import { useEffect, useState } from "react";
import axios from "axios";
import ReviewForm from "./components/ReviewForm";

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/reviews")
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Minhas Reviews de Jogos 🎮</h1>
      <ReviewForm setReviews={setReviews} />
      <ul>
        {reviews.map((r) => (
          <li key={r._id}>
            <strong>{r.gameName}</strong> - Nota: {r.rating}/10
            <p>{r.reviewText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
