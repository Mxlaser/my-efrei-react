import { ListeEleves } from '../eleves/ListeEleves';
import { classe1, classe2 } from '../eleves/Eleves';
import { useState } from 'react';

export default function Eleves() {
    const [showMore, setShowMore] = useState(false);
    const [showMore2, setShowMore2] = useState(false);
    function handleMoreClick() {
        setShowMore(!showMore);
    }
    function handleMoreClick2() {
        setShowMore2(!showMore2);
    }

    return (
        <div>
            <h1>Classe 1 :</h1>
            <button onClick={handleMoreClick}>
                {showMore ? 'Masquer' : 'Afficher'} la classe 1
            </button>
            {showMore && <ListeEleves liste={classe1}/>}

            <h1>Classe 2 :</h1>
            <button onClick={handleMoreClick2}>
                {showMore2 ? 'Masquer' : 'Afficher'} la classe 2
            </button>
            {showMore2 && <ListeEleves liste={classe2}/>}
        </div>
    )
}