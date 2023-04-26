import { Card } from 'primereact/card';
import { ICar } from '../view/Home';

const CarCard = (car: ICar) => {
  return (
    <Card title={car.name} className="m-2 w-[240px] p-0 hover:shadow-xl duration-200 cursor-pointer">
        <div className=''>
          <img src={car.image_url} alt="" className='w-full'/>
        </div>
        <h3 className='text-[#F08080] font-extrabold m-1 italic'>{car.daily_price} € / jour</h3>
        <h3 className='font-extrabold m-1 italic'>{car.agency_name}</h3>
    </Card>
  )
}

export default CarCard