import BannerAvatar from '/src/assets/images/Banner.png'

const Banner = () => {
    return (
        <section className='flex justify-between items-center mb-100 pb-50'>
            <p className='ml-120 p-2.5  font-light text-5xl text-primary-black leading-relaxed border-2 border-primary-black border-dashed rounded-2xl bg-primary-white shadow-drop'>Hi!<br />I'm Andrew</p>
            <div className='overflow-hidden rounded-full border-2 border-primary-black border-dashed bg-primary-grey shadow-drop'>
                <img src={BannerAvatar} alt="Andrew Romanov" className='h-800' />
            </div>
            <div className='flex justify-between items-center w-300 border-y-2 border-l-2 border-primary-black border-dashed rounded-l-full bg-primary-white z-10 shadow-drop'>
                <div className='w-120 h-120 border-[15px] border-primary-white bg-primary-black rounded-full'></div>
                <p className='mx-auto p-2.5 text-right font-medium text-primary-black text-2xl'>Moscow<br />Russia</p>
            </div>
        </section>
    )
}

export default Banner