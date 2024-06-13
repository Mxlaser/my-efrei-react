import { MyCalendar } from '../calendrier/moment';
import { planning } from '../calendrier/calendrier';

export default function Calendrier() {
    return (
        <div>
            <MyCalendar liste={planning}/>
        </div>
    )
}