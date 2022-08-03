// == Import : npm
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// == Import : local
// Composants
import App from 'src/components/App';
import store from 'src/store';

const rootReactElement = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
// NOTE Posez question Olivier concernant REACT.STRICTMODE bonne pratique ?
const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);
