import { Link } from "react-router-dom"
import { CustomButton } from "."
import Hexagon from '/src/assets/images/hexagon.svg'

const Contacts = () => {
    return (
        <section className="bg-primary-black">
            <div className="flex justify-between items-center mx-120 py-100">
                <div className="flex justify-center items-center">
                    <CustomButton title={'romanov.resume@yandex.ru'} href={'mailto:romanov.resume@yandex.ru'} />
                    <div className="mx-50"></div>
                    <CustomButton title={'+ 7 925 200 96 60'} href={'tel:+79252009660'} />
                </div>
                <Link to='/Contact' className="flex relative h-250 justify-center text-primary-white overflow-hidden">
                    <img src={Hexagon} alt="hexagon" />
                    <p className="absolute top-[41.5%] text-4xl">Get in touch</p>
                </Link>
            </div>
        </section>
    )
}

export default Contacts