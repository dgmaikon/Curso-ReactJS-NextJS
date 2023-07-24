// import p from 'prop-types';
// import './styles.css';

// export const Button = ({ text, onClick, disabled = false }) => (
//   <button className="button" onClick={onClick} disabled={disabled}>
//     {text}
//   </button>
// );

// Button.propTypes = {
//   text: p.string.isRequired,
//   onClick: p.func.isRequired,
//   disabled: p.bool,
// };
import P from 'prop-types';

export const Button = ({ children, onButtonClick, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      style={{ fontSize: '60px' }}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  onButtonClick: P.func.isRequired,
  disabled: P.bool,
};
