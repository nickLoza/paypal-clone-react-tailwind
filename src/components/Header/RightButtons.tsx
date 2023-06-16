import { useState } from "react";
import { ImPaypal } from "react-icons/im";
import { MdNotifications, MdSettings } from "react-icons/md";

function RightButtons() {
	const [ toggleNotification, setToggleNotification ] = useState<boolean>(false);
	const [ optionSelected, setOptionSelected ] = useState<string>("notification");

	function handleOnClickNotification(){
		setToggleNotification(!toggleNotification)
	}
	function handleOnClickOptions(keyWord: string){
		setOptionSelected(keyWord)
	}
	return (
		<div className="relative flex text-2xl text-[#D1F1FF] items-center">
					<button className="" onClick={handleOnClickNotification}>
						<MdNotifications/>
					</button>
					<button className="hidden md:block ml-3">
						<MdSettings/>
					</button>
					<p className="hidden md:block text-sm font-semibold ml-4">LOG OUT</p>
					{/*dropdown*/}
				<div className={`absolute top-[40px] left-[-500px]  md:left-[-250px] z-[250] min-w-[400px] min-h-[500px] bg-[#F5F7FA] text-base text-black rounded-xl p-4 transition duration-200 ${toggleNotification? "opacity-1 pointer-events-all" : "opacity-0 pointer-events-none"}`}>
					{/*top buttons*/}
					<div className="flex justify-center gap-x-8 text-white text-sm font-semibold">
						<button className={`py-2 px-4 min-w-[140px] ${optionSelected === "notification"? "bg-[#0070BA]" : "text-black border-2"}`} onClick={()=>handleOnClickOptions("notification")}>
							Notifications (0)
						</button>
						<button className={`py-2 px-4 min-w-[140px] ${optionSelected === "inbox"? "bg-[#0070BA]" : "text-black border-2"}`} onClick={()=>handleOnClickOptions("inbox")}>
							Inbox (0)
						</button>
					</div>
					{optionSelected === "notification"&& 
						<>
							<p className="text-xl my-4 text-gray-600">Earlier</p>
							<div className="flex flex-col gap-y-6 items-center">
								<div className="flex items-center gap-x-6">
									<ImPaypal className="text-6xl"/>
									<div>
										<p className="text-lg font-semibold">Cash out quickly</p>
										<p className="text-sm mb-4">Transfer money in minutes from PayPal right to your bank.</p>
										<a className="py-2 px-4 border-2 rounded-xl" href="#">Link Debit Card</a>
									</div>
								</div>
								<div className="flex items-center gap-x-6">
									<ImPaypal className="text-6xl"/>
									<div>
										<p className="text-lg font-semibold">Shop with confidence</p>
									<p className="text-sm mb-4">Link a credit card to keep your financial info secure when buying online.</p>
									<a className="py-2 px-4 border-2 rounded-xl" href="#">Link Debit Card</a>
									</div>
								</div>
							</div>
						</>}
					{optionSelected === "inbox"&& 
						<>
							<p className="text-xl my-4 text-gray-600 border-2 py-2 px-3">You have no messages</p>
						</>}
				</div>
				</div>
	)
}

export default RightButtons