import { useSelector } from 'react-redux'


function Completed() {
    let completed = useSelector((state) => state.counter.completed)

    return (
        <>

            <div className="text-center flex justify-center items-center flex-wrap">
                {
                    completed.map((todo) => {
                        return (
                            <>
                                 <div key={todo.id} className='md:w-2/3 w-96 mx-2 sm:w-2/3 flex justify-between items-center p-3 px-5 mt-5 bg-green-300 rounded-3xl text-2xl font-bold text-purple-800 '>

                                    <div className='flex gap-7 relative right-2 md:static'>

                                        {/* Todo Text And Time */}
                                        <div className='flex flex-col  justify-start items-start'>

                                            <h1 className='md:text-xl text-sm mb-1' >created at</h1>
                                            <h1 className='md:text-sm text-xs' >{todo.createdAt} </h1>

                                        </div>
                                    </div>
                                
                                        <div><h1 className='md:text-2xl text-xl'>{todo.text}</h1></div>

                                    <div className='flex flex-col  justify-start items-start relative left-2 md:static'>

                                        <h1 className='md:text-xl text-sm mb-1' >Completed at </h1>
                                        <h1 className='md:text-sm text-xs' >{todo.completedAt} </h1>

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

export default Completed
