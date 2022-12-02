import './App.css';
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Aggregator from "./components/Aggregator"


function App() {


  const [cartItems, setCartItems] = useState([])
  const [sorted, setSorted] = useState()

  const [diet, setDiet] = useState("All")

  const [type, setType] = useState("All");



  const selectFilterType = event => {
    if (event.target.checked === false) {
      setType("All");
      return;
    } else {
      setType(event.target.value);
    }
  };


  const matchesFilterType = item => {
    // all items should be shown when no filter is selected
    if (type === "All") {
      return true
    } else if (type === item.type) {
      return true
    } else {
      return false
    }
  }

  const matchesDietType = item => {
    if (diet === "All") {
      return true
    } else if (diet === item.diet) {
      return true
    } else {
      return false
    }
  }

  const filteredData = bakeryData.filter(matchesFilterType).filter(matchesDietType);

  if (sorted === "Lowest Price") {
    console.log("sorting")
    filteredData.sort((a, b) => {
      return a.price - b.price;
    })
  } else if (sorted === "Highest Price") {
    filteredData.sort((a, b) => {
      return b.price - a.price;
    })
  } else if (sorted === "Most Popular") {
    filteredData.sort((a, b) => {
      return a, b;
    })
  }

  function addToCart(item) {
    if (cartItems.indexOf(item) !== -1) { //if it's already on the list
      let filteredList = cartItems.filter((cartItems) => item !== cartItems)
      setCartItems([...filteredList]);
      return;
    }
    setCartItems([...cartItems, item])
  }

  function calculateTotal() {
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price
    }
    return total
  }

  const handleCheck = (event) => {
    // console.log(event.target.value)
    const label = event.target.value
    setSorted(label)
  }


  const matchesFilterDiet = item => {
    // all items should be shown when no filter is selected
    if (diet === "All") {
      return true
    } else if (diet === item.diet) {
      return true
    } else {
      return false
    }
  }

  const selectFilterDiet = event => {
    if (event.target.value === "All") {
      setDiet("All");
      return;
    } else {
      setDiet(event.target.value);
    }
  };

  return (
    <div className="App">

      <div className="logo-name">
        <img src="images/evil-eye.jpeg" />
        <h1>KISMET BAKERY</h1>
      </div>

      <div className="main-container">
        <div class="sorting-container">
          <div class="sort">
            <h2>Sort By</h2>
            <label>
              <input type="radio" name="sort" value="Most Popular" onChange={handleCheck}></input>
              Most Popular (default)
            </label>
            <br></br>

            <label>
              <input type="radio" name="sort" value="Lowest Price" onChange={handleCheck}></input>
              Lowest Price
            </label>
            <br></br>

            <label>
              <input type="radio" name="sort" value="Highest Price" onChange={handleCheck}></input>
              Highest Price
            </label>
            <br></br>
          </div>

          <div className="types">
            <h2>Types</h2>
            <form action="/action_page.php">
              <input type="radio" id="all" name="filter" onChange={selectFilterType} value={"All"} ></input>
              <label for="pastry">All</label><br></br>
              <input type="radio" id="bread" name="filter" onChange={selectFilterType} value={"Bread"}></input>
              <label for="html">Bread</label><br></br>
              <input type="radio" id="cookie" name="filter" onChange={selectFilterType} value={"Cookie"}></input>
              <label for="css">Cookie</label><br></br>
              <input type="radio" id="pastry" name="filter" onChange={selectFilterType} value={"Pastry"}></input>
              <label for="pastry">Pastry</label>
            </form>
          </div>


          <div className='diet-rest'>
            <h2>Dietary Restrictions</h2>
            <label>
              <input type="radio" name="dietfilter" onChange={selectFilterDiet} value={"All"} />
              All
            </label><br></br>
            <label>
              <input type="radio" name="dietfilter" onChange={selectFilterDiet} value={"Gluten-free"} />
              Gluten-free
            </label><br></br>
            <label>
              <input type="radio" name="dietfilter" onChange={selectFilterDiet} value={"Nut-free"} />
              Nut-free
            </label><br></br>
            <label>
              <input type="radio" name="dietfilter" onChange={selectFilterDiet} value={"Vegetarian"} />
              Vegetarian
            </label>
          </div>



          <div className='other'>
            <h2>Other</h2>

            <p>Favorites List:</p>
            {cartItems.map((item, index) => (<Aggregator name={item.name} />))}

            {/* render a list of items in the cart */}
            <p>Favorites Price: ${calculateTotal()}</p>
          </div>

        </div>

        <div className='bakery-container'>
          {filteredData.map((item) => ( //map bakeryData to BakeryItem components
            <BakeryItem item={item} addToCart={addToCart} cartItems={cartItems} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default App;
