import logo from '../images/logo.png'

const Header = () => {
  return (
    <header>
      <div className="fixed z-20 w-full pt-5 pb-8 flex justify-center bg-white/90 dark:bg-gray-900/80 backdrop-blur navbar shadow-2xl shadow-gray-600/5 border-b border-gray-800 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
        <img className='h-10' src={logo} alt='logo' />
      </div>
    </header>
  )
}

export default Header