import { NavLink } from "react-router-dom";

const MealCard = ({detail}) => {
    console.log(detail);
    return (
        <div className="meal-container">
            {!detail ? "" : detail.map((curItem)=> {
                return (
                <div className="meals">
                    <img src={curItem.strMealThumb}></img>
                    <p>{curItem.strMeal}</p>
                    <NavLink to={`/${curItem.idMeal}`}><button>Recipe</button> </NavLink>
                </div>
                )
            })
            
            }
        </div>
    )

}

export default MealCard;