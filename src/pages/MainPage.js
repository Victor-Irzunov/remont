import React, { useState } from 'react'
import {
	PercentageOutlined, UsergroupAddOutlined,
	FormOutlined, DollarCircleOutlined,
	GiftOutlined, NotificationOutlined
} from '@ant-design/icons'
import { Button, notification } from 'antd'
import { ModalComp } from '../components/modal/ModalComp'
import { PriceSection } from '../components/priceSection/PriceSection'
import { FotoSlider } from '../components/fotoSliderSection/FotoSlider'
import { OtzyvySection2 } from '../components/otzyvySection/OtzyvySection2'
import { FooterSection } from '../components/footerSection/FooterSection'
import VoprosOtvet from '../components/voprosOtvet/VoprosOtvet'
import { InfoSection } from '../components/infoSection/InfoSection'

export const MainPage = () => {

	const [isModalOpen, setIsModalOpen] = useState(false)
	const [title, setTitle] = useState('')
	const showModal = (title) => {
		setIsModalOpen(true)
		setTitle(title)
	}
	const handleCancel = () => {
		setIsModalOpen(false)
	}
	const [api, contextHolder] = notification.useNotification()
	const openNotificationWithIcon = (type, key) => {
		if (key === 1) {
			api[type](
				{
					message: 'Предоставляем скидку 20%',
					description: (
						<div>
							<ul className='list-disc'>
								<li>
									Пенсионерам
								</li>
								<li>
									Инвалидам
								</li>
								<li>
									Многодетным семьям
								</li>
							</ul>
						</div>
					)
				},
			)
		} else {
			api[type](
				{
					message: 'Акция',
					description: (

						<div className='mt-2'>
							<FormOutlined />
							{' '}Запишитесь заранее и получите скидку 15%
						</div>
					)
				},
			)
		}
	}

	return (
		<>
			<section className='w-full text-center' id='main'>
				{contextHolder}
				<div className='w-full h-screen bg-cover fon bg-center'></div>

				<div className='container z-10 relative flex flex-col justify-between items-center'>
					<div className='pt-10'>
						<h1 className='xy:text-3xl sd:text-7xl font-semibold text-white mb-2 tracking-wide uppercase'>
							Ремонт бытовой техники в Минске
						</h1>
						<span className='text-orange-600 text-lg md:text-4xl tracking-widest'>
							с выездом к клиенту
						</span>
						<p className='text-white uppercase text-[10px] mt-3'>
							выезд в течении часа
						</p>
					</div>

					<div className='w-full mt-10 mb-20'>
						<span
							className='uppercase sd:text-2xl xy:text-sm text-white cursor-pointer border px-3 py-2'
							onClick={() => showModal('Задать вопрос')}
						>
							Задать вопрос
						</span>
					</div>

					<div className='flex xy:justify-between w-full'>
						<div className='flex justify-start items-center text-orange-600 sd:text-lg xy:text-xs xy:mr-1 sd:mr-10'>
							<Button
								icon={<PercentageOutlined className='sd:text-lg xy:text-xs text-white' />}
								type='primary'
								shape="circle"
							/>
							<span
								className='font-light ml-2'
								onClick={() => openNotificationWithIcon('success', 2)}
							>
								Получите скидку 15%
							</span>
						</div>
						<div className='flex justify-start items-center sd:text-lg xy:text-xs text-orange-600'>
							<Button
								icon={<DollarCircleOutlined className='sd:text-lg xy:text-xs text-white' />}
								type='primary'
								shape="circle"
							/>
							<span
								className='font-light ml-2'
								onClick={() => openNotificationWithIcon('success', 1)}
							>
								Скидка 20%
							</span>
						</div>
					</div>

					<div className='mt-20'>
						<p className='text-white text-2xl uppercase'>
							Клиенты наше все!
						</p>
						<div className=''>
							<GiftOutlined className='text-orange-500 text-4xl' />
							<p className='text-white font-light mt-5'>
								Подарки каждому клиенту магнитики и средство для очистки
							</p>
						</div>

					</div>
				</div>



				<ModalComp isModalOpen={isModalOpen} title={title} handleCancel={handleCancel} question={true} />
			</section>
			<PriceSection />
			<InfoSection />

			<FotoSlider />

			<OtzyvySection2 />

			<VoprosOtvet />

			<FooterSection />
		</>
	)
}
