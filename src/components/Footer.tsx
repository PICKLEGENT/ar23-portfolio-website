import telegramIcon from '/src/assets/images/Telegram.png'
import gitHubIcon from '/src/assets/images/GitHub.png'
import emailIcon from '/src/assets/images/Email.png'
import vkIcon from '/src/assets/images/VK.png'
import whatsAppIcon from '/src/assets/images/WhatsApp.png'

const Footer = () => {
    return (
        <footer className='mx-120 mt-100 mb-60'>
            <ul className='flex justify-center items-center'>
                <li className='mx-[25px]'>
                    <a href="#"><img src={telegramIcon} alt="Telegram" className='w-50' /></a>
                </li>
                <li className='mx-[25px]'>
                    <a href="#"><img src={gitHubIcon} alt="GitHub" className='w-50' /></a>
                </li>
                <li className='mx-[25px]'>
                    <a href="#"><img src={emailIcon} alt="Email" className='w-50' /></a>
                </li>
                <li className='mx-[25px]'>
                    <a href="#"><img src={vkIcon} alt="VK" className='w-50' /></a>
                </li>
                <li className='mx-[25px]'>
                    <a href="#"><img src={whatsAppIcon} alt="WhatsApp" className='w-50' /></a>
                </li>
            </ul>
            <div className='mt-50 text-center text-primary-grey leading-8'>
                <p>Designed By<br />Andrew Romanov</p>
            </div>
        </footer>
    )
}

export default Footer