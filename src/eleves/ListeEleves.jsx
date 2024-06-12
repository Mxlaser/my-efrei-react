import { FicheEleves } from "./ficheEleves/FicheEleves";

export const ListeEleves = ({liste}) => {
    return (
        <div>
            {liste.map((value, index) => {
                return <FicheEleves key={index} nom={value.nom} prenom={value.prenom} notes={value.notes}/>
            })}
        </div>
    )
}