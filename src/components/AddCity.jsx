import "../css/AddCity.css";
import { Search, Menu} from "lucide-react";

function AddCity() {
  return (
    <header>
      <Menu className="menu-icon"/>
      <div className="input-container">
        <input
          className="input-add-city"
          type="text"
          placeholder="Busque por uma cidade..."
        />
      </div>
    </header>
  );
}

export default AddCity;
