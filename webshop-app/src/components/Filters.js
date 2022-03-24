import { useState } from "react";
import { ImSearch } from "react-icons/im";
import { Offcanvas, Button } from "react-bootstrap";
import "../css/Filters.css";

function Filters({
  filterValues,
  filters,
  setFilters,
  handleChange,
  handleReset,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="menu pt-5 container">
        <div className="filter-buttons row ml-3 d-flex">
          <div className="d-flex justify-content-center">
            <div className="d-flex mt-3 ps-2">
              <span className="input-group-text" id="basic-addon1">
                <ImSearch />
              </span>
              <input
                className="form-control me-2 border-none"
                id="search-input"
                name="search"
                type="text"
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="d-flex mt-3 ps-2">
              <label className="input-group-text" htmlFor="sort">
                <i className="fas fa-sort"></i>Sort by
              </label>
              <select
                name="sort"
                id="sort"
                className="form-select border-none"
                value={filters.sort}
                onChange={(e) =>
                  setFilters({ ...filters, sort: e.target.value })
                }
              >
                <option value="none">Recommended</option>
                <option value="asc">Ascending price</option>
                <option value="desc">Descending price</option>
              </select>
            </div>
            <div className="mt-3 text-center ps-2">
              <Button variant="primary" onClick={handleShow} className="me-2">
                Filters
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3>Filters</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form action="/phones" id="filter-form" method="get">
            <fieldset id="filter-brand" className="filter-brand">
              <h4>Brand:</h4>
              <div className="filter-item">
                <input
                  type="checkbox"
                  id="Samsung"
                  name="brand"
                  value="Samsung"
                  onChange={handleChange}
                  defaultChecked={
                    filters.brand.indexOf("Samsung") !== -1 ? true : false
                  }
                />
                <label>Samsung</label>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  id="Motorola"
                  name="brand"
                  value="Motorola"
                  onChange={handleChange}
                  defaultChecked={
                    filters.brand.indexOf("Motorola") !== -1 ? true : false
                  }
                />
                <label>Motorola</label>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  id="Apple"
                  name="brand"
                  value="Apple"
                  onChange={handleChange}
                  defaultChecked={
                    filters.brand.indexOf("Apple") !== -1 ? true : false
                  }
                />
                <label>Apple</label>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  id="Xiaomi"
                  name="brand"
                  value="Xiaomi"
                  onChange={handleChange}
                  defaultChecked={
                    filters.brand.indexOf("Xiaomi") !== -1 ? true : false
                  }
                />
                <label>Xiaomi</label>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  id="Google"
                  name="brand"
                  value="Google"
                  onChange={handleChange}
                  defaultChecked={
                    filters.brand.indexOf("Google") !== -1 ? true : false
                  }
                />
                <label>Google</label>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  id="Huawei"
                  name="brand"
                  value="Huawei"
                  onChange={handleChange}
                  defaultChecked={
                    filters.brand.indexOf("Huawei") !== -1 ? true : false
                  }
                />
                <label>Huawei</label>
              </div>
            </fieldset>
            <fieldset id="filter-price" className="mt-2 filter-price">
              <h4>Price:</h4>
              <div className="filter-item">
                <input
                  type="radio"
                  name="price_range"
                  id="range_0_700"
                  value="0_700"
                  onChange={handleChange}
                  defaultChecked={
                    filters.price_range === "0_700" ? true : false
                  }
                />
                <label> 0-700 RON</label>
              </div>
              <div className="filter-item">
                <input
                  type="radio"
                  name="price_range"
                  id="range_701_4000"
                  value="701_4000"
                  onChange={handleChange}
                  defaultChecked={
                    filters.price_range === "701_4000" ? true : false
                  }
                />
                <label> 701-4000 RON</label>
              </div>
              <div className="filter-item">
                <input
                  type="radio"
                  name="price_range"
                  id="range_4001_"
                  value="4001"
                  onChange={handleChange}
                  defaultChecked={filters.price_range === "4001" ? true : false}
                />
                <label> Above 4000 RON</label>
              </div>
            </fieldset>
            <fieldset id="filter-rating" className="mt-2">
              <h4>Minimum rating:</h4>
              <div className="filter-item">
                <input
                  type="number"
                  value={filters.minimum_rating}
                  onChange={(e) =>
                    setFilters({ ...filters, minimum_rating: e.target.value })
                  }
                  name="minimum_rating"
                  id="minimum_rating"
                  min="0"
                  max="5"
                />
              </div>
            </fieldset>
            <fieldset id="filter-os" className="mt-2 filter-os">
              <h4>Operating system:</h4>
              <div className="filter-item">
                <input
                  type="checkbox"
                  id="Android"
                  name="os"
                  value="Android"
                  onChange={handleChange}
                  defaultChecked={
                    filters.os.indexOf("Android") !== -1 ? true : false
                  }
                />
                <label>Android</label>
              </div>
              <div className="filter-item">
                <input
                  type="checkbox"
                  id="iOS"
                  name="os"
                  value="iOS"
                  onChange={handleChange}
                  defaultChecked={
                    filters.os.indexOf("iOS") !== -1 ? true : false
                  }
                />
                <label>iOS</label>
              </div>
            </fieldset>
            <fieldset id="filter-stock" className="mt-2">
              <h4>In stock:</h4>

              <input
                className="filter-item"
                type="checkbox"
                name="stock_yes"
                id="stock_yes"
                value="true"
                onChange={handleChange}
                defaultChecked={filters.stock_yes}
              />
              <label>Yes</label>
            </fieldset>
            <div className="filter-form-buttons d-flex justify-content-between">
              <input
                type="reset"
                id="reset"
                className="mt-3 reset-input"
                value="Reset filters"
                onClick={handleReset}
              />
            </div>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Filters;
