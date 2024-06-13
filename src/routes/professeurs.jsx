import { ListeProfesseurs } from '../professeurs/ListeProfesseurs';
import { professeurs } from '../professeurs/Professeurs';
import { useState } from 'react';

export default function Professeurs() {
    const [showMore, setShowMore] = useState(false);
    function handleMoreClick() {
        setShowMore(!showMore);
    }

    return (
        <div>
            <button onClick={handleMoreClick}>
                {showMore ? 'Masquer' : 'Afficher'} les détails
            </button>
            {showMore && <ListeProfesseurs liste={professeurs}/>}
        </div>
    )
}