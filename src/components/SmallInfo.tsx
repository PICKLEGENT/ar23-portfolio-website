import { CustomHeading } from "."
import { listOfSkills } from "../constants"

const SmallInfo = () => {
    return (
        <section className="flex justify-between items-start mx-120">
            <div>
                <CustomHeading title={'Who am I?'} />
                <p className="font-light text-3xl leading-relaxed">I’m front–end developer.<br />I like programming and pizza.</p>
            </div>
            <div>
                <CustomHeading title={'What can I do?'} />
                <div className="font-light text-3xl leading-relaxed">
                    {listOfSkills.map((skill) => (
                        <div key={skill.num} className="flex">
                            {skill.skills.map((item) => (
                                <p key={item} className="mr-25">{item}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SmallInfo