import { useLoaderData } from "react-router-dom";

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  const searchTerm = 'margarita'
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
  return 'something';
};

const Landing = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <h1>Landing</h1>
  )
}
export default Landing