import { Suspense } from "react";
import { Route, Switch } from "react-router";
import DiaryProducts from "./components/Diary/DiaryProducts";
import routes from "./routes";
import styles from "./styles/app.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Suspense fallback="Loading...">
        <Switch>
          {routes.map(route => (
            <Route {...route} key={route.path} />
          ))}
        </Switch>
        <DiaryProducts />
      </Suspense>
    </div>
  );
}

export default App;
