import "./FicheEleves.css"

export const FicheEleves = ({nom, prenom, notes}) => {
    return (
        <div className="eleves">
            <h1>
                {nom} {prenom}
            </h1>
            <ul>
                {/* A regarder en detail  */}
                {Object.keys(notes).map((matiere, index) => (
                    <li key={index}>
                        {matiere}: {notes[matiere]}
                    </li>
                ))}
            </ul>
        </div>
    )
}