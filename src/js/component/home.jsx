import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [todo, setTodo] = useState("")
	const [todolist, setTodolist] = useState([])
	const [removeshow, setremoveshow] = useState(false);
	/* const remove = todolist.filter((item, id) => index != id)
	setTodolist(remove) */

	return (
		<div className="container">
			<h1 className="text-center mt-4">♥ To Do ♥</h1>
			<input type="text" placeholder=" What needs to be done?" value={todo}
				onChange={(e) => {
					setTodo(e.target.value)
				}
				}
				onKeyDown={(e) => {
					e.key === "Enter" ? setTodolist(todolist.concat(todo))
						: null;
					e.key === "Enter" ? setTodo("")
						: null;
				}
				}></input>
			{todolist.map((task, index) => (
				<li
					key={index}
					onMouseEnter={() => setremoveshow(index)}
					onMouseLeave={() => setremoveshow(null)}>
					{task}{""}
					{removeshow == index && (
						<img
							src="https://play-lh.googleusercontent.com/clvbyNWTT8fYSfdTvrZM4M68R-9JRtFfIQmt3YZr90pkph4WJ6C2JUfjDL1CnQVRHkQZ"
							onClick={() => {
								setTodolist(
									todolist.filter(
										(a, id) => id !== index
									)
								);
							}}></img>
					)}</li>
			))}
			<li className="TaskLeft">
				{todolist.length} items left
			</li>
		</div>
	);
};

export default Home;
