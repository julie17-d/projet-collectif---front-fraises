import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function FilterList() {
    return (
    <DropdownButton id="dropdown-basic-button" title="Type de Meuble">
        <Dropdown.Item href="#/action-1">Tables</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Canapés</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Fauteuils</Dropdown.Item>
    </DropdownButton>
    );
}

export default FilterList;