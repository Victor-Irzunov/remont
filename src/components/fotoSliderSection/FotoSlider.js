import React from 'react'
import SliderComp from './slider/SliderComp'
import { LineOutlined } from '@ant-design/icons'

export const FotoSlider = () => {
	return (
		<section className='py-12 w-full z-10' id='galereya'>
			<div className='container'>
				<div className='text-center'>
					<h2 className='text-4xl text-white uppercase'>
						 <span className='text-orange-500'>Фото</span> работ
					</h2>
					<LineOutlined style={{ color: '#f8862e', fontSize: '3rem' }} />
				</div>

				<div className='m-auto text-center'>
					<SliderComp />
				</div>
			</div>
		</section>
	)
}
