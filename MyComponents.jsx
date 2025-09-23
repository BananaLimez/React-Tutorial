import React, { useState } from 'react'


function MyComponents() {
    const [cars, setCars] = useState([]);
    const [date, setDate] = useState(new Date().getFullYear());
    const [carBrand,setCarBrand] = useState("");
    const [carName, setCarName] = useState("");

    const addCar = () => {
        const newCar = {year:date, brand:carBrand, name:carName};
        setCars(c=>[...c, newCar]);

        setDate(new Date().getFullYear());
        setCarBrand("")
        setCarName("")
    }

    const removeCar = (index) => {
        setCars(cars.filter((_,i)=>i!==index))
    }

    const changeDate = (e) => {
        setDate(e.target.value)
    }

    const changeBrand = (e) => {
        setCarBrand(e.target.value)
    }

    const changeName = (e) => {
        setCarName(e.target.value)
    }


    return(
        <div>
            <h1>Car List</h1>
            <ul>
                {cars.map((car,index)=><li key={index} onClick={()=>removeCar(index)}>{car.year}-{car.brand}-{car.name}</li>)}
            </ul>
            <input type="number" value={date} onChange={changeDate}></input>
            <input type="text" value={carBrand} onChange={changeBrand} placeholder='Write the brand here'></input>
            <input type="text" value={carName} onChange={changeName} placeholder='Write the name here'></input>
            <button onClick={addCar}>Add Car</button>
        </div>
    )
}

export default MyComponents