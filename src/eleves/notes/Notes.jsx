import { useState } from "react"

export const Notes = () => {
    const [absence, setAbsence] = useState(0)

    const augmentationAbsence = () => {
        setAbsence(absence+1)
    }

    const reductionAbsence = () => {
        setAbsence(absence-1)
    }

    return(
        <div>
            <span>Heures d'absence : </span> <button onClick={reductionAbsence}>-</button> {absence} <button onClick={augmentationAbsence}>+</button><br></br>
        </div>
    )
}