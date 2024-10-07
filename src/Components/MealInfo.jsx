import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealInfo =() =>{
    const {mealid} = useParams();
    const [info,setInfo] = useState()
    const[loading,setloading]=useState(true)
    
    console.log(mealid);

    useEffect(()=>{
        if (mealid) {
            const getinfo = async() => {
            setloading(true);
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
            const jsondata = await get.json();
            console.log(jsondata.meals[0]);
            setInfo(jsondata.meals[0])
            setloading(false); 
        }
        getinfo();
    }
    
    },[mealid])

    
    return (
        <div>
            {loading ? <div className="loading">Loading...</div> : 
            !info ? <div>Data Not Found</div> : 
            <div className="mealinfo">
            <img src={info.strMealThumb}/>
            <div className="info">
              <h1>Recipe Detail</h1>
              <div className="Mealname">{info.strMeal}</div>
              <h3>Instructions</h3>
              <p>{info.strInstructions}</p>
            </div>
            </div>
            }
        </div>
        
    )

}

export default MealInfo;