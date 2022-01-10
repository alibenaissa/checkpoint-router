import {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import "./App.css";
import Details from './Components/Details';
import Add from './Components/Add';
import Filter from './Components/Filter';
import MovieList from './Components/MovieList';
import Navbar from './Components/Navbar';
import {movies} from './Components/movies';

//console.log(movies);
function App() {
  
 const [movieList,setmovieList]=useState(movies)
// function for adding a new movie

const addHandler= (newMovie)=> {
  setmovieList([...movieList,newMovie])
}
 // get the data from the user by taping
   
 const [search,setsearch] = useState("")

 // get the data from the user by giving the rate
   
 const [rating,setrating] = useState(1)


  return (
    <div className="App">
   <Navbar/>
   <Filter setsearch={setsearch}  rating ={rating} setrating={setrating}      />
   <Add addHandler= {addHandler} />
<Switch>
   <Route exact path="/" > <MovieList movieList= {movieList} search = {search} rating={rating} /></Route> 
   <Route  path='/Details/:id' render={(props)=> <Details {...props} list = {movies} />}/>
   </Switch>
    </div>
  );
}

export default App;
