import BannerAvatar from '/src/assets/images/Banner.png'

const Banner = () => {
    return (
        <section className='mx-120'>
            <div></div>
            <div className='flex justify-center items-center relative'>
                <p className='absolute bottom-[305px] left-[338px] p-2.5 text-5xl text-primary-white uppercase -rotate-90 border-y border-primary-white'>frontend web developer</p>
                <img src={BannerAvatar} alt="Andrew Romanov" className='h-950' />
                <p className='absolute left- p-2.5 text-5xl text-primary-white uppercase rotate-90 border-y border-primary-white'>portfolio website</p>
            </div>
            <div></div>
        </section>
    )
}

export default Banner