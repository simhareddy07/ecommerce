import {FaCartArrowDown} from react-icons/fa;
import {FaHeart} from react-icons/fa;
import {NavLink, Routes, Route} from react-icons/fa;

const nav =()=>{
   
    return (
        <nav>
            <NavLink to={'/'} className = {isActive?'text-red-500':'text-blue-500'}>
          Home</NavLink>

            <NavLink to = '/'>
             Profile  </NavLink>
            
            <NavLink to = '/'> 
             <FaHeart/> </NavLink>
            <NavLink to = '/cart'>
             <FaCartArrowDown/> </NavLink>
            

    </nav>    
)


}