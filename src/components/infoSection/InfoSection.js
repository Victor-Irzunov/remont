import React from 'react'
import { InfoCircleOutlined } from '@ant-design/icons'

export const InfoSection = () => {
	return (
		<section className='py-10 z-10 border mt-24 mb-12 px-2'>
			<div className='container'>
				<div className='text-center text-white'>

					<InfoCircleOutlined className='text-2xl text-orange-500' />
					<p className='mt-4 text-2xl font-light text-white'>
						Информация <span className=''>для </span> клиента
					</p>

					<p className='font-light text-white text-sm'>
						Выкупаем неисправную технику или заменяем на восстановленную.
					</p>
					<p className='font-light text-white text-sm'>
						В случае длительного ремонта, предоставляем технику на время ремонта.
					</p>
				</div>
			</div>
		</section>
	)
}
