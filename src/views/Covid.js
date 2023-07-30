import { useEffect, useState } from "react";
import axios from "axios";
import moment from 'moment';

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    // componentDidMount
    useEffect(async () => {
        try {
            let res = await axios.get('https://reqres.in/api/users?page=2')
            let data = res && res.data ? res.data : [];
            // if (data && data.length > 0) {
            //     data.map(item => {
            //         item.Date = moment(item.Date).format('DD/MM/YYYY');
            //         return item;
            //     })
            // }
            setDataCovid(data.data);
            setIsLoading(false);
            setIsError(false)
        }
        catch(e){
            setIsError(true);
            setIsLoading(false);
        }
    }, []);

    return (
        <>
            <h3>Covid 19 tracking in VietNam:</h3>
            <table>
                {console.log('check data covid:', dataCovid)}
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>first_name</th>
                        <th>last_name</th>
                        <th>avatar</th>
                    </tr>
                </thead>
                <tbody>

                    {isError === false && isLoading === false && dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                    <td>{item.avatar}</td>
                                </tr>
                            )
                        })
                    }

                    {isLoading === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Loading...</td>
                        </tr>
                    }

                    {isError === true
                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>  Error...</td>
                        </tr>
                    }

                </tbody>

            </table>
        </>
    )
}

export default Covid;