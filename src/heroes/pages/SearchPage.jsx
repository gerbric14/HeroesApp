import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components"
import { getHeroesByNAme } from "../helpers";

export const SearchPage = () => {

  const navigate = useNavigate(); //Obtener la navegacion

  const location = useLocation(); // Obtener la locacion de donde nos encontramos 

  const {q = ''} = queryString.parse(location.search); // obtener querys parameters

  const heroes = getHeroesByNAme(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  

  const { searchText, onInputChange } = useForm({
    searchText: q //le indico que el valor del campo input sea igual al del query para que al recargar lo muestre
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if(searchText.trim().length <= 1) return;

    navigate(`?q=${searchText}`)

  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="searchText" 
              id="searchText" 
              className="form-control" 
              autoComplete="off" 
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>

          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
            <div className="alert alert-primary animate__animated animate__fadeIn" style={{ display: showSearch ? '' : 'none'}}>
                Search a hero
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none'}}>
                No hero with <b>{q}</b>
            </div>
            {
              heroes.map( hero => (
                <HeroCard key={hero.id} {...hero}/>
              ))
            }
        </div>

      </div>
    </>


  )
}
