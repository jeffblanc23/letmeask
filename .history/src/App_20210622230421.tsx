//import { Home } from './pages/Home'

import { BrowserRouter, Route} from 'react-router-dom'

import { NewRoom } from "./pages/NewRoom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component/>
    </BrowserRouter>

  );
}

export default App;
