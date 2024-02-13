import { CustomHeading } from "."

const About = () => {
    return (
        <section className="my-100 border-y border-primary-white">
            <div className="flex items-center mx-120 my-100 h-600 rounded-3xl border border-primary-white relative">
                <img src="./src/assets/images/pizza.png" alt="pizza" className="absolute top-50 left-60 m-5 w-300" />
                <img src="./src/assets/images/pizza-slice.png" alt="pizza slice" className="absolute top-300 left-500 m-5 w-150" />
                <div className="absolute right-0 m-5 w-700 text-primary-white">
                    <CustomHeading title={'Who am I?'} />
                    <p className="mt-50 text-6xl tracking-wider leading-snug">I’m front–end developer. I like programming and pizza.</p>
                </div>
            </div>
        </section>
    )
}

export default About