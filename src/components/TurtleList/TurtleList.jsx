import Turtle from '../Turtle/Turtle';

const TurtleList = (props) => {
  console.log('TurtleList Props:', JSON.stringify(props, null, 2));

  return (
    <div className='turtle-list'>
      {props.turtles.map((turtle) => (
        <Turtle
          key={turtle.id}
          turtle={turtle}
          allTurtles={props.turtles}
          status={props.status}
        />
      ))}
    </div>
  );
};

export default TurtleList;
