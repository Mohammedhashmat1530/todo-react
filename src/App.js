import './App.css';
import { Header } from './components/Header';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { GlobalProvider } from './context/globalstate';



function App() {
  return (<>
    <GlobalProvider>
      <Header />
      <AddTodo />
      <div className='container'>
        <TodoList />
      </div>
    </GlobalProvider>
  </>
  );
}

export default App;
