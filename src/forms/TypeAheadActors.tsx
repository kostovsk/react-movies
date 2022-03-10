import { actorMovieDTO } from '../actors/actors.model';
import { Typeahead } from 'react-bootstrap-typeahead';

export default function TypeAheadActors(props: typeAheadActorsProps) {

    const actors: actorMovieDTO[] = [{
        id: 1, name: 'Cartman', character: '', picture: 'https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png'
    },
    {
        id: 2, name: 'Kyle', character: '', picture: 'https://static.wikia.nocookie.net/southpark/images/9/95/Kyle-broflovski.png/revision/latest?cb=20190411033301'
    },
    {
        id: 3, name: 'Kenny', character: '', picture: 'https://upload.wikimedia.org/wikipedia/en/6/6f/KennyMcCormick.png'
    }]

    return (
        <div className='mb-3'>
            <label>{props.displayName}</label>
            <Typeahead
                id="typeahead"
                onChange={actor => {
                    console.log(actor);
                }}
                options={actors}
                labelKey={actor => actor.name}
                filterBy={['name']}
                placeholder="Write the name of the actor..."
                minLength={1}
            />
        </div>
    )
}

interface typeAheadActorsProps {
    displayName: string;
    actors: actorMovieDTO[];
}