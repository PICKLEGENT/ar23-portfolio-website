import { CustomHeading, ProjectCard } from "."

const Portfolio = () => {
    return (
        <section className="mx-120 my-100">
            <CustomHeading title={'Portfolio'} />
            <div className="border-t border-primary-white"></div>
            <ProjectCard projectName={'Alumina'} projectRole={'Design & Development'} />
        </section>
    )
}

export default Portfolio