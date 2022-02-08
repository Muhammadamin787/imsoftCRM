export const Potensial_Mijozlar = "PotensialMijozlar";
export const Real_Mijozlar = "RealMijozlar";
export const Inkor_Mijozlar = "InkorMijozlar";
import PotentsialClientPage from '../../all Templates/ClientTemlates/PotensialMijozlarTemplate';
import RejactClientPage from '../../all Templates/ClientTemlates/InkorQilganMijozlarTemplate';
import RealClientPage from '../../all Templates/ClientTemlates/RealMijozlarTemplate';

function ClientPageControl({page}){
    switch(page.type){
        case Potensial_Mijozlar: {
            return <PotentsialClientPage />
        }
        case Real_Mijozlar: {
            return <RealClientPage />
        }
        case Potensial_Mijozlar: {
            return <RejactClientPage />
        }
    }
}