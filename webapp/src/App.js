import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Catalog from "./components/pages/Catalog";
import Object from "./components/pages/Object";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";
import style from "./app.module.scss";
import Liked from "./components/pages/Liked";
//https://wikiway.com/dostoprimechatelnosti/top100/

function App() {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header />
        <Switch>
          <div className={style.content}>
            <Route exact path="/" component={Main} />
						<Route path="/catalog" component={Catalog} />
						<Route path="/liked" component={Liked} />
            <Route path="/object/:id" component={Object} />
          </div>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
