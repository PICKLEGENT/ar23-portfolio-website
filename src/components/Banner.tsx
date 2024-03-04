import BannerAvatar from '/src/assets/images/Banner.png'

const Banner = () => {
    return (
        <section className='flex justify-between items-center mb-100 pb-50 bg-primary-grey'>
            <p className='ml-120 font-light text-5xl text-primary-white leading-relaxed'>Hi!<br />I'm Andrew</p>
            <div className='overflow-hidden rounded-full border-double border-8 border-primary-black bg-primary-grey'>
                <img src={BannerAvatar} alt="Andrew Romanov" className='h-800' />
            </div>
            <div className='flex justify-between items-center w-300 rounded-l-full bg-primary-black z-10'>
                <div className='w-120 h-120 border-[15px] border-primary-black bg-primary-grey rounded-full'></div>
                <p className='mx-auto p-2.5 text-right font-medium text-primary-white text-2xl'>Moscow<br />Russia</p>
            </div>
        </section>
    )
}

export default Banner