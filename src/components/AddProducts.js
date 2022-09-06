// import React from 'react'

// class Fetch extends React.Component {
//     state = {
//       users: [],
//     };
  
//     fetchData() {
//       fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => {
//           this.setState({
//             users: data,
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
  
//     render() {
//       return (
//         <div>
//           <h3>For getting user data click here</h3>
//           <button
//             onClick={() => {
//               this.fetchData();
//             }}
//           >
//             Click Here
//           </button>
//           {this.state.users.map((value, ind) => {
//             return (
//               <table
//                 style={{ border: "1px solid black", borderCollapse: "collapse" }}
//                 className="table"
//               >
//                 <tr>
//                   <th
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="th"
//                   >
//                     UserId
//                   </th>
//                   <th
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="th"
//                   >
//                     Title
//                   </th>
//                   <th
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="th"
//                   >
//                     body
//                   </th>
//                 </tr>
//                 <tr>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="tr"
//                     key={ind}
//                   >
//                     {value.userId}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="tr"
//                   >
//                     {value.title}
//                   </td>
//                   <td
//                     style={{
//                       border: "1px solid black",
//                       borderCollapse: "collapse",
//                     }}
//                     className="tr"
//                   >
//                     {value.body}
//                   </td>
        
//                 </tr>
//               </table>
//             );
//           })}
//         </div>
//       );
//     }
//   }
  
//   export default Fetch;




//https methods
//1.get() is used to get the data from the backend(reading data from back end)
//2.post() is used to send the data from the frontend(to create a data)
//3.put() is used to update the existing data(update)
//4.patch() will update only the changed value(update)
//5.delete() is used to delete an item(delete)

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function AddProducts() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    setUser(res.data);
  };
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Website</th>
        </tr>
        {user.map((val) => {
          return (
            <tr>
              <td>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.username}</td>
              <td>{val.email}</td>
              <td>{val.website}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default AddProducts;
