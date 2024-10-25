const ExponentThree = (props) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{props.counter}³</p>
    <p className="exponent-result">{props.counter} * {props.counter} * {props.counter} = <span className="total">{props.counter * props.counter * props.counter}</span></p>
  </div>
);

export default ExponentThree;