import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { AutoComplete } from "primereact/autocomplete";

const Faq = () => {
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center w-full h-[600px]" style={{backgroundImage: `url("images/faq_bg.jpg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPositionY: "center"}}>
          <h1 className="text-[32px] font-medium drop-shadow-2xl text-white">FAQ. Une question ? Une réponse.</h1>
        </div>
      </section>
      <section className='flex justify-center m-4'>
        <div className='flex justify-center md:max-w-[80%] flex-wrap'>
          <div className='w-full mb-2'>
            <h3 className='font-bold'>Quelles conditions dois-je remplir pour louer un véhicule sur CarRentalz ?</h3>
            <div className='p-2 text-gray-600'>
                <p>Pour louer une voiture sur CarRentalz, en tant que titulaire du contrat de location, vous devez impérativement remplir les conditions suivantes :</p>
                <ul className='list-disc m-2'>
                    <li>Être âgé de 21 ans et plus</li>
                    <li>Être titulaire depuis plus de 2 ans d’un permis de conduire en cours de validité sur le territoire français.</li>
                </ul>
            </div>
          </div>
          <div className='w-full mb-2'>
            <h3 className='font-bold'>Et pour le carburant comment ça se passe ?</h3>
            <div className='p-2 text-gray-600'>
                <p>
                Vous trouverez sur les états des lieux aller et retour un espace dédié à la jauge d’essence.
                Le carburant n’est pas inclus dans le tarif de la location et il revient au locataire de restituer la voiture avec le même niveau d’essence que celui confié.
                Le plus souvent, le propriétaire aura pris soin de faire le plein mais cela n’est pas une obligation. Il est toutefois recommandé d’éviter de donner le véhicule sur la réserve.
                Nous vous conseillons de conserver le(s) ticket(s) de caisse lors de la remise à niveau du carburant afin de pouvoir les présenter au propriétaire si nécessaire.

                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Faq