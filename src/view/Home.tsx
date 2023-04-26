
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { AutoComplete, AutoCompleteCompleteEvent } from "primereact/autocomplete";
import { ChangeEvent, useState } from 'react';


interface ISearchParams {
  agency: string,
  starting_date: any,
  ending_date: any
}

const Home = () => {

  const [searchParams, setSearchParams] = useState<ISearchParams>({
    agency: "",
    starting_date: "",
    ending_date: ""
  });

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
    <div className="flex flex-col justify-center items-center w-full h-[600px]" style={{backgroundImage: `url("images/background.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: "center"}}>
      <h1 className="text-[32px] font-medium drop-shadow-2xl text-white">Votre loueur de vehicule de confiance...</h1>
      <div className=' max-h-[50px] flex md:flex-row flex-col'>
        <AutoComplete placeholder='Choisissez une agence...' value={value} suggestions={items} completeMethod={search} onChange={(e) => setValue(e.value)}  dropdown/>
        <div className='flex items-center'>
          <Calendar placeholder='01/02/2023' className='m-2' value={searchParams.starting_date} onChange={(e) => setSearchParams({...searchParams, starting_date: e.value})} showIcon/>
          <Calendar placeholder='01/02/2023' minDate={searchParams.starting_date} className='m-2' value={searchParams.ending_date} onChange={(e) => setSearchParams({...searchParams, ending_date: e.value})} showIcon/>
          <Button className='bg-[#F08080] hover:bg-[#F4978E] text-white m-2'>
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home