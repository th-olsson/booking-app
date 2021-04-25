import { useParams } from 'react-router-dom'
import TreatmentList from '../components/TreatmentList'

function TreatmentCategory() {
    const { id } = useParams();
    console.log(id);
    return (
        <>
            <h1>Behandlingar inom {id}</h1>
            <TreatmentList category={id} />
        </>
    )
}

export default TreatmentCategory
