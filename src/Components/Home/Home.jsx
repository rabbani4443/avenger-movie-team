
// import PropTypes from 'prop-types';
import { useState } from 'react';
import './Home.css'
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
import Swal from 'sweetalert2';

const Home = () => {
    const [allActors, setAllActors] = useState([]);
    const [selectActors, setSelectActors] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [remaining, setRemaining] = useState(25000);


    useEffect(( )=>{
        fetch('../../../public/data,json')
        .then(res => res.json())
        // .then(data=> console.log(data))
        .then(data=> setAllActors(data))
    }, []);

    const handelSelectActor = (actor) =>{
        const isExist = selectActors.find((actorBooking)=> actorBooking.id == actor.id);
        // console.log(isExist);


        let totalCostAmount = actor.salary;
        if (isExist) {
            return(
                Swal .fire({
                    title: 'Error!',
                    text: 'You are already Booking this person',
                    icon: 'error',
                    confirmButtonText: 'Close'
                  }) );
        }
        else{
            selectActors.forEach((actorSalary)=>{
                totalCostAmount = totalCostAmount + actorSalary.salary;
            } );
            setTotalCost(totalCostAmount) 

            if (totalCostAmount > 25000) {
                return ( Swal.fire({
                    title: 'Error!',
                    text: 'Your money is gone',
                    icon: 'error',
                    confirmButtonText: 'Close'
                  }) );
            }

            const remainingAmount =25000 - totalCostAmount;
            setRemaining(remainingAmount) 

            setSelectActors([...selectActors, actor])
        }
    };
// console.log(selectActors);
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
                   <button onClick={()=>handelSelectActor(actor)} className='bg-teal-500 text-black text-xl px-5 py-1 rounded-lg mt-8'> Select</button>
                   </div>
                ))
            }
        </div>
        <div className='md:w-1/4 border border-slate-800  bg-[#1e293b80]  rounded-lg text-center px-5'>
            <Cart 
            selectActors={selectActors} 
            totalCost={totalCost} 
            remaining={remaining} ></Cart>
        </div>
        </div>
        </>
    );
};

Home.propTypes = {
    
};

export default Home;