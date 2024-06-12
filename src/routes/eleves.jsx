import { ListeEleves } from '../eleves/ListeEleves';
import { classe1, classe2 } from '../eleves/Eleves';

export default function Eleves() {
    return (
        <div>
            <ListeEleves liste={classe1}/>
        </div>
    )
}