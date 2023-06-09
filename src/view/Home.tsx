import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";
import { useState } from 'react';
import CarCard from '../components/CarCard';


interface ISearchParams {
  agency: string,
  starting_date: any,
  ending_date: any
}

export interface ICar {
  brand: string,
  name: string,
  daily_price: number,
  image_url: string,
  agency_name: string
}

const Home = () => {

  const [searchParams, setSearchParams] = useState<ISearchParams>({
    agency: "",
    starting_date: "",
    ending_date: ""
  });
  
  let cars = require('./cars.json');

  const [agency, setAgency] = useState([
    {
      name: "Lyon Part-Dieu"
    },
    {
      name: "Paris Porte de Bercy"
    },
    {
      name: "Marseille Gare Saint-Charles"
    },
  ]);
  const [value, setValue] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const search = (event: AutoCompleteCompleteEvent) => {
      setItems(agency.map(item => item.name))
  }

  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center w-full h-[600px]" style={{backgroundImage: `url("images/background.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: "center"}}>
          <h1 className="text-[32px] font-medium drop-shadow-2xl text-white">Votre loueur de vehicule de confiance...</h1>
          <div className=' md:h-[50px] flex md:flex-row flex-col'>
            <AutoComplete placeholder='Choisissez une agence...' value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)}  dropdown/>
            <div className='flex items-center md:flex-row flex-col'>
              <Calendar placeholder='01/02/2023' className='m-2' value={searchParams.starting_date} onChange={(e) => setSearchParams({...searchParams, starting_date: e.value})} showIcon/>
              <Calendar placeholder='01/02/2023' minDate={searchParams.starting_date} className='m-2' value={searchParams.ending_date} onChange={(e) => setSearchParams({...searchParams, ending_date: e.value})} showIcon/>
              <Link to="/search">
                <Button className='bg-[#F08080] hover:bg-[#F4978E] text-white m-2'>
                  Rechercher
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='flex justify-center m-4'>
        <div className='flex justify-center md:max-w-[80%] md:flex-row flex-col'>
          <div className='flex items-center'>
            <i className="pi pi-car m-2" style={{ fontSize: '3rem', color: '#F4978E' }}></i>
            <p className='max-w-[80%] m-2 font-bold'>2000 voitures et utilitaires à louer partout en france.</p>
          </div>
          <div className='flex items-center'>
            <i className="pi pi-shield m-2" style={{ fontSize: '3rem', color: '#F4978E' }}></i>
            <p className='max-w-[80%] m-2 font-bold'>2000 voitures et utilitaires à louer partout en france.</p>
          </div>
          <div className='flex items-center'>
            <i className="pi pi-check m-2" style={{ fontSize: '3rem', color: '#F4978E' }}></i>
            <p className='max-w-[80%] m-2 font-bold'>2000 voitures et utilitaires à louer partout en france.</p>
          </div>
        </div>
      </section>
      <section className='flex justify-center m-4'>
        <div className='flex justify-center md:max-w-[80%] flex-wrap'>
          {cars.map((car: ICar) => (
            <CarCard {...car}/>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home