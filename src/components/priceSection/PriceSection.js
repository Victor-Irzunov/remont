import React from 'react'
import { Image, Collapse } from 'antd'
import img from '../../images/price/4.webp'
import img2 from '../../images/price/6.webp'
import img3 from '../../images/price/8.webp'

const { Panel } = Collapse

export const PriceSection = () => {
	return (
		<section className='py-10 w-full z-10 bg-white min-h-screen mt-20' id='price'>
			<div className='container'>
				<h2 className='text-center uppercase xy:text-2xl font-semibold'>
					Лучшая <span className='text-orange-600'>цена</span>
				</h2>

				<div className='text-center uppercase'>
					<p className='text-[10px] font-light'>
						В 20% случаев, проблема решается по телефону с помощью <span className='font-semibold'>БЕСПЛАТНОЙ</span> консультации.
					</p>
					<p className='text-[10px] font-light'>
						В 96% случаев, мастер производит ремонт на месте в день обращения.
					</p>
				</div>


				<div className='text-center mt-10 py-4 px-1 bg-slate-200'>
					<h3 className='uppercase mb-4'>
						Ремонт холодильника
					</h3>
					<Image src={img} width='40px' preview={false} />
					<p className='mt-3 mb-3 font-light'>
						от 40 руб
					</p>
					<p className='mt-2 text-[10px] font-light mb-1 uppercase'>
						Диагностика неисправности 30р, <br /> в случае ремонта БЕСПЛАТНО
					</p>
					<p className='mt-1 text-xs font-light'>
						Гарантия до 2-х лет
					</p>
					<div className='text-left mt-5'>
						<Collapse accordion size='small'>
							<Panel header={
								<div className='flex justify-between'>
									<span>
										Не холодит
									</span>
									<span>
										от 40 руб
									</span>
								</div>
							}
								key="1"
							>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Не морозит
									</span>
									<span className=''>
										40 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Не включается
									</span>
									<span className=''>
										50 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен терморегулятор
									</span>
									<span className=''>
										40 руб
									</span>
								</div>
							</Panel>
							<Panel header={
								<div className='flex justify-between'>
									<span>
										Не работает компрессор
									</span>
									<span>
										от 40 руб
									</span>
								</div>
							} key="2">
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен датчик температуры
									</span>
									<span className=''>
										40 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправно пусковое реле
									</span>
									<span className=''>
										50 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен терморегулятор
									</span>
									<span className=''>
										60 руб
									</span>
								</div>
							</Panel>
							<Panel header={
								<div className='flex justify-between'>
									<span>
										Не отключается компрессор
									</span>
									<span>
										от 40 руб
									</span>
								</div>
							} key="3">
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Повреждение уплотнителя двери
									</span>
									<span className=''>
										40 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Недостаточно фреона
									</span>
									<span className=''>
										130 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен терморегулятор
									</span>
									<span className=''>
										60 руб
									</span>
								</div>
							</Panel>
							<Panel header={
								<div className='flex justify-between'>
									<span>
										Иней на задней стенке
									</span>
									<span>
										от 45 руб
									</span>
								</div>
							} key="4">
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Повреждение уплотнителя двери
									</span>
									<span className=''>
										45 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Засор капиллярной трубки
									</span>
									<span className=''>
										110 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Промерзание холодоизоляции
									</span>
									<span className=''>
										70 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен терморегулятор
									</span>
									<span className=''>
										60 руб
									</span>
								</div>
							</Panel>
						</Collapse>
					</div>
				</div>



				<div className='text-center mt-10 py-4 px-1 bg-slate-200'>
					<h3 className='uppercase mb-4'>
						Ремонт стиральной машины
					</h3>
					<Image src={img2} width='40px' preview={false} />
					<p className='mt-3 mb-1 font-light'>
						от 30 руб
					</p>
					<p className='mt-2 text-[10px] font-light mb-1 uppercase'>
						Диагностика неисправности бесплатная, <br /> в случае дальнейшего ремонта
					</p>
					<p className='mt-1 text-xs font-light'>
						Гарантия до 2-х лет
					</p>
					<div className='text-left mt-5'>

						<Collapse accordion size='small'>
							<Panel header={
								<div className='flex justify-between'>
									<span>
										Не включается
									</span>
									<span>
										от 30 руб
									</span>
								</div>
							}
								key="1"
							>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен сетевой шнур
									</span>
									<span className=''>
										30 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Повреждение электропроводки
									</span>
									<span className=''>
										40 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправна кнопка включения
									</span>
									<span className=''>
										30 руб
									</span>
								</div>
							</Panel>
							<Panel header={
								<div className='flex justify-between'>
									<span>
										Не набирает воду
									</span>
									<span>
										от 40 руб
									</span>
								</div>
							} key="2">
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Засор в системе подичи воды
									</span>
									<span className=''>
										40 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен клапан подачи воды
									</span>
									<span className=''>
										45 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Не срабатывает блокировка дверцы
									</span>
									<span className=''>
										50 руб
									</span>
								</div>
							</Panel>
							<Panel header={
								<div className='flex justify-between'>
									<span>
										Не сливает воду
									</span>
									<span>
										от 40 руб
									</span>
								</div>
							} key="3">
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Засор в системе слива воды
									</span>
									<span className=''>
										40 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен сливной насос
									</span>
									<span className=''>
										50 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен датчик уровня воды
									</span>
									<span className=''>
										45 руб
									</span>
								</div>
							</Panel>
							<Panel header={
								<div className='flex justify-between'>
									<span>
										Не отжимает бельё
									</span>
									<span>
										от 35 руб
									</span>
								</div>
							} key="4">
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Износ приводного ремня
									</span>
									<span className=''>
										35 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен сливной насос
									</span>
									<span className=''>
										45 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен двигатель
									</span>
									<span className=''>
										55 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен эл. модуль
									</span>
									<span className=''>
										120 руб
									</span>
								</div>
							</Panel>
						</Collapse>
					</div>
				</div>



				<div className='text-center mt-10 py-4 px-1 bg-slate-200'>
					<h3 className='uppercase mb-4'>
						Ремонт посудомоечной машины
					</h3>
					<Image src={img3} width='45px' preview={false} />
					<p className='mt-3 mb-1 font-light'>
						от 35 руб
					</p>
					<p className='mt-2 text-[10px] font-light mb-1 uppercase'>
						Диагностика неисправности бесплатная, <br /> в случае дальнейшего ремонта
					</p>
					<p className='mt-1 text-xs font-light'>
						Гарантия до 2-х лет
					</p>
					<div className='text-left mt-5'>
						<Collapse accordion size='small'>
							<Panel header={
								<div className='flex justify-between'>
									<span>
										Не включается
									</span>
									<span>
										от 35 руб
									</span>
								</div>
							}
								key="1"
							>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен сетевой шнур
									</span>
									<span className=''>
										35 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Повреждение электропроводки
									</span>
									<span className=''>
										45 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправна кнопка включения
									</span>
									<span className=''>
										45 руб
									</span>
								</div>
							</Panel>
							<Panel header={
								<div className='flex justify-between'>
									<span>
										Не греет
									</span>
									<span>
										от 40 руб
									</span>
								</div>
							} key="2">
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен датчик температуры
									</span>
									<span className=''>
										70 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен ТЭН (нагреватель)
									</span>
									<span className=''>
										90 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправна эл. проводка
									</span>
									<span className=''>
										45 руб
									</span>
								</div>
							</Panel>
							<Panel header={
								<div className='flex justify-between'>
									<span>
										Плохо моет посуду
									</span>
									<span>
										от 45 руб
									</span>
								</div>
							} key="3">
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Отсутствие нагрева воды
									</span>
									<span className=''>
										90 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Неисправен отсек моющих средств
									</span>
									<span className=''>
										65 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Засор распылителя воды
									</span>
									<span className=''>
										45 руб
									</span>
								</div>
							</Panel>
							<Panel header={
								<div className='flex justify-between'>
									<span>
										Протекает вода
									</span>
									<span>
										от 65 руб
									</span>
								</div>
							} key="4">
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Повреждение уплотнителя двери
									</span>
									<span className=''>
										65 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Повреждён шланг
									</span>
									<span className=''>
										75 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Повреждение сальника насоса
									</span>
									<span className=''>
										105 руб
									</span>
								</div>
								<div className='flex justify-between text-xs mb-1'>
									<span className=''>
										Провреждены внутренние патрубки
									</span>
									<span className=''>
										65 руб
									</span>
								</div>
							</Panel>
						</Collapse>
					</div>
				</div>
			</div>
		</section>
	)
}
