import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { useState } from 'react';

interface ILoginForm {
    email: string;
    password: string;
}

const Login = () => {

    const [payload, setPayload] = useState<ILoginForm>({
        email: "",
        password: ""
    });

  return (
    <div className='w-full flex justify-center flex-col items-center mt-[120px]'>
        <Link to="/"><img src="logo_black.png" alt="" style={{width: "200px"}}/></Link>
        <h2>Connexion</h2>
        <form className='w-[30%]'>
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

export default Login