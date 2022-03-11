import {useState, useEffect} from 'react'
import Phone from './Phone'
import Filters from './Filters'

function PhoneList() {
    const [phones, setPhones] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [sorting, setSorting] = useState('none');
    const [filters, setFilters] = useState({
        brands: [],
        price: '',
        os: [],
        rating: '',
        stock: null
    });

    const updatedPhones =  phones.filter(item => item.brand.toLowerCase().includes(searchInput) || item.name.toLowerCase().includes(searchInput));

    const handleChangedInput = (e) => {
        setSearchInput(e.target.value);
    }

    const handleChangeFilters = (e) => {

    }

    const handleChangeSort = (e) => {

    }

    useEffect(() => {
        fetch('http://localhost:3001/phones')
        .then(response => response.json())
        .then(data => {
            setPhones(data.products)
            setFilters(data.filters)
        })
    }, [])

    useEffect(() => {
        if(sorting === 'none'){
            return;
        } else {
           console.log('works')

        }
    }, [sorting])
  

    

  return (
    <>
        <Filters 
        handleChangedInput={handleChangedInput}
        searchInput={searchInput}
        filters={filters}
        setFilters={setFilters}
        handleChangeFilters={handleChangeFilters}
        handleChangeSort={handleChangeSort}
        />
        <div className='container mt-3 mb-3'>
            <div className="row" id="phone-row">
                {updatedPhones.map(item => <Phone 
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
                />)}
            </div>
        </div>
    </>
   
  )
}

export default PhoneList