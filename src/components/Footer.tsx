import { useLocation } from "react-router-dom"

const Footer = () => {

  const location = useLocation();


  return (
    location.pathname == '/login' || location.pathname == '/register' ? null :
    <div className='w-[100%] rounded-t-[50px] bg-black md:h-[130px] mt-[150px] flex items-center justify-center'>
        <div className="w-[80%] flex items-center md:justify-between justify-center text-center flex-col md:flex-row p-2">
            <img src="logo_white.png" alt="" style={{width: "100px"}}/>
            <p className="text-white m-2">© CarRentalz, Inc. All rights reserved.</p>
            <img className="m-2" src="./images/bandeau.png" alt="" style={{width: '160px'}}/>
        </div>
    </div>
  )
}

export default Footer