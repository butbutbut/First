function Hello(props) {
  return <div>
            <p>Имя: {props.name}</p>
            <p>Возраст: {props.age}</p>
    </div>;
}
Hello.defaultProps = {name: "Tom", age: 22};
ReactDOM.render(
    <Hello age="34"  />,  // name="Tom" - из значений по умолчанию
    document.getElementById("container")
)