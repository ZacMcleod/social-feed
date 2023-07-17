
const DisplayEntries = (props) => {
    return (
        <table>
            <thead>
                <tr>
                <th>Entry Number</th>
                <th>User Name</th>
                <th>Text</th>
                <th>Liked Status</th>
                </tr>
            </thead>
            <tbody>
                {props.parentEntries.map((entry, index) => {
                return (
                    <tr>
                    <td>{index + 1}</td>
                    <td>{entry.userName}</td>
                    <td>{entry.text}</td>
                    </tr>
                );
                })}
            </tbody>
        </table>
    );
}
 
export default DisplayEntries;