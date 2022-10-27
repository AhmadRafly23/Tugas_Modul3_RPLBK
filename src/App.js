import { useEffect, useState } from 'react';
import './App.css';
import Todo from './pages/Todo';

function App() {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStatus(true);
    }, 2000);
  }, []);

  if (!status) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
