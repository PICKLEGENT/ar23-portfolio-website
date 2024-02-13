import { CustomHeading } from "."

const Skills = () => {
    return (
        <>
            <section className="mx-120">
                <CustomHeading title={'Skills'} />
                <div className="mt-50 w-[40%] text-4xl text-primary-white">
                    <div className="flex justify-between items-center">
                        <p>HTML</p>
                        <p>JavaScript</p>
                        <p>Figma</p>
                    </div>
                    <div className="flex justify-between items-center mt-50">
                        <p>CSS</p>
                        <p>TypeScript</p>
                        <p>React</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills