import { BsPaypal, BsBank2, BsFillCreditCard2FrontFill } from "react-icons/bs";
import { LuNewspaper } from "react-icons/lu";
import { AiOutlineMore } from "react-icons/ai";
import getPaidImg from "../assets/getPaid.png";
import paySomeoneImg from "../assets/paySomeone.png";
import { Link } from "react-router-dom";
import { useState } from "react";


function Home() {

const [ moreContainer, setMoreContainer ] = useState(false);


function handleOnClick(){
setMoreContainer(!moreContainer)
}

return (
	<section className="flex flex-col items-center lg:flex-row lg:items-start  justify-center gap-x-2 w-full bg-[#FAF8F5]  text-[#001435]">
		<div className="sm:min-w-[450px]  lg:min-w-[550px] py-6 px-4">
			<div className="flex items-center gap-x-4 bg-white p-4 text-xl rounded-xl border-2">
				<BsPaypal/>
				<div className="text-lg ">
					<p className="font-semibold">Get the PayPal app</p>
					<p className="text-base">Start doing more with PayPal</p>
				</div>
			</div>
			{/*cards*/}
			<div className="flex items-center gap-x-4 text-white text-center mt-2">
				<div className="min-h-[400px] min-w-[150px] m-auto bg-[#1040C1] py-4 px-2 rounded-xl">
					<img src={paySomeoneImg} alt="get paid" height={170} width={160} className="m-auto"/>
					<p className="text-3xl font-semibold mt-3">Pay someone</p>
					<p className="max-w-[225px] text-lg m-auto my-5 font-medium">Pay for things that you bought or a service you received.</p>
					<button className="text-lg py-2 px-7 bg-white text-black rounded-full mt-8 font-semibold">
						Send <br/> Payments
					</button>
				</div>
				<div className="min-h-[400px] min-w-[150px] m-auto bg-[#121661] py-4 px-2 rounded-xl">
					<img src={getPaidImg} alt="get paid" height={170} width={160} className="m-auto"/>
					<p className="text-3xl font-semibold mt-3">Get paid</p>
					<p className="max-w-[225px] text-lg m-auto my-5 font-medium">Get for selling something or for the work you did.</p>
					<button className="text-lg py-2 px-7 bg-white text-black rounded-full mt-8 font-semibold">
						Request <br/> Payments
					</button>
				</div>
			</div>
			<section className="max-w-[550px] py-8 px-4  min-h-[300px]">
				<div className="flex flex-col gap-4 bg-white rounded-xl px-4 py-8">
					<div className="flex items-center justify-between">
						<p className="text-2xl font-semibold">PayPal balance</p>
						<button className="text-3xl">
							<AiOutlineMore/>
						</button>
					</div>
					<b className="text-3xl">$289.00</b>
					<p className="font-semibold">Available</p>
					<div>
						<Link to={"/transfer/send"} className="font-semibold bg-[#003087] text-base text-white py-2 px-4 rounded-xl">
							Transfer Funds
						</Link>
					</div>
				</div>
			</section>
		</div>
		{/*right*/}
		<div className="lg:relative lg:max-w-[400px] min-h-[400px] w-full py-8 px-10  bg-white">
			<div className="flex gap-x-2 justify-center text-xl font-bold text-[#003087]">
				<Link to="/transfer/send" className="px-10 py-2 bg-[#FFD345] rounded-xl transition duration-200 hover:brightness-105">Send</Link>
				<Link to="/transfer/request" className="px-10 py-2 bg-[#FFD345] rounded-xl transition duration-200 hover:brightness-105">Request</Link>
			</div>
			<div className="flex gap-x-4 items-center justify-between text-3xl mt-8">
				<button className="p-4 bg-gray-100 rounded-full">
					<BsBank2/>
				</button>
				<button className="p-4 bg-gray-100 rounded-full">
					<LuNewspaper/>
				</button>
				<button className="p-4 bg-gray-100 rounded-full" onClick={handleOnClick}>
					<AiOutlineMore/>
				</button>
			</div>
			{/*more container*/}
			<div className={`relative mb-4 text-xl font-semibold mt-4 transition-all duration-150 ease-in-out ${moreContainer? "translate-y-[0px] opacity-1 z-[50]" : "translate-y-[-200px] opacity-0 z-[-1]  h-0"}`}>
				<a href="#" className="flex items-center gap-x-3">
					<button className="p-4 bg-gray-100 rounded-full">
						<BsPaypal/> 
					</button>
					Get the new app
				</a>
				<a href="#" className="flex items-center gap-x-3 my-2">
					<button className="p-4 bg-gray-100 rounded-full">
						<LuNewspaper/> 
					</button>
					Create an estimate
				</a>
				<a href="#" className="flex items-center gap-x-3">
					<button className="p-4 bg-gray-100 rounded-full">
						<LuNewspaper/>
					</button>
					Go to Resolution Center
				</a>
			</div>
			{/*banks and cards*/}
			<div className="mt-5">
				<div className="flex items-center justify-between">
					<p className="text-xl font-bold">Banks and cards</p>
					<button className="text-3xl">
						<AiOutlineMore/>
					</button>
				</div>
				<div className="flex items-center gap-x-3">
					<BsFillCreditCard2FrontFill className="text-7xl"/>
					<p className="max-w-[300px] text-xl font-semibold mt-4">Shop and send payments more securely. Link your credit card now.</p>
				</div>
			</div>
		</div>
	</section>
)
}

export default Home