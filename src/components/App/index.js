// == Import
import 'src/styles/index.scss';
import 'src/components/AppHeader/stylesMediaQueries.scss';
import { Routes, Route } from 'react-router-dom';

// == Composant
import AppHeader from '../AppHeader';
import AppMain from '../AppMain';
// import ServicesPage from '../ServicesPage';
// import EmploisPage from '../EmploisPage';
// import ContactPage from '../ContactPage';

import AppFooter from '../AppFooter';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<AppMain />} />
        {/* <Route path="/services" element={<SercicesPage />} /> */}
        {/* <Route path="/emplois" element={<EmploisPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        {/* <Route path="/mentions-legal" element={<mentionsLegalPage />} /> */}
        {/* <Route path="/*" element={<Error />} /> */}
        {/* <Route path="/error" element={<FormError />} /> */}
      </Routes>
      <AppFooter />
    </div>
  );
}

// == Export
export default App;
