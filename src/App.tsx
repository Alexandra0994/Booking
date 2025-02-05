import GradientBackground from "./components/GradientBackground/GradientBackground";
import SignIn from "./components/SignIn/SignIn";
import styles from './styles/App.module.scss';
const App = () => {

  return (
    <div className={styles.app}>
      <SignIn />
      <GradientBackground />
    </div>
  );
};

export default App;


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
