import React from 'react'
import 'styles/index.css'
import Icon from '@mdi/react'
import {
	mdiPlus,
	mdiStorefrontOutline,
	mdiClipboardCheckMultipleOutline,
	mdiBookOpenOutline,
	mdiAccountNetworkOutline,
	mdiChevronDown,
	mdiBell,
	mdiEmail,
	mdiMagnify,
	mdiFilterVariant
} from '@mdi/js'
import TaskCard from 'components/TaskCard'

function App() {
	return (
		<div className="bg-gray-200 flex">
			{/* Left Col */}
			<div className="w-full max-w-sm bg-white max-h-screen h-screen">
				<div className="pl-16 pr-8 py-8">
					<h1 className="text-purple-900 font-bold text-2xl tracking-tighter mb-6">workly</h1>
					<button className="bg-purple-100 hover:bg-purple-200 font-semibold text-purple-700 w-full px-3 py-3 rounded-3xl flex items-center justify-center">
						<Icon path={mdiPlus} size={1} className="fill-current mr-2" />
						New Task
					</button>
				</div>
				<div className="pl-10 pr-8">
					<div className="mt-10">
						<ul className="flex flex-col">
							<button className="text-gray-500 text-lg font-semibold hover:text-gray-700 py-3 pl-8">
								<li className="flex items-center">
									<Icon path={mdiStorefrontOutline} size={1.1} className="fill-current mr-2" />
									Home
								</li>
							</button>
							<button className="text-gray-500 text-lg font-semibold hover:text-gray-700 py-3 pl-8">
								<li className="flex items-center">
									<Icon
										path={mdiClipboardCheckMultipleOutline}
										size={1.1}
										className="fill-current mr-2"
									/>
									<div className="flex justify-between w-full">
										My Tasks
										<span className="bg-gray-300 p-1 px-2 rounded text-gray-500 text-sm flex justify-center items-center leading-none">
											0
										</span>
									</div>
								</li>
							</button>
							<button className="text-gray-700 text-lg font-semibold hover:text-gray-700 py-3 pl-8 border-l-2 border-gray-700">
								<li className="flex items-center">
									<Icon path={mdiBookOpenOutline} size={1.1} className="fill-current mr-2" />
									Task Catalog
								</li>
							</button>
							<button className="text-gray-500 text-lg font-semibold hover:text-gray-700 py-3 pl-8">
								<li className="flex items-center">
									<Icon path={mdiAccountNetworkOutline} size={1.1} className="fill-current mr-2" />
									Community
									<Icon path={mdiChevronDown} size={1} className="fill-current ml-2" />
								</li>
							</button>
						</ul>
					</div>
				</div>
			</div>
			{/* Right Col */}
			<div className="w-full p-10">
				{/* Account */}
				<div className="flex justify-end my-3">
					<div className="h-10 w-10 bg-white rounded-full shadow mr-4 flex items-center justify-center">
						<Icon path={mdiEmail} size={0.8} className="text-gray-500" />
					</div>
					<div className="h-10 w-10 bg-white rounded-full shadow mr-4 flex items-center justify-center relative">
						<Icon path={mdiBell} size={0.8} className="text-black" />
						<div className="bg-red-500 h-2 w-2 rounded-full absolute top-0 right-0"></div>
					</div>
					<div className="flex items-center border-l-2 pl-4">
						<img
							src="https://thispersondoesnotexist.com/image"
							alt="user profile image"
							className="h-10 w-10 rounded-full mr-3"
						/>
						<span className="text-gray-800 font-semibold">Hat's & Things</span>
					</div>
				</div>
				{/* Search Bar */}
				<div className="w-full max-w-screen-xl mx-auto">
					<div className="mt-10 mb-6">
						<div className="relative flex">
							<Icon
								path={mdiMagnify}
								size={1.2}
								className="text-gray-500 absolute"
								style={{ top: 20, left: 10 }}
							/>
							<input
								type="text"
								name="search"
								id="search"
								className="w-full rounded-l pl-12 pr-3 py-5 placeholder-gray-700 font-medium"
								placeholder="Search tasks like product page, product photos"
							/>
							<button className="bg-gray-400 px-5 py-3 text-white font-semibold rounded-r hover:bg-gray-500">
								Search
							</button>
						</div>
					</div>
					{/* Filters */}
					<div className="mb-6 flex justify-between items-center">
						<span className="text-gray-800 font-semibold">Showing 291 Tasks</span>
						<div className="flex items-center">
							<span className="text-gray-500 font-semibold">Sort by:</span>
							<span className="text-gray-800 font-bold ml-2 underline">Most Popular</span>
							<Icon path={mdiChevronDown} size={1} className="text-gray-500 ml-2" />
							<button className="border-2 border-gray-500 text-gray-800 font-bold flex items-center rounded-full px-5 py-3 ml-6">
								Filter
								<Icon path={mdiFilterVariant} size={1} className="text-gray-500 ml-2" />
							</button>
						</div>
					</div>
					{/* Tasks */}
					<div className="flex -mx-3 flex-wrap">
						<TaskCard
							credits="2"
							name="Increase fonfidence with TrustPilot reviews"
							category="Integrations"
							description="Some kind of short description can go here to better explain the
              recommended task."
							days="2"
							users="16"
						/>
						<TaskCard
							credits="1"
							name="Be social - Sell your stock directly on Instagram"
							category="Marketing & Sales"
							description="Some kind of short description can go here to better explain the
              recommended task."
							days="1"
							users="12"
						/>
						<TaskCard
							credits="2"
							name="Increase the speed of your site on mobile & desktop"
							category="Optimization"
							description="Some kind of short description can go here to better explain the
              recommended task."
							days="3"
							users="14"
						/>
						<TaskCard
							credits="2"
							name="Increase fonfidence with TrustPilot reviews"
							category="Optimization"
							description="Some kind of short description can go here to better explain the
              recommended task."
							days="2"
							users="16"
						/>
						<TaskCard
							credits="2"
							name="Be social - Sell your stock directly on Instagram"
							category="Marketing & Sales"
							description="Some kind of short description can go here to better explain the
              recommended task."
							days="4"
							users="10"
						/>
						<TaskCard
							credits="3"
							name="Increase the speed of your site on mobile & desktop"
							category="Integrations"
							description="Some kind of short description can go here to better explain the
              recommended task."
							days="2"
							users="11"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
