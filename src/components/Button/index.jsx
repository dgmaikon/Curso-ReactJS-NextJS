// import { Component } from "react";
// import "./styles.css";

// export class Button extends Component {
//   render() {
//     const { text, onClick, disabled } = this.props;
//     return (
//       <button disabled={disabled} className="button" onClick={onClick}>
//         {text}
//       </button>
//     );
//   }
// }
import "./styles.css";

export const Button = ({ text, onClick, disabled }) => (
  <button className="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
);
