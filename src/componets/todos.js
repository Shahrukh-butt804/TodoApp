import { useSelector, useDispatch } from 'react-redux'

// Redux 
import { remove, update,complete } from "../slices/counterSlice"

// Icons
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { IoCheckmarkDoneCircle } from "react-icons/io5";


// framer motion
import { motion } from 'framer-motion';


function Todos() {
    let todos = useSelector((state) => state.counter.todos)
    let dispatch = useDispatch()

    return (
        <>

            <div className="flex justify-center items-center 
             flex-wrap">
                {
                    todos.map((todo) => {
                        return (
                            <>
                                <div key={todo.id} className='md:w-2/3 w-96 mx-2 sm:w-2/3 flex justify-between items-center p-3 px-5 mt-5 bg-white rounded-3xl text-2xl font-bold text-purple-800 '>

                                    <div className='flex md:gap-7 gap-4'>

                                        {/* Priority highlisghts */}
                                        <div className='flex items-center gap-1 relative right-2 md:static'>
                                            <motion.div
                                                animate={{ scale: todo.priority == "High" ? [1, 1.5, 1] : [] }}
                                                transition={{
                                                    duration: 0.5,
                                                    repeat: Infinity,
                                                    repeatType: 'yoyo',
                                                }}
                                                className='bg-red-500 min-w-3 md:min-w-4 md:h-4 h-3 rounded-full '></motion.div>
                                            <motion.div
                                                animate={{ scale: todo.priority == "Mid" ? [1, 1.5, 1] : [] }}
                                                transition={{
                                                    duration: 0.5,
                                                    repeat: Infinity,
                                                    repeatType: 'yoyo',
                                                }}

                                                className='bg-yellow-500 min-w-3 md:min-w-4 md:h-4 h-3 rounded-full'></motion.div>
                                            <motion.div
                                                animate={{ scale: todo.priority == "Low" ? [1, 1.5, 1] : [] }}
                                                transition={{
                                                    duration: 0.5,
                                                    repeat: Infinity,
                                                    repeatType: 'yoyo',
                                                }}

                                                className='bg-green-500 min-w-3 md:min-w-4 md:h-4 h-3 rounded-full'></motion.div>
                                        </div>

                                        {/* Todo Text And Time */}
                                        <div className='flex flex-col  justify-start items-start'>

                                            <h1 className='md:text-sm text-xs' >{todo.createdAt} </h1>
                                            <h1 className='md:text-2xl text-xl' >{todo.text} </h1>

                                        </div>
                                    </div>

                                    {/* Updae And Remove Items Icon */}
                                    <div className='flex gap-2 items-center relative left-3 md:static'>
                                        <MdDelete className='hover:text-purple-300
                                        md:text-3xl text-2xl'
                                            onClick={() => {
                                                dispatch(remove(todo.id))
                                            }}
                                        />
                                        <GrUpdate className='hover:text-purple-300
                                        md:text-2xl text-xl'
                                            onClick={() => {
                                                dispatch(update(todo.id))
                                            }}
                                        />
                                        <IoCheckmarkDoneCircle className='hover:text-purple-300 md:text-3xl text-2xl'  
                                            onClick={() => {
                                                // alert("congradulation")
                                                dispatch(complete(todo))
                                            }}

                                        />
                                    </div>


                                </div>

                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Todos
