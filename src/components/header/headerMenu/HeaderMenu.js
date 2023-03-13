import React, { useState } from 'react'
import { useScreens } from '../../../Constants/constants'
import { Affix, Button, Image } from 'antd'
import { motion, AnimatePresence } from "framer-motion"
import { ShakeOutlined, CalendarOutlined, MenuOutlined } from '@ant-design/icons'
import { DrawerComp } from '../../drawer/DrawerComp'
import logo from '../../../images/logo/1.svg'
import logo2 from '../../../images/logo/fridge.svg'
import logo3 from '../../../images/logo/washing-machine.svg'

import { Link as LinkScroll } from 'react-scroll'
import { DrawerCompForms } from '../../drawer/DrawerCompForms'

export const HeaderMenu = ({ isVisible }) => {
	const [isAffix, setIsAffix] = useState(false)
	const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')
	const [isActiveForm, setIsActiveForm] = useState({
		tel: false,
		date: false,
		menu: false,
	})
	const screens = useScreens()

	const [open, setOpen] = useState(false)
	const [openForm, setOpenForm] = useState(false)

	const showDrawer = (position, title, str) => {
		setOpen(true)
		setPlacement(position)
		setTitle(title)
		switch (str) {
			case 'tel': setIsActiveForm(prev => ({ ...prev, tel: true, date: false, menu: false }))
				break
			case 'date': setIsActiveForm(prev => ({ ...prev, tel: false, date: true, menu: false }))
				break
			case 'menu': setIsActiveForm(prev => ({ ...prev, tel: false, date: false, menu: true }))
				break
		}
	}

	const showDrawerForm = (position, title, str) => {
		setOpenForm(true)
		setPlacement(position)
		setTitle(title)
		switch (str) {
			case 'tel': setIsActiveForm(prev => ({ ...prev, tel: true, date: false, menu: false }))
				break
			case 'date': setIsActiveForm(prev => ({ ...prev, tel: false, date: true, menu: false }))
				break
			case 'menu': setIsActiveForm(prev => ({ ...prev, tel: false, date: false, menu: true }))
				break
		}
	}

	return (
		<div className=''>
			{
				screens.lg ?
					<Affix
						offsetTop={0}
						className='z-50'
					// onChange={(affixed) => setIsAffix(affixed)}
					>
						<div
							className={isAffix ? 'relative pt-2 pb-2 bg-[#313846]' : `relative pt-5 pb-5 bg-[#313846]`}
						>
							<div className='container'>
								<nav>
									<ul className='flex justify-between items-center text-lg text-[#f8862e] cursor-pointer z-50'>
										<li><LinkScroll to='main'
											smooth={true}
											offset={-100}
											duration={800}
											className="cursor-pointer"
										>
											Главная
										</LinkScroll></li>
									
										<li>
											<LinkScroll to='price'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
											>
												Цены
											</LinkScroll>
										</li>
										<li>
											<LinkScroll to='galereya'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
											>
												Галерея
											</LinkScroll>
										</li>
										
										<li>
											<LinkScroll to='otzyvy'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
											>
												Отзывы
											</LinkScroll>
										</li>
										<li>
											<LinkScroll to='vopros'
											smooth={true}
											offset={-100}
											duration={800}
											className="cursor-pointer"
										>
											Вопросы
										</LinkScroll>
										</li>
										<li>
											<LinkScroll to='contact'
												smooth={true}
												offset={-100}
												duration={800}
												className="cursor-pointer"
											>
												Контакты
											</LinkScroll>
										</li>
										<li className='ml-48'>
										</li>
										<li>
											<Button type='primary' onClick={() => showDrawerForm('top', 'Заказать звонок', 'tel')}>
												<ShakeOutlined /> Заказать звонок
											</Button>
										</li>
										<li>
											<Button type='primary' onClick={() => showDrawerForm('right', 'Заказать на дату', 'date')}>
												<CalendarOutlined /> Заказать на дату
											</Button>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</Affix>
					:
					<>
						<AnimatePresence>
							{!isVisible && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className={`pt-1 pb-1 px-5 bg-slate-800 shadow-xl fixed top-0 left-0 right-0 z-10`}
								>
									<div className='flex items-center'>
										<div className='flex flex-col items-start text-orange-500'>
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


								</motion.div>
							)}
						</AnimatePresence>

						<div className='fixed top-2 right-2 p-3 border z-50'>
							<MenuOutlined
								className='text-4xl text-orange-600'
								onClick={() => showDrawer('right', 'Меню', 'menu')}
							/>
						</div>
					</>
			}
			<DrawerComp open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
			<DrawerCompForms open={openForm} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</div>
	)
}
