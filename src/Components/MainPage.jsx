import { useEffect, useState } from "react"
import MealCard from "./Cards"

const Mainpage = () => {

    const[data,setData]= useState()
    const[search,setSearch] = useState("cake")

    const handleInput = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    const getdata = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const jsondata = await get.json()
        // console.log(jsondata.meals);
        setData(jsondata.meals);
        
    }
    // console.log(data);

    useEffect(()=>{
        getdata()
    },[])



    return (
        <>
        <h1> Food Receipe App </h1>
        <div className="container">
            <div className="searchbar">
                <input type='text' placeholder="Enter Dish" onChange={handleInput}/>
                <button onClick={getdata}>Search</button>
            </div>
            <div>
                <MealCard detail={data}/>
            </div>
        </div>
        </>
    )

}


export default Mainpage;