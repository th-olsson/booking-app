import { useParams } from 'react-router-dom'
import TreatmentList from '../components/TreatmentList'

function TreatmentCategory() {
    const { id } = useParams();
    return (
        <>
            <TreatmentList category={id} />
        </>
    )
}

export default TreatmentCategory