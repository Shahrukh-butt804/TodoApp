import { useState, useEffect } from "react"
import { add } from "./slices/counterSlice"
import { useSelector, useDispatch } from 'react-redux'
import Todos from "./componets/todos"
import Completed from "./componets/completed"





export default function () {


  let update = useSelector((state) => state.counter.update)
  let [todo, setTodo] = useState("")

  const [selectedValue, setSelectedValue] = useState('Mid');

  // Function to handle change in radio button selection
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    if (update?.text) {
      setTodo(update.text)
    }

  }, [update])
  const dispatch = useDispatch()


  return (
    <>
      <div className="text-center text-4xl font-bold uppercase p-2 mt-10 mb-3 text-white ">
        Todo App
      </div>

      <div className="text-center px-2">
        <input type="text" placeholder="what is your next Task?" value={todo} className="md:w-1/2 sm:w-1/2 w-2/3 p-2 outline outline-purple-300 rounded-lg me-3 text-xl font-semibold px-3 md:px-4 "
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="p-2 px-2 md:px-3 rounded-md hover:bg-slate-200 outline outline-white text-white ms-2"
          onClick={() => {
            if (!todo || todo.length <= 2) {
              alert("Please Enter Your Task")
            } else {
              dispatch(add({
                text: todo,
                priority: selectedValue,
                time: new Date().toLocaleTimeString()

              }))
              setTodo("")
            }
          }
          }


        >Add+</button>
      </div>

      <div className=" flex justify-center items-center gap-3 lg:gap-80 flex-wrap text-xl text-white font-bold mt-5">

        <h3 className="md:text-2xl text-xl">Select The Priority Level</h3>
        <div className="flex gap-8 ">
          <label >
            <input
              className="mx-2"
              type="radio"
              name="Higy"
              value="High"
              checked={selectedValue === 'High'}
              onChange={handleChange}
            />
            High
          </label>

          <label>
            <input
              className="mx-2"
              type="radio"
              name="Mid"
              value="Mid"
              checked={selectedValue === 'Mid'}
              onChange={handleChange}
            />
            Mid
          </label>

          <label>
            <input
              className="mx-2"
              type="radio"
              name="Low"
              value="Low"
              checked={selectedValue === 'Low'}
              onChange={handleChange}
            />
            Low
          </label>

        </div>
      </div>

      <hr className="mt-5 mx-10 md:mx-40" />
      <Todos />
      <Completed />
    </>

  )
}