import React from 'react'

const Table = ({data}) => {
  return (
    <table>
        <tbody>
            <tr>
                <th>Cluster</th>
                <th>Place</th>
                <th>Location</th>
            </tr>
            {data.map((item)=>(
                <tr key={item.id}>
                    <td>{item.Cluster}</td>
                    <td>{item.loc}</td>
                    <td>somewhere</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table