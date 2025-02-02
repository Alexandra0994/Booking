import SignIn from "./components/SignIn/SignIn";
const App = () => {

  return (
    <SignIn />
  );
};

export default App;




// import axios from "axios";
// import { useState } from "react";

// const App: React.FC = () => {
//   const [token, setToken] = useState<string | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const login = async () => {
//     try {
//       const response = await axios.post("/api/auth", {
//         username: "admin",
//         password: "password123",
//       }, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       setToken(response.data.token);
//       setError(null);
//     } catch (err) {
//       setError("Ошибка авторизации");
//       console.error(err);
//     }
//   };

//   return (
//     <div>
//       <button onClick={login}>Войти</button>
//       {token && <p>Токен: {token}</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// };

// export default App;
// import { useEffect, useState } from "react";
// import axios from "axios";

// interface Booking {
//   bookingid: number;
// }

// const App = () => {
//   const [bookings, setBookings] = useState<Booking[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchBookings = async () => {
//       try {
//         const response = await axios.get("/api/booking");
//         setBookings(response.data); // API возвращает массив ID бронирований
//         console.log(response.data);
//       } catch (err) {
//         setError("Ошибка при получении бронирований");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBookings();
//   }, []);

//   return (
//     <div>
//       <h1>Список бронирований</h1>
//       {loading && <p>Загрузка...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <ul>
//         {bookings.map((booking) => (
//           <li key={booking.bookingid}>Бронирование ID: {booking.bookingid}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
