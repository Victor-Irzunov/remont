import './App.css'
import 'antd/dist/reset.css'
import {Header} from './components/header/Header'
import { ConfigProvider, FloatButton } from 'antd'
import locale from 'antd/es/locale/ru_RU'
import { motion, useScroll } from "framer-motion"
import { MainPage } from './pages/MainPage'

function App() {
  const { scrollYProgress } = useScroll()
  return (
    <ConfigProvider
      locale={locale}
      theme={{
        token: {
          colorPrimary: '#ea580c',
        },
      }}
    >

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className='app'>
        <Header />
        <MainPage />
      </div>

      <FloatButton.BackTop />
    </ConfigProvider>
  )
}

export default App
