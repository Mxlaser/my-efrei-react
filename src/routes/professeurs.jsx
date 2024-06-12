import { ListeProfesseurs } from '../professeurs/ListeProfesseurs';
import { professeurs } from '../professeurs/Professeurs';

export default function Professeurs() {
    return (
        <div>
            <ListeProfesseurs liste={professeurs}/>
        </div>
    )
}