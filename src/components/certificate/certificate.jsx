// import CertificateIMAGE from "../../assets/certificate/certificate.jpg"
import almanacCertificateIMAGE from '../../assets/certificate/almanacCertificate.png';
import styles from "./certificate.module.scss";
import { useParams } from 'react-router-dom';
import api from "../../api/api.js";
import { useEffect, useState} from 'react';
const Certificate = () => {
    const { id } = useParams();
    const [certificateData, setCertificateData] = useState(null);
    const [date,setDate] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make the API request when the component mounts
                const backendResponse = await api.generateCertificate(id);
                if(backendResponse.status == 200){
                    setCertificateData(backendResponse.data.membershipObj);
                const originalDate = backendResponse.data.membershipObj?.created_date;
                // Create a Date object from the string
                const dateObject = new Date(originalDate);           
                // Get full year, month, and date
                const year = dateObject.getFullYear();
                const month = dateObject.getMonth() + 1; // Month is 0-based, so add 1
                const day = dateObject.getDate();
                const formattedDate = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
                setDate(formattedDate);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData(); // Call the fetchData function
    }, [id]); // Specify dependencies to trigger the effect when 'id' changes
    return (
        <>
            <div className={styles.container}>
                <img src={almanacCertificateIMAGE} alt="" className={styles.certificate} />
                <div className={styles.membershipNumber}>{certificateData?._id}</div>
                <div className={styles.name}>{certificateData?.name} <div className='py-4 text-start'>
                ({certificateData?.type_of_membership})
                    </div></div>
                <div className={styles.date}>{date}</div>
            </div>
            <button onClick={() => window.print()} className={styles.print}>Print</button>
        </>
    )
}
export default Certificate;