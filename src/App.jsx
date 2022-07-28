import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const props =
  {
    greeting: 'Hola!'
  }


function App() {
const styles = {marginLeft: "200px", color: "red"};
  return (
    <div>
        <NavBar />
        <ItemListContainer />
    </div>
  );
}

export default App;
