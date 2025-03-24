const Course = ({course}) => {
    return(
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
      </div>
    )
  }
  
  const Header = ({course}) => {
    return (
      <div>
        <h2>{course.name}</h2>
      </div>
    )
  }
  
  const Content = ({parts}) => {
    return(
      <div>
        {parts.map(part =>
          <Part
          key={part.id}
          name={part.name}
          exercises={part.exercises}
          />
        )}
      </div>
    )
  }
  
  const Part = ({name, exercises}) =>{
    return(
      <div>
        <p>{name} {exercises}</p>
      </div>
    )
  }
  
  const Total = ({parts}) => {
    const sum = parts.reduce((sum, part) => sum + part.exercises, 0)
    return(
      <div>
        <p>total of {sum} exercises</p>
      </div>
    )
  }

  export default Course