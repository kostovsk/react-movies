import { urlMovieTheaters } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { movieTheaterDTO } from "./movieTheater.mode";

export default function IndexMovieTheaters() {
    return (
        <IndexEntity<movieTheaterDTO>
            url={urlMovieTheaters} createURL="movietheaters/create" title="Movie Theaters"
            entityName="Movie Theater"
        >
            {(entites, buttons) => <>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {entites?.map(entity => <tr key={entity.id}>
                        <td>
                            {buttons(`movietheaters/edit/${entity.id}`, entity.id)}
                        </td>
                        <td>
                            {entity.name}
                        </td>
                    </tr>)}
                </tbody>
            </>}
        </IndexEntity>
    )
}