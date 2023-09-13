
import PropTypes from 'prop-types';

const Cart = ({selectActors,totalCost, remaining,} ) => {

    // const {id }= selectActors
    // console.log(selectActors)
    return (
        <div>
           <h1 className='text-2xl py-4 border-b-2 border-gray-500 font-bold '> Total actors : <span className='text-teal-300' > {selectActors.length} </span> </h1> 
           <h1 className='text-xl py-4 border-b-2 border-gray-500 '> Total Cost : <span className='text-teal-300' > {totalCost} $ </span> </h1> 
           <h1 className='text-xl py-4 border-b-2 border-gray-500 '> Remaining Amount : <span className='text-teal-300' > {remaining} $ </span> </h1> 
           {
            selectActors.map((actor)=>(
                <li key={actor.id} className="list-decimal text-left  text-2xl pt-3 text-teal-300 " >{actor.name} </li>
            ))
           }
        </div>
    );
};


Cart.propTypes = {
    selectActors:PropTypes.array,
    totalCost:PropTypes.number,
    remaining:PropTypes.number
    
};

export default Cart;