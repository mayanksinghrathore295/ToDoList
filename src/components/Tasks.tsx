import React from 'react';

const Tasks: React.FC = ({items,index,removeTask}) => {
    console.log("Task compoenent is called")
  return (
    <div className='flex flex-col items-center justify-center m-4 p-4 h-55 w-40 bg-blue-100 '>
    <h3 className='text-2xl font-bold mb-2'>{items}</h3>
    <button className='px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300'
      onClick={()=>removeTask(index)}>
      Delete Task
    </button>
  </div>
  );
};

export default Tasks;
// 

