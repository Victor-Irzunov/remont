import React, { useState } from 'react'
import { Button, Popover, Rate, Avatar, Image } from 'antd'
import { ExclamationCircleOutlined, LineOutlined, UserOutlined } from '@ant-design/icons'
import { FormOtzyvy } from '../form/FormOtzyvy'
import img1 from '../../images/portfolio/1.webp'
import img2 from '../../images/portfolio/2.webp'
import img3 from '../../images/portfolio/7.webp'
import img4 from '../../images/portfolio/3.webp'

const content = (
	<div>
		<p>Отзыв будет опубликован только если это отзыв клиента нашей службы и после проверки модератора.</p>
	</div>
)

export const OtzyvySection2 = () => {
	const [add, setAdd] = useState(false)



	return (
		<section className='py-12 w-full z-10 bg-white min-h-[60vh]' id='otzyvy'>
			<div className='container'>
				<div className='text-center mb-12'>
					<h2 className='text-4xl text-orange-500 uppercase'>Наши<span className='text-black'> отзывы</span></h2>
					<LineOutlined style={{ color: '#f8862e', fontSize: '3rem' }} />
				</div>

				<div className=''>
					<div className='border-b pb-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									Т
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Луцевич Татьяна</p>
								<p className='text-xs mb-1'>стиральная машина</p>
								<p className='text-[10px] text-gray-400'>23.08.2019</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src={img1} className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Поломалась стиральная машина, после стирки не открывалась дверца. Муж возился целый день, не сделал, вызвала мастера, пол часа и готово. Я очень довольна, уже думали новую покупать.
							</p>
						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Мария</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за Ваш отзыв.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									А
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Лукашевич Александр</p>
								<p className='text-xs mb-1'>холодильник</p>
								<p className='text-[10px] text-gray-400'>11.04.2020</p>
								<Rate allowHalf defaultValue={4.5} />

							</div>
							<div className='w-1/4'>
								<Image src={img2} className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Пол года сильно гудел холодильник, я его крутил во все стороны, ничего не помогало. Коллега на работе порекомендовал этих ребят, приехал мастер как договаривались. Возился почти час, но сделал, теперь тихо как раньше. Результатом очень доволен. Рекомендую!
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Мария</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за отзыв. Мы делали свою работу.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									C
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Бакун Сергей</p>
								<p className='text-xs mb-1'>холодильник</p>
								<p className='text-[10px] text-gray-400'>10.02.2021</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src={img3} className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Перестал морозить холодильник, нашел в интернете номер, позвонил, приехали быстро. Заправили фреоном, поменяли уплотнитель двери. Стоимостью и работой я доволен. Спасибо.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за отзыв.</p>
							</div>
						</div>
					</div>


					<div className='border-b py-4'>
						<div className='flex'>
							<div className=''>
								<Avatar>
									В
								</Avatar>
							</div>
							<div className='ml-3 w-1/2'>
								<p className='mb-0 text-lg'>Лапо Валентина Петровна</p>
								<p className='text-xs mb-1'>стиральная машина</p>
								<p className='text-[10px] text-gray-400'>24.02.2023</p>
								<Rate allowHalf defaultValue={5} />

							</div>
							<div className='w-1/4'>
								<Image src={img4} className='rounded-sm' />
							</div>
						</div>
						<div className='pl-6 mt-2'>
							<p className='text-left text-sm mt-4'>
								Обратились в фирму, вызвали мастера, по ремонту нашей машинки, с проблемой, не сливала воду.
								Мастер приехал с опозданием на полчаса, но свою работу знает, устранил засор в системе. А в качестве извинения произвел бесплатно плановое обслуживание и дал грамотную консультацию по дальнейшему использованию моей помошницы. Огромное спасибо. Буда Вас рекомендовать.
							</p>

						</div>
						<div className='pl-10 mt-6'>
							<div className='flex'>
								<Avatar icon={<UserOutlined />} size='small' />
								<div className='ml-2'>
									<p className='text-sm mb-0'>Александра</p>
									<p className='text-[10px] text-gray-400'>администратор</p>
								</div>
							</div>
							<div className='pl-8'>
								<p className='text-xs text-gray-500 inline'>Спасибо за отзыв.</p>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-14'>
					<div
						style={{
							marginBottom: 16,
						}}
						className='flex items-center justify-end'
					>

						<Popover content={content} title={<div className='text-center'><ExclamationCircleOutlined className='text-2xl text-orange-500 ml-3' /></div>} trigger="click">
							<ExclamationCircleOutlined className='text-xl mr-5 text-orange-400' />
						</Popover>
						<Button onClick={() => setAdd(true)}>Добавить отзыв</Button>
					</div>
				</div>

				{
					add && <FormOtzyvy setAdd={setAdd} />
				}
			</div>
		</section>
	)
}
