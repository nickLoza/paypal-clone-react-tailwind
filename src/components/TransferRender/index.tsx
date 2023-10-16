import { AiOutlineSearch } from "react-icons/ai"
import { LuNewspaper } from "react-icons/lu"
import { TiDelete } from "react-icons/ti"
import { HiUsers } from "react-icons/hi"
import { GiWideArrowDunk } from "react-icons/gi"
import { FaUserAlt } from "react-icons/fa"


type TransferRenderTypes = {
	type: string
}
function TransferRender({type}:TransferRenderTypes) {


	return (
		<section className="flex flex-col items-center max-w-[1250px] m-auto">
			{type === "send" && <Send/>}
			{type === "request" && <Request/>}
			{type === "contacts" && <Contacts/>}
			{type === "more" && <More/>}
		</section>
	)
}



function Send(){
	return (
		<div className="flex flex-wrap justify-center gap-5">
			<div className="min-w-[200px] w-[80%] lg:min-w-[400px]">
				<h2 className="text-3xl font-semibold py-5">Send payment to</h2>
				{/*input field*/}
				<div className="flex items-center justify-between p-3 bg-transparent border-2 max-w-[500px] rounded-xl">
					<AiOutlineSearch/>
					<input className="w-full bg-transparent pl-3 outline-none" type="text" placeholder="Name, @username, email, or mobile"/>
					<button>
						<TiDelete/>
					</button>
				</div>
				<button className="text-xl py-2 px-6 bg-gray-100 rounded-full mt-3">
					Next
				</button>
			</div>
			<div className="text-xl min-w-[200px] w-[80%] lg:min-w-[400px] mx-6 mt-10">
				<h3 className="text-3xl">More ways to send</h3>
				<div className="flex items-center gap-x-4">
					<LuNewspaper className="text-4xl"/>
					<div className="my-4">
						<p className="font-semibold">Send an invoice</p>
						<p className="text-sm">Customize, track, and send invoices.</p>
					</div>
				</div>
			</div>
		</div>	
	)
}

function Request(){

	const peopleRequested = [];

	return (
		<div className="flex flex-wrap justify-center gap-5">
			<div className="min-w-[200px] w-[80%] lg:min-w-[400px]">
				<h2 className="text-3xl font-semibold">Request payments from</h2>
				<p className="text-lg my-2">You can request multiple payments from up to 20 people.</p>
				{/*input field*/}
				<div className="flex items-center justify-between p-3 bg-transparent border-2 max-w-[500px] rounded-xl">
					<AiOutlineSearch/>
					<input type="text" className="w-full bg-transparent pl-3 outline-none" placeholder="Name, @username, email, or mobile"/>
					<div className="flex items-center">
						<HiUsers/>
						<p>{peopleRequested.length}/20</p>
					</div>
				</div>
				<button className="text-xl py-2 px-6 bg-gray-100 rounded-full mt-3">
					Next
				</button>
			</div>
			<div className="text-xl mx-6 mt-4">
				<h3 className="text-2xl mb-3">More ways to request</h3>
				<div className="flex items-center gap-x-3">
					<LuNewspaper className="text-3xl"/>
					<div>
						<p className="font-semibold">Send an invoice</p>
						<p className="text-lg">Customize, track, and send invoices.</p>
					</div>
				</div>
				<div className="flex items-center gap-x-3">
					<GiWideArrowDunk className="text-3xl"/>
					<div>
						<p className="font-semibold">Create a Personal Profile</p>
						<p className="text-lg">Get pais from people you know</p>
					</div>
				</div>
			</div>
		</div>
	)
}

function Contacts(){
	return (
		<section className="min-w-[200px] w-[80%] lg:min-w-[400px] text-center">
			<div>
				<div className="flex items-center justify-between p-3 mb-4 bg-transparent border-2 max-w-[500px] rounded-xl m-auto">
					<AiOutlineSearch/>
					<input type="text" className="w-full bg-transparent pl-3 outline-none" placeholder="Search"/>
					<button>
						<TiDelete/>
					</button>
				</div>
				<a href="#" className="text-xl font-semibold text-[#1072EB]">View blocked contacts</a>
			</div>
			<div className="flex flex-col items-center">
				<FaUserAlt className="text-4xl my-2"/>
				<p className="text-2xl">Get paid with your PayPal.Me</p>
				<p className="text-xl max-w-[550px] my-3">Share your personal link with almost anyone. They just click, enter the amount, log in and you get paid - the payment is in your PayPal account in seconds.</p>
				<a href="#" className="text-xl font-semibold text-[#143398] py-2 px-3 border-2 rounded-full">
					Create Your Link Now
				</a>
			</div>
		</section>
	)
}

function More(){
	return (
		<div className="flex flex-wrap justify-center gap-6 mt-4">
			<div className="h-[600px] w-[200px] text-center">
				<LuNewspaper className="m-auto text-3xl mb-3"/>
				<div>
					<p className="text-xl font-semibold my-3">Send an invoice</p>
					<p className="text-sm">Customize, track, and send invoices.</p>
				</div>
			</div>
			<div className="h-[600px] w-[200px] text-center">
				<GiWideArrowDunk className="m-auto text-3xl mb-3"/>
				<div>
					<p className="text-xl font-semibold my-3">Create a Personal Profile</p>
					<p className="text-sm">Help your friends and customers know it's you they are paying.</p>
				</div>
			</div>
		</div>
	)
}



export default TransferRender