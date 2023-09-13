
// import PropTypes from 'prop-types';
import { useState } from 'react';
import './Home.css'
import { useEffect } from 'react';

const Home = () => {
    const [allActors, setAllActors] = useState([]);
    const [selectActors, setSelectActors] = useState([]);

    useEffect(( )=>{
        fetch('../../../public/data,json')
        .then(res => res.json())
        // .then(data=> console.log(data))
        .then(data=> setAllActors(data))
    }, []);

    const handelSelectActor = (actor) =>{
        setSelectActors([...selectActors, actor])
    };
console.log(selectActors);
// console.log(allActors);

    return (
        <>
        <div className='w-11/12 mx-auto flex md:flex-row flex-col py-10 gap-3'>
        <div className='grid md:grid-cols-3 gap-5  md:w-3/4' >
            {
                allActors.map((actor)=>( 
                    <div key={actor.id} className=" py-4 px-3 rounded-lg text-center border border-slate-800  bg-[#1e293b80]  ">
                    <img className='rounded-full mx-auto w-24' src={actor.image} alt="" />   
                   <h2 className='text-3xl pt-3'>{actor.name} </h2>
                   <p className='py-4 text-sm leading-7 '> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id, dicta! </p>
                   <div className='text-lg flex justify-around items-center'>
                       <h3 className='border px-2  rounded-lg'>salary:{actor.salary} $</h3>
                       <h3 className='border px-2  rounded-lg'>{actor.role}</h3>
                   </div>
                   <button onClick={()=>handelSelectActor(actor)} className='btn-primary text-xl px-5 py-1 rounded-lg mt-8'> Select</button>
                   </div>
                ))
            }
        </div>
        <div className='md:w-1/4 border border-slate-800  bg-[#1e293b80]  rounded-lg text-center'>
            <h1 className='text-5xl p-5'>Hello World</h1>
        </div>
        </div>
        </>
    );
};

Home.propTypes = {
    
};

export default Home;