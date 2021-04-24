import { useParams } from 'react-router-dom'
import Treatments from '../components/Treatments'

function TreatmentCategory() {
    const { id } = useParams();
    console.log(id);
    return (
        <>
        <h1>Behandlingar inom {id}</h1>
        <Treatments category={id} />
        </> 
    )
}

export default TreatmentCategory
