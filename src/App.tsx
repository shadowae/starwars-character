 import './App.css';
import stormtrooper from './stormtrooper.jpg'
import List from './List';
import { useQuery, gql } from "@apollo/client";

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

const PEOPLE_QUERY = gql`
query AllPeople ($first: Int!, $after: String!) {
  allPeople (first: $first, after: $after) {
    pageInfo {
        endCursor
        hasNextPage
    },
    totalCount,
    people {
      id,
      name,
      homeworld{
        name
      },
      eyeColor,
      birthYear,
      filmConnection{
        films{
          title
        }
      }
      species {
        name
      }
    }
  }
}
`

function App() {
  const { data, loading, error, fetchMore } = useQuery(PEOPLE_QUERY, {
    variables: { first: 5, after: "" },
    notifyOnNetworkStatusChange:true
  });
  
  console.log(data);
  if (loading) return <div>"Loading..."</div>;
  if (error) return <pre>{error.message}</pre>
  
  const handleOnClick = (e: any) => {
    console.log(e.target.value)
  }

  const handleListSelection = (e: string) => {
    alert(e);
  }

  const handleNext = () => {
    // console.log('next')
    // console.log('sad, ', data.allPeople.pageInfo.endCursor);
    
    // fetchMore({variables: {after: data.allPeople.pageInfo.endCursor}})
  }

  const handlePrevious = () => {
    console.log('previous');
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
      <List list={data.allPeople.people} handleListSelection={handleListSelection}/>
      <footer className='footer-section'>
        <button onClick={handlePrevious} className="footer-button">&laquo; Previous</button>
        <button onClick={handleNext} className="footer-button">Next &raquo;</button>
      </footer>
    </div>
  );
}

export default App;
