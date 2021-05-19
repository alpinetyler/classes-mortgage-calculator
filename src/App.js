import Form from "./components/Form";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MonthlyPayment from './components/MonthlyPayment';
import './App.css';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <MonthlyPayment />
      <Footer />
    </div>
  );
}

export default App;
