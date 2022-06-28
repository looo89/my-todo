
import { Provider } from 'react-redux';
import Todo from './components/Todo';
import {store} from './store/store';

function App() {
  //console.log(store.getState().sidebar.tasks)
  return (
    <Provider store={store}>
      <div className="App">
        <Todo/>
      </div>
    </Provider>
    
  );
}

export default App;
