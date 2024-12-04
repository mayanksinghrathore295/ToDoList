import React from 'react';

const Navbar = ({addTask,setNewList,handleSearch}) => {
    console.log("Navbar compoenent is called")
  return (
    <div className="flex flex-col  items-center  p-4 ">
      <h1 className="text-4xl font-bold ">To Do List</h1>
     
        <input
          type="text"
          placeholder="Tasks to be searched"
          className="w-100 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
          onChange={(e)=>{handleSearch(e.target.value)}}
        />
        <div className='flex gap-4'>
        <input type="text" placeholder='Add new Task' className='w-100 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4'
        onChange={(e)=>{setNewList(e.target.value)}}/>
        <button className='p-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 w-100 h-full mt-4'
       onClick={addTask} >Create Task</button></div>
    </div>
  );
};

export default React.memo(Navbar);

