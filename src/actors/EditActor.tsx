import ActorForm from "./ActorForm";

export default function EditActor() {
    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm model={{
                name: 'Tom Soyer',
                dateOfBirth: new Date('1975-01-01T00:00:00')
            }}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}