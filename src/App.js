import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div id='App'>
      <header className="welcome">
        <h1>Welcome!</h1>
        <br />
        <h2>My 5 favorite films of all time!</h2>
      </header>
      <div className='app'>
        <MovieList />
      </div>
    </div>
  );
}

export default App