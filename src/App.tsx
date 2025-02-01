const App = () => {
  console.log("API URL:", import.meta.env.VITE_API_URL);

  return (
    <div>API URL: {import.meta.env.VITE_API_URL}</div>
  )
}
export default App
