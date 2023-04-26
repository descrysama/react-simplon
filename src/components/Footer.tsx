const Footer = () => {
  return (
    <div className='w-[100%] rounded-t-[50px] bg-black h-[130px] mt-[150px] flex items-center justify-center'>
        <div className="w-[80%] flex items-center justify-between">
            <img src="logo_white.png" alt="" style={{width: "100px"}}/>
            <p className="text-white m-2">© CarRentalz, Inc. All rights reserved.</p>
            <img className="m-2" src="./images/bandeau.png" alt="" style={{width: '160px'}}/>
        </div>
    </div>
  )
}

export default Footer