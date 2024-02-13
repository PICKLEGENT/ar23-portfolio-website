import { CustomHeading } from "."

const Greeting = () => {
    return (
        <>
            <section className="mx-120 text-primary-white">
                <CustomHeading title={'Hi!'} />
                <p className="text-5xl tracking-wider leading-snug">I'm Andrew,<br />web developer</p>
                <h3 className="mt-8 text-6xl tracking-wider">Front-end Developer</h3>
            </section>
        </>
    )
}

export default Greeting