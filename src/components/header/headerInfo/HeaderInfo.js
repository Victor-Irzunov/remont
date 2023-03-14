import React, { useState } from 'react'
import { Image, Button, Affix } from 'antd'
// import logo from '../../../images/logo/logo1.png'
import telegram from '../../../images/social-icon/telegram.svg'
import viber from '../../../images/social-icon/viber.svg'
import whatsapp from '../../../images/social-icon/WhatsApp.svg'
import { ClockCircleOutlined, PhoneOutlined, ShakeOutlined } from '@ant-design/icons'
import { useScreens } from '../../../Constants/constants'
import { DrawerComp } from '../../drawer/DrawerComp'
import logo4 from '../../../images/logo/24_7_1.svg'
import logo from '../../../images/logo/1.svg'
import logo2 from '../../../images/logo/fridge.svg'
import logo3 from '../../../images/logo/washing-machine.svg'
import { DrawerCompForms } from '../../drawer/DrawerCompForms'

export const HeaderInfo = ({ setIsVisible }) => {
	const screens = useScreens()
	const [open, setOpen] = useState(false)

	const showDrawer = () => {
		setOpen(true)
	}
	return (
		<>
			{
				screens.lg
					?
					<div className='bg-white'>
						<div className='container flex justify-between items-center'>
							<div className='flex justify-start items-center'>
								{/* <Image src={logo} preview={false} width='80px' /> */}
								<div className='flex items-center'>
									<div className='flex flex-col items-start text-orange-600'>
										<span className='uppercase' >
											ремонт
										</span>
										<span className='uppercase text-2xl font-semibold leading-none'>
											бытовой
										</span>
										<div className='flex justify-between items-center w-full'>
											<span className='text-xs'>
												техники

											</span>
											<Image src={logo} preview={false} width='15px' />
											<Image src={logo2} preview={false} width='15px' />
											<Image src={logo3} preview={false} width='15px' />
										</div>
									</div>
								</div>
							</div>


							<div className='flex text-xl items-center text-[#f8862e]'>
								<ClockCircleOutlined />
								<span className='uppercase ml-2 font-semibold mr-0.5'>контакт центр 24</span>
								<span>/</span>
								<span className='uppercase ml-0.5 font-semibold'>7</span>
							</div>


							<div className=''>
								{/* <div className='flex text-lg'>
									<PhoneOutlined className='rotate-90 mr-3 text-2xl text-[#fb923c]' />
									<div className='flex items-end'>
										<a href='tel:8029' className='text-2xl text-gray-600'>+375 29 000-00-00 </a>
										<span className='ml-1.5 font-extralight text-[#fb923c]'>велком</span>
									</div>
								</div> */}
								<div className='flex text-lg text-[#f8862e]'>
									<PhoneOutlined className='rotate-90 mr-3 text-2xl text-[#fb923c]' />
									<div className='flex items-end'>
										<a href='tel:8029' className='text-2xl'>+375 29 000-00-00</a>
										<span className='ml-1.5 font-extralight text-[#fb923c]'>A1</span>
									</div>
								</div>
							</div>

							<div className='flex flex-col items-center'>
								<p className='text-sm text-[#f8862e] mb-1'>Напишите нам</p>
								<div>
									<a href={`${screens.md ? 'https://t.me/Alex150685' : 'https://t.me/@Alex150685'}`}><Image src={telegram} preview={false} style={{ width: '30px' }} /></a>
									<a href='http://wa.me/37529?text=нужен%ремонт%20'><Image src={whatsapp} preview={false} style={{ width: '30px', marginLeft: '8px' }} /></a>
									{/* <a href='https://www.instagram.com/santexnika.by' target='_blank' >
										<Image src={instagram} preview={false} width='25px' />
									</a> */}
									<a href='viber://chat?number=%2B375'><Image src={viber} preview={false} style={{ width: '30px', marginLeft: '8px' }} /></a>
								</div>
							</div>
						</div>
					</div>
					:
					<div className='flex flex-col justify-between items-center pt-20 relative z-10 bg-gray-800/60'>

						<div className='flex items-center text-xs mb-2'>
							<Image src={logo4} preview={false} width='20px' />
							<span className='uppercase ml-2 mr-0.5 text-white'>контакт центр 24</span>
							<span className='text-white'>/</span>
							<span className='uppercase ml-0.5 font-semibold text-white'>7</span>
						</div>

						<div className='flex flex-col text-sm items-center text-[#f8862e]'>
							<div>
								<ClockCircleOutlined />
								<span className='uppercase ml-1 mr-1'>выезд мастера</span>
							</div>
							<div className='pl-3'>
								<span className='tracking-widest'>09:00-22:00</span>
								<span className='uppercase ml-0.5 text-[10px]'>пн-вс</span>
							</div>
						</div>

						<div className='mt-2 mb-2'>
							<div className='text-lg text-white'>
								<div className='flex items-end pl-7'>
									<a href='tel:8029' className='text-2xl'>+375 29 000-00-00</a>
									<span className='ml-1 font-extralight text-[15px]'>A1</span>
								</div>
								<div className='flex items-end pl-7'>
									<a href='tel:8029' className='text-2xl'>+375 29 000-00-00</a>
									<span className='ml-1 font-extralight text-[15px]'>мтс</span>
								</div>
							</div>
						</div>

						<div className='flex flex-col items-center mb-2'>
							<p className='text-sm text-[#f8862e] mb-2 uppercase' onClick={() => showDrawer('top', 'Заказать звонок')}><ShakeOutlined /> Заказать звонок</p>
							<div className='z-20'>

								<a href={`${screens.md ? 'https://t.me/Alex150685' : 'https://t.me/@Alex150685'}`}><Image src={telegram} preview={false} style={{ width: '30px' }} /></a>
								<a href='https://wa.me/37529?text=нужен%ремонт%20'><Image src={whatsapp} preview={false} style={{ width: '30px', marginLeft: '1.5em' }} /></a>
								<a href='viber://chat?number=%2B375'><Image src={viber} preview={false} style={{ width: '30px', marginLeft: '1.5em' }} /></a>
							</div>
						</div>
						<Affix offsetTop={30} onChange={() => setIsVisible(i => !i)}><div></div></Affix>
					</div>
			}
			<DrawerCompForms open={open} placement={'top'} title={'Заказать звонок'} setOpen={setOpen} isActiveForm={{ tel: true }} />
		</>
	)
}
