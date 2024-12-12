// Way #1: Basic props approach - accessing everything through props object
const Turtle = (props) => {
  console.log('Turtle data:', JSON.stringify(props.turtle, null, 2));
  console.log('Status data:', JSON.stringify(props.status, null, 2));

  return (
    <div className='turtle' style={{ backgroundColor: props.turtle.color }}>
      <h2>{props.turtle.name}</h2>
      <p>Color: {props.turtle.color}</p>
      <p>Status: {props.status[props.turtle.name]}</p>
    </div>
  );
};


// // Way #2: Destructuring props in the function body
// const Turtle = (props) => {
//   // Extract specific values from props object
//   const { turtle, status } = props;
//   console.log('Turtle data:', JSON.stringify(turtle, null, 2));
//   console.log('Status data:', JSON.stringify(status, null, 2));
//   return (
//     <div className='turtle' style={{ backgroundColor: turtle.color }}>
//       <h2>{turtle.name}</h2>
//       <p>Color: {turtle.color}</p>
//       <p>Status: {status[turtle.name]}</p>
//     </div>
//   );
// };


// // Way #3: Destructuring props directly in the function parameters
// const Turtle = ({ turtle, status }) => {
//   // Props are immediately broken into named variables
//   console.log('Turtle data:', JSON.stringify(turtle, null, 2));
//   console.log('Status data:', JSON.stringify(status, null, 2));
//   return (
//     <div className='turtle' style={{ backgroundColor: turtle.color }}>
//       <h2>{turtle.name}</h2>
//       <p>Color: {turtle.color}</p>
//       <p>Status: {status[turtle.name]}</p>
//     </div>
//   );
// };


export default Turtle;
