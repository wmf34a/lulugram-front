import './App.css';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <h2>Lulu-gram</h2>
      <Button variant="primary">Login</Button>{' '}
      <Button variant="danger">Logout</Button>{' '}
    </div>
  );
}

export default App;
