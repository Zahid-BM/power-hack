import axios from "axios";
import { useEffect, useState } from "react"

const useBillingList = () => {
    const [blillingList, setBillingList] = useState([]);
    useEffect(() => {
        const getBillingList = async () => {
            const { data } = await axios.get('http://localhost:8000/billing-list');
            setBillingList(data);
        }
        getBillingList();
    }, []);

    return [blillingList, setBillingList];
}
export default useBillingList;