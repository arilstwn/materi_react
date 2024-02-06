function List() {
    const cars = ['BMW', 'Alay', 'Volvo'];
    const users = [
        {
            username: "Irvanda",
            email: 'email@gmail.com'
        },
        {
            username: "Azizi",
            email: 'email@gmail.com'
        },
        {
            username: "Nizar",
            email: 'email@gmail.com'
        },
        {
            username: "Wahyu",
            email: 'email@gmail.com'
        },
    ];

    const table = [
                      

        { nama: "Yuya", username: "yuya kun", email: "yuya@gmail.com" },
   

        { nama: "Elaina", username: "elaina chan", email: "elaina@gmail.com" },
   

        { nama: "Umika", username: "umika chan", email: "umika@gmail.com" },
   

    ]


    return(
        <>
        <h2>Car</h2>
        <ul>
            {cars.map((car) => (
                <li>My car is{ car }</li>
            ))}
        </ul>
        <h2>Users</h2>
        <ul>
            {users.map((user) => (
                <li>Username:  {user.username}</li>
            ))}
        </ul>
       <div className="table">
        <table>
            <tr style={{}}>
                <th>No</th>
                <th>Nama</th>
                <th>Username</th>
                <th>Email</th>
            </tr>
            {table.map((val, key) =>{
                return (
                    <tr key={key}>
                        <td>{key + 1}</td>
                        <td>{val.nama}</td>
                        <td>{val.username}</td>
                        <td>{val.email}</td>
                    </tr>
                )
            } )}
        </table>
       </div>
       
        </>
    );
}

export default List;