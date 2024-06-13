import "./FicheProfesseurs.css"

export const FicheProfesseurs = ({nom, prenom, matiere}) => {
    return (
        <div className="professeurs">
            <h1>
                {nom} {prenom}
            </h1>
            Matiere enseignée : <b>{matiere}</b>
        </div>
    )
}