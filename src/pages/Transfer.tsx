import { Link, useParams } from "react-router-dom"
import TransferRender from "../components/TransferRender";

function Transfer() {
	const { type } = useParams();

	return (
		<>
			<div className="flex items-center justify-between h-[96px] w-full bg-white shadow-md">
				<ul className="flex items-center max-w-[580px] m-auto  gap-x-4 text-xl font-semibold">
					<li>
						<Link to={"/transfer/send"} className={`p-4 rounded-full ${type == "send"? "bg-[#EDF9FF] text-[#142C8E]": ""}`}>
							Send
						</Link>
					</li>
					<li>
						<Link to={"/transfer/request"} className={`p-4 rounded-full ${type == "request"? "bg-[#EDF9FF] text-[#142C8E]": ""}`}>
							Request
						</Link>
					</li>
					<li>
						<Link to={"/transfer/contacts"} className={`p-4 rounded-full ${type == "contacts"? "bg-[#EDF9FF] text-[#142C8E]": ""}`}>
							Contacts
						</Link>
					</li>
					<li>
						<Link to={"/transfer/more"} className={`p-4 rounded-full ${type == "more"? "bg-[#EDF9FF] text-[#142C8E]": ""}`}>
							More
						</Link>
					</li>
				</ul>
			</div>
			{type &&
			<TransferRender type={type}/>}
		</>
	)
}

export default Transfer