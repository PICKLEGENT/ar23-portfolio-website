import { Link } from "react-router-dom"
import { CustomButton } from "."

const Contacts = () => {
    return (
        <section className="bg-primary-black">
            <div className="flex justify-between items-center mx-120 py-100">
                <div className="flex justify-center items-center">
                    <CustomButton title={'romanov.resume@yandex.ru'} href={'mailto:romanov.resume@yandex.ru'} />
                    <div className="mx-50"></div>
                    <CustomButton title={'+ 7 925 200 96 60'} href={'tel:+79252009660'} />
                </div>
                <Link to='/Contact' className="flex justify-center items-center p-4 relative mr-120 text-3xl text-primary-white border border-primary-white rounded-xl">
                    <span>Get in touch</span>
                </Link>
            </div>
        </section>
    )
}

export default Contacts