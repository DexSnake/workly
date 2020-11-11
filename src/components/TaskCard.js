import React from 'react'
import Icon from '@mdi/react'
import { mdiCalendarBlank, mdiCircleMultiple } from '@mdi/js'

const TaskCard = (props) => {
	let categoryStyles
	if (props.category === 'Integrations') categoryStyles = 'bg-blue-100 text-blue-500'
	else if (props.category === 'Marketing & Sales') {
		categoryStyles = 'bg-pink-100 text-pink-500'
	} else if (props.category === 'Optimization') categoryStyles = 'bg-green-100 text-green-500'

	return (
		<div className="w-full lg:w-1/2 xl:w-1/3 px-3 mb-6">
			<div className="bg-white p-6 rounded shadow h-full flex flex-col">
				<div className="flex mb-4">
					<Icon path={mdiCircleMultiple} size={1} className="text-yellow-500" />
					<span className="text-gray-500 font-semibold ml-2">{props.credits} credits</span>
				</div>
				<div className="mb-4">
					<span className="font-bold text-3xl text-gray-800 leading-tight">{props.name}</span>
				</div>
				<div className="mb-4">
					<span className={`rounded-full px-3 py-1 font-semibold text-sm ${categoryStyles}`}>
						{props.category}
					</span>
				</div>
				<div className="mb-6">
					<p className="text-gray-500 font-semibold">{props.description}</p>
				</div>
				<div className="flex justify-between mt-auto">
					<div className="flex items-center">
						<Icon path={mdiCalendarBlank} size={1} className="text-gray-500 mr-2" />
						<span className="text-gray-500 font-semibold">
							{props.days} {props.days > 1 ? 'days' : 'day'}
						</span>
					</div>
					<div className="flex items-center">
						<div className="flex">
							<div
								className="h-8 w-8 border-2 border-white rounded-full bg-contain bg-center"
								style={{
									backgroundImage: 'url(https://thispersondoesnotexist.com/image)'
								}}
							/>
							<div className="h-8 w-8 border-2 border-white bg-red-500 rounded-full -ml-4 flex justify-center items-center text-white font-semibold text-sm">
								ML
							</div>
							<div
								className="h-8 w-8 border-2 border-white rounded-full bg-contain bg-center -ml-4"
								style={{
									backgroundImage: 'url(https://thispersondoesnotexist.com/image)'
								}}
							/>
						</div>
						<span className="text-gray-500 font-semibold ml-2">{props.users}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TaskCard
