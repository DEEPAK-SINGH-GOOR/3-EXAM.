import { useState } from 'react';
import Validation from './Validation.jsx'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <Validation/>  
    </div>
  );
}

export default App;
