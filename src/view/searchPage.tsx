import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
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

const Search = () => {

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
        <div className=' md:h-[50px] flex md:flex-row flex-col w-full justify-center mb-2'>
            <AutoComplete placeholder='Choisissez une agence...' value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)}  dropdown/>
            <div className='flex items-center md:flex-row flex-col'>
              <Calendar placeholder='01/02/2023' className='m-2' value={searchParams.starting_date} onChange={(e) => setSearchParams({...searchParams, starting_date: e.value})} showIcon/>
              <Calendar placeholder='01/02/2023' minDate={searchParams.starting_date} className='m-2' value={searchParams.ending_date} onChange={(e) => setSearchParams({...searchParams, ending_date: e.value})} showIcon/>
              <Button className='bg-[#F08080] hover:bg-[#F4978E] text-white m-2'>
                Rechercher
              </Button>
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

export default Search