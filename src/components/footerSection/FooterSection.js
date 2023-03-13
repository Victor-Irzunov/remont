import { Button } from 'antd'
import React, { useState } from 'react'
import { DrawerComp } from '../drawer/DrawerComp'
import { DrawerCompForms } from '../drawer/DrawerCompForms'

export const FooterSection = () => {
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
		<section className='pt-12 pb-1 w-full z-10 bg-black/10 relative' id='contact'>
			<div className='container text-center'>
				<div className=''>
					<h2 className='text-xl text-white uppercase tracking-wider'>
						Ремонт<span className='text-orange-500'> бытовой техники</span> в Минске
					</h2>
				</div>
				<div className=''>
					<p className='text-white font-light text-sm'>Наши мастера имеют огромный опыт работы, а это профессиональная диагностика и качественный ремонт любой сложности.</p>
				</div>

				<h3 className='text-white  font-light uppercase'>Заказать услугу можно по телефону</h3>

				<div className='text-orange-500 mb-6 mt-5'>
				<a href='tel:80290000000' className='text-4xl'>+375 29 000-00-00</a>
					{/* <p className=''>
						+375 29 278-08-78
					</p> */}
				</div>

				<div className='text-white'>
					<p className='text-xs uppercase'>
						запишитесь заранее на определённое время и получите скидку<span className='text-orange-500 text-sm'> 15%</span> на ремонт Вашей техники.
					</p>
					<Button
						type='primary'
						className='uppercase'
						onClick={() => showDrawer('right', 'Заказать на дату', 'date')}
					>
						Записаться
					</Button>
				</div>

				<div className="
    w-full 
    flex
    justify-center
    items-center 
    md:flex-row
    flex-col 
    sm:pt-4 
    xy:pt-1 
    border-t-[1px]
    border-t-[#3F3E45]
	 mt-10
    ">
					<p className="
      font-poppins
      font-normal
      text-center
      sm:text-base
      xy:text-[10px]
    text-gray-400/50
		mb-0
      ">
						Copyright Ⓒ 2018-2023. Разработка и продвижение
						<a href="https://vi-tech.by" className="text-cyan-500" target="_blank"> VI:TECH</a>
						. &nbsp; Все права защищены. Информация на сайте не является публичной офертой.
					</p>
				</div>
			</div>
			<DrawerCompForms open={open} placement={placement} title={title} setOpen={setOpen} isActiveForm={isActiveForm} />
		</section>
	)
}
