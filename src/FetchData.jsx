import React,{useEffect,useState} from 'react'
import  axios  from 'axios'


function FetchData() {
const [data, setData] = useState ([]);

    useEffect (() =>
        { 
    axios.get("https://jsonplaceholder.org/users/")
    .then(result => setData(result.data))
    .catch(error=> console.log(error));
    
    },[])
    return(
        <div className='container p-4 justfy-center'>
            <h2 className='text-xl font-bold '>New fetch</h2>
        <table className='table border'>
            <thead className='p-3 bg-gray-600 text-white'>
                <th className='p-3 justfy-center m-4 border'>Id</th>
                <th className='p-3 justfy-center m-4 border'>Firstname</th>
                <th className='p-3 justfy-center m-4 border'>Lastname</th>
                <th className='p-3 justfy-center m-4 border'>Email</th>
                <th className='p-3 justfy-center m-4 border'>Birthdate</th>
                <th className='p-3 justfy-center m-4 border'>Password</th>
            </thead>
            <tbody>
                    { data.map((users,index)=>
                        <tr key={index=0}>           
                        <td>{users.id}</td>
                        <td>{users.firstname}</td>
                        <td>{users.lastname}</td>
                        <td>{users.email}</td>
                        <td>{users.birthdate}</td>
                        <td>{users.login.password}</td>
                        </tr>

                    )}
           
            </tbody>
        </table>
        </div>
    )
}

export default FetchData;