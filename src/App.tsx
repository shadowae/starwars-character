import './App.css';
import stormtrooper from './stormtrooper.jpg'
import List from './List';

function App() {
  const list = [
    {
      id: 'a',
      firstname: 'Robin'
    },
    {
      id: 'b',
      firstname: 'Dave'
    },
    {
      id: 'c',
      firstname: 'Robin'
    },
    {
      id: 'd',
      firstname: 'Dave'
    }
  ];
  const handleOnClick = (e: any) => {
    console.log(e.target.value)
  }

  const handleListSelection = (e: string) => {
    alert(e);
  }

  const handleNext = () => {
    console.log('next')
  }

  const handlePrevious = () => {
    console.log('previous')
  }
  return (
    <div className="App">
      <img src={stormtrooper} alt="" height={'200px'} />
      <header className="App-header">
        Star Wars Characters
      </header>
      
      <form onSubmit={handleOnClick}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <List list={list} handleListSelection={handleListSelection}/>
      <footer className='footer-section'>
        <button onClick={handlePrevious} className="footer-button">&laquo; Previous</button>
        <button onClick={handleNext} className="footer-button">Next &raquo;</button>
      </footer>
    </div>
  );
}

export default App;
