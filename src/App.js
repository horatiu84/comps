import Link from "./components/Link";
import Route from "./components/Route";
import AcordionPage from './pages/AccordionPage';
import DropdownPage from "./pages/DropdownPage";

const App = () => {
  return <div>
    <Link to='/accordion'>Go to accordion</Link>
    <Link to='/dropdown'>Go to dropdown</Link>
    <div>
      <Route path='/accordion'>
        <AcordionPage/>
      </Route>
      <Route path='/dropdown'>
        <DropdownPage/>
      </Route>
    </div>

  </div>
}

export default App;