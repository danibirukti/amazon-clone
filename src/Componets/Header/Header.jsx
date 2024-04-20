import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { DataContext } from '../DataProvider/DataProvider';
import LowerHeader from './LowerHeader';
import { auth } from '../../Utility/firebase';


const Header = () => {

const [{user, basket},dispatch]=useContext(DataContext)

const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);


	return (
		<section className={classes.fixed}>
			<section>
				<div className={classes.header__container}>
					<div className={classes.logo__container}>
						{/* amazon logo */}
                        <Link to="/">
							<img
								src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
								alt="amazon logo"
							/>
						</Link>
						{/* delivery */}
						<div className={classes.delivery}>
							<span>
								<SlLocationPin size={20} />
							</span>
							<div>
								<p>Delivered to</p>
								<span>Ethiopia</span> 
							</div>
						</div>
					</div>

					<div className={classes.search}>
						{/* search*/}
						<select name="" id="">
							<option value="">All</option>
						</select>
						<input type="text" name="" id="" placeholder="Search product" />
						<BsSearch size={38} />
					</div>
					<div className={classes.order__container}>
						<div className={classes.language}>
							<img
								src="https://media.istockphoto.com/id/1394197218/vector/american-usa-flag-with-real-proportions-and-colors.jpg?s=612x612&w=0&k=20&c=uzSZuRnAqtrCgYmWzW9opveCTzaJOkj2RAAdll7cd98="
								alt=""
							/>
							<select>
								<option value="">EN</option>
							</select>
						</div>
						{/* three components */}
                        <Link to={!user &&"/auth"}>
							<div>
							{user ? (
								<>
								<p>Hello{user?.email?.split("@")[0]}</p>
								<span onClick={() => auth.signOut()} >Sign Out</span>
								</>
							):(
								<>
							<p>Hello, Sign In </p>
							<span>Account & Lists</span>
							</>
							)
							}
							
							
							</div>
								
								
							
						</Link>
						{/* orders */}
                        <Link to="/orders">
							<p>returns</p>
							<span>& Orders</span>
						</Link>
						{/* cart */}
                        <Link to="/cart" className={classes.cart}>

							<BiCart size={35} />
							<span>{totalItem}</span>
						</Link>
					</div>
				</div>
			</section>
			<LowerHeader />
		</section>
	);
};

export default Header;

















































// // function Header() {
// //   return (
// {/* <>
// <section>
//     <div className={classes.header__container}>
//         {/* logo */}
//         <div></div>
//         <a harf="">
//             <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon logo" />
//         </a>
// {/* delivry */}
//      <span>
//         {/* icon */}
//      </span>
//      <div>
//         <p>Deliver to</p>
//         <span>Ethiopia</span>
//      </div>
//     </div>
//     <div>
//         {/* serach */}
//         <select name="" id="">
//             <option value="">All</option>
//         </select>
//         <input type="text" placeholder="Search product" />
//         {/* icon */}
//     </div>
//     {/* right side link */}
//     <div>
// <div>
//     <img src="https://media.istockphoto.com/id/1394197218/vector/american-usa-flag-with-real-proportions-and-colors.jpg?s=612x612&w=0&k=20&c=uzSZuRnAqtrCgYmWzW9opveCTzaJOkj2RAAdll7cd98=" alt="" />
// <section>
// <option value="">EN</option>
// </section>
// </div>
// {/* three componets */}
// <a href=' '>
//     <div>
//         <p>Sign In</p>
//         <span>Account & Lists</span>
//     </div>
// </a>
// {/* orders */}
// <a href=' '>
   
//         <p>Returns</p>
//         <span>& Orders</span>
// </a>
//     {/* cart */}
//     <a to={"/cart"} >
//         {/* icon */}
//         <span>0</span>
//     </a>
//     </div>
// </section>
// </>

//   )
// } */}

// export default Header