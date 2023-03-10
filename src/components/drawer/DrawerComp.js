import React from 'react'
import { Drawer } from 'antd'
import { FormTel } from '../form/FormTel';
import { FormDate } from '../form/FormDate';
import { MenuMobil } from '../header/mobilMenu/MenuMobil';

export const DrawerComp = ({ open, placement, setOpen, isActiveForm, title }) => {
	const onClose = () => {
		setOpen(false)
	}


	return (
		<Drawer
			title={<span className='text-white'>
				{title}
			</span>}
			placement={placement}
			onClose={onClose}
			open={open}
			key={placement}
			className='drawer'
		>
			{/* {
				isActiveForm.tel && <FormTel />
			}
			{
				isActiveForm.date && <FormDate />
			} */}
			{
				isActiveForm.menu && <MenuMobil onClose={onClose} />
			}
		</Drawer>
	)
}
