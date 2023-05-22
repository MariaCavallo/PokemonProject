import { QueryClient, QueryClientProvider } from 'react-query'
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </main>
    </QueryClientProvider>
  );
}

export default App;
