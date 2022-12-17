import React from 'react'
import {data} from './mock'

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'



const style = {
	container: ` fixed flex items-center justify-center `,
	img: `object-cover object-center h-[220px] w-[290px]  inline-block p-2 cursor-pointer hover:scale-110 ease-in-out  duration-300`,
}


const sliderLeft = () => {
	const slider = document.getElementById('slider');
	slider !== null ? slider.scrollLeft -= 290 : null;
	
	
	 
}
const sliderRight = () => {
	const slider = document.getElementById('slider');
	slider !== null ? slider.scrollLeft += 290 : null;
}

const App = () => {
	return (
		<div className={style.container}>
			<FiArrowLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={sliderLeft} size={40} />

			<div
				id='slider'
				className='w-full h-[200px] flex items-end overflow-x-scroll scroll whitespace-nowrap scroll-smooth  scrollbar-hide '>

				{data.map((item) => (
					<img className={style.img}  src={item.img} />
				))}

			</div>
			<FiArrowRight className=' opacity-50 cursor-pointer hover:opacity-100' onClick={sliderRight} size={40} />
		</div>
	)
}

export default App
