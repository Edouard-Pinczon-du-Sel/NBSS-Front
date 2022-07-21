// == Import
import 'src/styles/index.scss';
import 'src/components/AppHeader/stylesMediaQueries.scss';

// == Composant
import AppHeader from '../AppHeader';
import AppMain from '../AppMain';
import AppFooter from '../AppFooter';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <AppMain />
      <AppFooter />
    </div>
  );
}

// == Export
export default App;
