import React from 'react'

function Task1() {
    const Postobj = [
      {
        id: 1,
        name:"Omkar",
        Date:"1/12/2023",
        value:20,
      },
      {
        id: 2,
        name:"Omkar",
        Date:"2/12/2023",
        value:40,
      },
      {
        id: 3,
        name:"Vishal",
        Date:"3/12/2023",
        value:50,
      },
      {
        id: 4,
        name:"Vishal",
        Date:"4/12/2023",
        value:60,
      },
      {
        id: 5,
        name:"Jafar",
        Date:"5/12/2023",
        value:60,
      },
      {
        id: 4,
        name:"Tushar",
        Date:"6/12/2023",
        value:60,
      },
    ];

    const tempDate = [
      ...new Set(
      Postobj.map((elem)=>{
        return elem.Date;
      })
      ),
    ];
    console.log(tempDate);

    const tempName = [
      ...new Set(
        Postobj.map((elem)=>{
          return elem.name;
        })
      ),
    ];
    console.log(tempName);
  return (
    <div>
      <h1>Dynamic table</h1>

      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            {tempDate.map((Date, i)=>{
              return <th key={i}>{Date}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {tempName.map((name, i)=>(
            <tr key={i}>
              <td>{name}</td>
              {tempDate.map((Date)=>{
                const matchingItem = Postobj.find(
                  (e) => e.Date === Date && e.name === name
                );
                return <td>{matchingItem ? matchingItem.value : "-"}</td>;
              }
                
            )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Task1

