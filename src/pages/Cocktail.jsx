import { useLoaderData, Link} from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';
import { isInputElement } from 'react-router-dom/dist/dom';
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

export const loader = async ({params}) => {
  const {id} = params
  const { data } = await axios.get(`${singleCocktailUrl}${id}
  `);
  
  return { id, data };
}

const Cocktail = () => {
  const {id, data } = useLoaderData();

  const singleDrink = data.drinks[0];

  const {
    strDrink:name, 
    strDrinkThumb:image, 
    strAlcoholic:info, 
    strCategory:category, 
    strGlass: glass, 
    strInstructions: instructions 
  } = singleDrink;

  const validIngredients = Object.keys(singleDrink).filter
  ((key) => key.startsWith('strIngredient') && singleDrink[key] !==null)
  .map((key) => singleDrink[key]);

  return (
    <Wrapper>
      <header>
        <Link to='/' className='btn'>
          back home
        </Link>
        <h3>{name}</h3>
      </header>
    <img src={image} alt={name} className='img' />
      <div className='drink-info'>
        <p>
          <span className='drink-data'>name : </span>
          {name}
        </p>
        <p>
          <span className='drink-data'>category : </span>
          {name}
        </p>
        <p>
          <span className='drink-data'>info : </span>
          {name}
        </p>
        <p>
          <span className='drink-data'>glass : </span>
          {name}
        </p>
        <p>
        <span className='drink-data'>ingredients : </span>
        {validIngredients.map((item, index) => {
          return (
            <span className='ing' key={isInputElement}>
              {item}{index < validIngredients.length - 1 ? 
             ',':'' }
            </span>
          )
        })}
        </p>
        <p>
          <span className='drink-data'>instructions : </span>
          {name}
        </p>
      </div>
    </Wrapper>
  )
}
export default Cocktail