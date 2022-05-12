import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  //const para = document.createElement('p');
  //para.textContent = "This is another way to insert text to web page!"
  //document.getElementById('root').append(para);
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
