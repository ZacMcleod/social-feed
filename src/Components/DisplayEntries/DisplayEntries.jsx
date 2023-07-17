
const DisplayEntries = (props) => {
    return (
        <table>
            <thead>
                <tr>
                <th>Entry Number</th>
                <th>User Name</th>
                <th>body</th>
                <th>Liked Status</th>
                </tr>
            </thead>
            <tbody>
                {props.parentEntries.map((entry, index) => {
                return (
                    <tr>
                    <td>{index + 1}</td>
                    <td>{entry.userName}</td>
                    <td>{entry.body}</td>
                    </tr>
                );
                })}
            </tbody>
        </table>
    );
}
 
export default DisplayEntries;