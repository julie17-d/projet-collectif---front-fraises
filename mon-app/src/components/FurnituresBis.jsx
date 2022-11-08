import Preview from "./Preview";
import React, {useEffect, useState} from "react";
import axios from 'axios';
import FilterList from "./FilterList";

const FurnituresBis = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(1000);
    useEffect( () => {
    axios.get("http://localhost:3001/api/furnitures")
    .then((res) => setData(res.data));
    }, []);
    console.log(data);

    return (
    <div className="container">
        <div className="filter">
        <FilterList />
        <input
            name="rangePrice"
            type="range"
            min="0"
            max="3000"
            step="100"
            defaultValue={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
        />
        <label for="rangePrice">Prix : jusqu'à {rangeValue} €</label>
        </div>
    <div className="furnitures">
    {data
    .filter((furniture) => furniture.price <= rangeValue)
    .map((furniture) => (
    <Preview furniture={furniture} />
    ))}
    </div>
    </div>
    );
};

export default FurnituresBis;