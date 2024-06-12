import "./FicheProfesseurs.css"

export const FicheProfesseurs = ({nom, prenom, matiere}) => {
    return (
        <div className="professeurs">
            <h1>
                {nom} {prenom} {matiere}
            </h1>
            
        </div>
    )
}