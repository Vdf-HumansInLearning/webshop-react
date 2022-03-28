import Phone from "./Phone";
import Filters from "./Filters";

function PhoneList({handleChange, handleReset, filterValues, filters, phones, setFilters, getPhones, isAdmin, cartItemsNumber, setCartItemsNumber}) {


  return (
    <>
      <Filters
        filterValues={filterValues}
        filters={filters}
        setFilters={setFilters}
        handleChange={handleChange}
        handleReset={handleReset}
      />
      <div className="container mt-3 mb-3">
        <div className="row" id="phone-row">
          {phones.map((item) => (
            <Phone
              key={item.id}
              id={item.id}
              date={item.availability_date}
              discount={item.discount}
              name={item.name}
              image={item.image}
              brand={item.brand}
              os={item.operating_system}
              price={item.price}
              quantity={item.quantity}
              rating={item.rating}
              getPhones={getPhones}
              isAdmin={isAdmin}
              cartItemsNumber={cartItemsNumber} 
              setCartItemsNumber={setCartItemsNumber}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default PhoneList;
