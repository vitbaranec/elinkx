import React, { useState, useEffect } from "react"; // IMPORT REACTU
import MaterialTable from "material-table"; // IMPORT Material table


export function Table() {              
        const { useState } = React;
    

    const [data, setData] = useState([      //DATA Firem "zákazníků"
        {}
    ]);

    const [columns] = useState([ //Hlavičky a typy dat
        {
            title:"Název společnosti", field:"name",
        },
        {
            title:"Kontakt", field:"contact", 
        },
        {
            title:"Let na trhu", field:"years", type: "numeric", headerStyle: {padding:"0", textAlign:'left'},
            
        },
        {
            title:"Typ servisu", field:"servis"
        }
    ]);

    useEffect(() => { //Propojení s API
        fetch("http://localhost:8080/posts")
        .then(resp=>resp.json())
        .then(resp=>{
            console.log(resp)
            setData(resp)})
    },[])

    return(
    <div>
        <MaterialTable 
            title="Seznam zákazníků" 
            data={data}
            columns={columns}
            cellEditable={{
                cellStyle: {},
                onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
                    return new Promise((resolve, reject) => {
                        console.log("newValue: " + newValue);
                        setTimeout(resolve, 0);
                    });
                }
            }}
            //PROMISE FCE
            //přidat data
            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                    setTimeout(() => {
                        setData([...data, newData]);
                        
                        resolve();
                    }, 0)
                    }),
            //update dat v řádku
            onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
    
                    resolve();
                }, 0)
                }),
                //Delete data
            onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);
                    resolve()
                }, 0)
                }),
            }}
        />
    </div>)
}