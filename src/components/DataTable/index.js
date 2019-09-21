import React from 'react';

import './style.css'

function DataTable(props) {
  const getBackgroudColorTable = (efficiency) => {
    switch (efficiency) {
      case "0":
        return "black"
      case "1/2":
        return "red"
      case "2x":
        return "springgreen"
    }
  }

  const getTextColorTable = (efficiency) => {
    if (efficiency == "0"){
      return "white"
    } else {
      return "black"
    }
  }

  return (
    <div className="DataTable">
      <table>
        <tr>
          <th className="no-hover"/>
          {props.data != null && props.data.headers.map((item) => 
            <th style={{
              backgroundColor: item.color
            }}>
              {item.name}
            </th>
          )}
        </tr>
        
        {props.data != null && props.data.data.map((_, i) => 
          <tr>
            <th style={{
              backgroundColor: props.data.headers[i].color,
            }}>
              {props.data.headers[i].name}
            </th>
            {props.data != null && props.data.data[i].map((item) => 
              <td style={{
                backgroundColor: getBackgroudColorTable(item),
                color: getTextColorTable(item)
              }}
              onMouseEnter={
                () => props.mouseEnter(item)
              }
              onMouseLeave={
                () => props.mouseLeave("")
              }>
                {item}
              </td>
            )}
          </tr>
        )}
      </table>
    </div>
  );
}

export default DataTable;