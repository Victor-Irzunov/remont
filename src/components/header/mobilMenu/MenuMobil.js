import React, { useState } from 'react'
import { Button, Image } from 'antd'
import { motion } from "framer-motion"
import { Link as LinkScroll } from 'react-scroll'
import { PhoneOutlined, ShakeOutlined, CalendarOutlined } from '@ant-design/icons'
import { DrawerComp } from '../../drawer/DrawerComp'
import { DrawerCompForms } from '../../drawer/DrawerCompForms'
// import image from '../../../images/menu/img.webp'

export const MenuMobil = ({ onClose }) => {
	const [open, setOpen] = useState(false)

	const [placement, setPlacement] = useState('')
	const [title, setTitle] = useState('')
	const [isActiveForm, setIsActiveForm] = useState({
		tel: false,
		date: false,
		menu: false,
	})

	const showDrawer = (position, title, str) => {
		setOpen(true)
		setPlacement(position)
		setTitle(title)
		switch (str) {
			case 'tel': setIsActiveForm(prev => ({ ...prev, tel: true, date: false, menu: false }))
				break
			case 'date': setIsActiveForm(prev => ({ ...prev, tel: false, date: true, menu: false }))
				break
		}
	}


	return (
		<div className='h-screen'>
			<nav className='text-center h-screen'>
				<ul className='h-[60vh] flex flex-col justify-between font-light items-start text-lg text-white cursor-pointer'>
					<li>
						<LinkScroll to='main'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
						>
							Главная
						</LinkScroll>
					</li>
					<li>
						<LinkScroll to='price'
							smooth={true}
							offset={-100}
							duration={800}
							className="cursor-pointer"
							onClick={onClose}
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
							onClick={onClose}
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
							onClick={onClose}
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
							onClick={onClose}
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
							onClick={onClose}
						>
							Контакты
						</LinkScroll>
					</li>

					<li className='mt-6'>
						<p
							onClick={() => showDrawer('top', 'Заказать звонок', 'tel')}
							className='text-sm'
						>
							<ShakeOutlined /> <span className='ml-1'>Заказать звонок</span>
						</p>
					</li>
					<li>
						<p
							// type='text'
							onClick={() => showDrawer('right', 'Заказать на дату', 'date')}
							// style={{paddingLeft:'0px' }}
							className='text-sm'
						>
							<CalendarOutlined />  <span className='ml-1'>Заказать на дату</span>
						</p>
					</li>

				</ul>
			</nav>
			<DrawerCompForms open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</div>
	)
}
