import {useState, useEffect} from 'react'
import Phone from './Phone'

function PhoneList() {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/phones')
        .then(response => response.json())
        .then(data => setPhones(data.products))
    }, [])

    console.log(phones)

  return (
    <div className='container mt-3 mb-3'>
        <div className="row" id="phone-row">
            {phones.map(item => <Phone 
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
  )
}

export default PhoneList