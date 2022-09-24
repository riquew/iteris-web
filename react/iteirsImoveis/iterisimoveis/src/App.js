import './App.css';
import HomePage from './pages/HomePage';
import SobrePage from './pages/SobrePage';
import MenuPageTemplate from './pageTemplates/MenuPageTemplate';
import ImoveisPage from './pages/ImoveisPage';
import ImovelSinglePage from './components/ImovelSinglePage/ImovelSinglePage';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>


      <MenuPageTemplate>
        <Switch>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/sobre" exact={true}>
            <SobrePage />
          </Route>
          <Route path="/imoveis" exact={true}>
            <ImoveisPage />
          </Route>
          <Route path="/imoveis/:id" exact={true}>
            <ImovelSinglePage />
          </Route>
        </Switch>
      </MenuPageTemplate>

    </BrowserRouter>
  );
}

export default App;
