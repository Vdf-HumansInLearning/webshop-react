import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { Offcanvas, Button } from "react-bootstrap";

function Filters({
  searchInput,
  handleChangedInput,
  filters,
  setFilters,
  handleChangeFilters,
  handleChangeSort
}) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="menu pt-5 container">
        <div className="filter-buttons row ml-3">
          <div className="d-flex mt-3 ps-2 col-5">
            <span className="input-group-text" id="basic-addon1">
              <ImSearch />
            </span>
            <input
              className="form-control me-2 border-none"
              id="search-input"
              name="search"
              type="text"
              value={searchInput}
              onChange={handleChangedInput}
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              
            />
          </div>
          <div className="order d-flex mt-3 ps-2 col-5">
            <label className="input-group-text" htmlFor="sort">
              <i className="fas fa-sort"></i>Sort by
              </label>
            <select
              name="sort"
              id="sort"
              className="form-select border-none"
            >
              <option value="none">Recommended</option>
              <option value="asc">Ascending price</option>
              <option value="desc">Descending price</option>
            </select>
          </div>
          <div className="mt-3 text-center ps-2 col-2">
            <Button variant="primary" onClick={handleShow} className="me-2">
              Filters
            </Button>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filter</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form
            action="/phones"
            id="filter-form"
            method="get"
          >
            <div>
              <i
                className="fas fa-window-close fa-2x close-form"
                id="close-form"
              ></i>
            </div>
            <fieldset id="filter-brand">
              <h4>Brand:</h4>
              <input
                type="checkbox"
                id="Samsung"
                name="brand[]"
                value="Samsung"
              />
              <label>Samsung</label>
              <input
                type="checkbox"
                id="Motorola"
                name="brand[]"
                value="Motorola"
              />
              <label>Motorola</label>
              <input type="checkbox" id="Apple" name="brand[]" value="Apple" />
              <label>Apple</label>
              <input
                type="checkbox"
                id="Xiaomi"
                name="brand[]"
                value="Xiaomi"
              />
              <label>Xiaomi</label>
              <input
                type="checkbox"
                id="Google"
                name="brand[]"
                value="Google"
              />
              <label>Google</label>
              <input
                type="checkbox"
                id="Huawei"
                name="brand[]"
                value="Huawei"
              />
              <label>Huawei</label>
            </fieldset>
            <fieldset id="filter-price" className="mt-2">
              <h4>Price:</h4>
              <input
                type="radio"
                name="price_range"
                id="range_0_700"
                value="0_700"
              />
              <label> 0-700 RON</label>
              <input
                type="radio"
                name="price_range"
                id="range_701_4000"
                value="701_4000"
              />
              <label> 701-4000 RON</label>
              <input
                type="radio"
                name="price_range"
                id="range_4001_"
                value="4001"
              />
              <label> Above 4000 RON</label>
            </fieldset>
            <fieldset id="filter-rating" className="mt-2">
              <h4>Minimum rating:</h4>
              <input
                type="number"
                
                name="minimum_rating"
                id="minimum_rating"
                min="0"
                max="5"
              />
            </fieldset>
            <fieldset id="filter-os" className="mt-2">
              <h4>Operating system:</h4>
              <input type="checkbox" id="Android" name="os[]" value="Android" />
              <label>Android</label>
              <input type="checkbox" id="iOS" name="os[]" value="iOS" />
              <label>iOS</label>
            </fieldset>
            <fieldset id="filter-stock" className="mt-2">
              <h4>In stock:</h4>

              <input
                type="checkbox"
                name="stock_yes"
                id="stock_yes"
                value="true"
              />
              <label>Yes</label>
            </fieldset>
            <div className="filter-form-buttons d-flex justify-content-between">
              <input
                type="submit"
                id="submit-form"
                className="mt-3"
                value="Submit"
              />
              <input
                type="reset"
                id="reset"
                className="mt-3"
                value="Reset filters"
              />
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Filters;
