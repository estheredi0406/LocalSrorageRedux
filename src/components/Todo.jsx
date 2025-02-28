const Todo = (props) => {
  return (
    <>
      <div>
        <input type="checkbox" />
        <label htmlFor={props.id}>{props.title}</label>
        <button>Delete</button>
      </div>
    </>
  );
};

export default Todo;
