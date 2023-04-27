import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { useState } from 'react';

interface IRegisterForm {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

const Register = () => {

    const [payload, setPayload] = useState<IRegisterForm>({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

  return (
    <div className='w-full flex justify-center flex-col items-center mt-[120px]'>
        <Link to="/"><img src="logo_black.png" alt="" style={{width: "200px"}}/></Link>
        <h2>Inscription</h2>
        <form className='w-[30%]'>
            <div className='flex flex-col mb-2'>
                <label htmlFor="email" className='mb-2'>Nom :</label>
                <InputText className='m-2 max-h-[40px]' placeholder='John' id="email" value={payload.email} onChange={(e) => setPayload({...payload, first_name: e.target.value})} />
            </div>
            <div className='flex flex-col mb-2'>
                <label htmlFor="email" className='mb-2'>Nom de famille :</label>
                <InputText className='m-2 max-h-[40px]' placeholder='Doe' id="email" value={payload.email} onChange={(e) => setPayload({...payload, last_name: e.target.value})} />
            </div>
            <div className='flex flex-col mb-2'>
                <label htmlFor="email" className='mb-2'>Email :</label>
                <InputText className='m-2 max-h-[40px]' placeholder='johndoe@gmail.com' id="email" value={payload.email} onChange={(e) => setPayload({...payload, email: e.target.value})} />
            </div>
            <div className='flex flex-col mb-2'>
                <label htmlFor="email" className='mb-2'>Mot de passe :</label>
                <InputText className='m-2 max-h-[40px]' placeholder='********' id="email" value={payload.password} onChange={(e) => setPayload({...payload, password: e.target.value})} />
            </div>
            <Button className='bg-[#F08080] hover:bg-[#F4978E] text-white m-2'>
                Rechercher
            </Button>
        </form>
    </div>
  )
}

export default Register