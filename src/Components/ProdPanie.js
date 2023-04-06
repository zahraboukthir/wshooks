import React from "react";

const ProdPanie = () => {
  return (
    <tr>
      <td>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt=""
          width={"30px"}
        />
      </td>
      <td>Fjallraven</td>
      <td>109.95 dt</td>
      <td>
        <button>+</button> <p>1</p> <button>-</button>
      </td>
      <td>109.95 dt</td>
      <td>
        {" "}
        <button>X</button>
      </td>
    </tr>
  );
};

export default ProdPanie;
