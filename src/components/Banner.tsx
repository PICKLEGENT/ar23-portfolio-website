import BannerAvatar from '/src/assets/images/Banner.png'

const Banner = () => {
    return (
        <section className='flex justify-between items-center pb-100 bg-primary-white'>
            <p className='ml-120 font-light text-5xl text-primary-black leading-relaxed'>Hi!<br />I'm Andrew</p>
            <div className='overflow-hidden rounded-full bg-primary-grey'>
                <img src={BannerAvatar} alt="Andrew Romanov" className='h-800' />
            </div>
            <div className='flex justify-between items-center w-350 rounded-l-full bg-primary-grey z-10'>
                <div className='w-120 h-120 border-8 border-primary-grey bg-primary-white rounded-full'></div>
                <p className='mx-auto p-2.5 text-center font-light text-primary-white text-2xl'>Moscow<br /> Russia</p>
            </div>
        </section>
    )
}

export default Banner