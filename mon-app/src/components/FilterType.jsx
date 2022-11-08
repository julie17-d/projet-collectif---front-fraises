import React from 'react';
import Form from 'react-bootstrap/Form';

const FilterType = () => {
    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const typeList = ["assise", "literie", "table", "bureau", "rangement", "linge de maison", "décoration", "luminaire", "art de la table", "salle de bain", "autre"];
    
    return (
        <Form.Select aria-label="Type de meuble" onChange={(e) => setRangeValue(e.target.value)}>
            <option>Choississez un type de meuble</option>
            {typeList.map(function(object){
                    return  <option value={object}>{capitalize(object)}</option>
                })}
        </Form.Select>
    );
};

export default FilterType;