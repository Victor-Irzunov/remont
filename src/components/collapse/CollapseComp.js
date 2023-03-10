import React from 'react'
import { Collapse } from 'antd'
import { CommentOutlined } from '@ant-design/icons'
import { useScreens } from '../../Constants/constants'
const { Panel } = Collapse


const data = [
	{
		title: 'Как заказать ремонт в Минске?',
		text: (<div><p>Есть три способа для вызова мастера в Минске:</p>
			<p>– с помощью формы обратной связи</p>
			<p>– по номеру телефона +375 (29) 000-00-00</p>
			<p>– написать в мессенджеры</p>
		</div>),
		id: 1,
	},
	{
		title: 'Если нужен срочный ремонт, а мастера все заняты?',
		text: (<p>В редких случаях наши мастера не приезжают к клиенту в день обращения, но если такое происходит, то пожалуйста сообщите нам, что необходимо срочно и мы постараемся отправить к Вам мастера в ближайшее время. Цена при этом не меняется</p>),
		id: 2,
	},
	{
		title: 'От чего зависит стоимость ремонта?',
		text: (<div><p class="paragraph-174 text _53">Стоимость зависит от:</p><p>– сложности ремонта</p><p>– необходимых для ремонта запчастей</p></div>),
		id: 3,
	},
	{
		title: 'Что необходимо сообщить при заказе ремонта?',
		text: (<p>Какая техника сломалась, что не работает или работает неправильно, адрес куда надо подьехать и время. </p>),
		id: 4,
	},

]


const CollapseComp = () => {
	const screens = useScreens()
	return (
		<Collapse ghost>
			{data.map(el => {
				return (
					<Panel header={<span className=''>{el.title}</span>} key={el.id} >
						<div className={`${screens.xs ? 'pl-2' : 'pl-6'}`}>
							<span className=''>{el.text}</span>
						</div>
					</Panel>
				)
			})}
		</Collapse>
	)
}
export default CollapseComp