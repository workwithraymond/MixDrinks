const CocktailList = ({drinks}) => {
    if(!drinks) {
        return (
            <h4 style={ { textAlign: 'center' }}></h4>
        )
    }
  return (
    <h2>CocktailList</h2>
  )
}
export default CocktailList