import {Switch,Route} from "react-router-dom"
import {NavBar} from "./shared/NavBar"
import {BooksList} from "./BooksList"
import {CreateBook} from "./CreateBook/CreateBook"
import {UpdateBook} from "./UpdateBook"


function App() {
  return (
    <>
    <Switch>
      <NavBar/>
      <Route path="/update-book">
        <UpdateBook/>
        </Route>
      <Route path="/create-book">
        <CreateBook/>
        </Route>
      <Route path="/">
        <BooksList/>
      </Route>
    </Switch>
    </>
  );
}

export default App;
