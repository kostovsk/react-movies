import ActorForm from "./ActorForm";

export default function EditActor() {
    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm model={{
                name: 'Tom Soyer',
                dateOfBirth: new Date('1975-01-01T00:00:00'),
                biography: `# Something
This person was born in **BG**.`,
                pictureURL: 'https://pbs.twimg.com/profile_images/3308352080/67c5c2d4661c1b919e637a8443003a0f_400x400.jpeg'
            }}
                onSubmit={values => console.log(values)}
            />
        </>
    )
}