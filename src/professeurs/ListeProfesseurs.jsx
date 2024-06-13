import { FicheProfesseurs } from "./ficheProfesseurs/FicheProfesseurs";

export const ListeProfesseurs = ({liste}) => {
    return (
        <div>
            {liste.map((value, index) => {
                return <FicheProfesseurs key={index} nom={value.nom} prenom={value.prenom} matiere={value.matiere} />
            })}
        </div>
    )
}