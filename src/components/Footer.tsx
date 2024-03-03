const Footer = () => {
    return (
        <footer className="bg-primary-black">
            <section className="mx-120 pb-60">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start my-60">
                        <div>
                            <p className="mb-25 uppercase font-bold text-primary-grey">version</p>
                            <p className="font-light text-2xl text-primary-white">2024 Edition</p>
                        </div>
                        <div className="mx-100">
                            <p className="mb-25 uppercase font-bold text-primary-grey">local time</p>
                            <p className="font-light text-2xl text-primary-white">12:40 PM</p>
                        </div>
                    </div>
                    <div>
                        <p className="mb-25 uppercase font-bold text-primary-grey">socials</p>
                        <a href='https://vk.com/s_k_i_b_i_d_i' target="_blank" className="font-light text-2xl text-primary-white">VK</a>
                        <a href='https://github.com/PICKLEGENT' className="mx-50 font-light text-2xl text-primary-white">GitHub</a>
                        <a href='https://www.instagram.com/picklegent?igsh=Ymt3N3o5dWpnYm5u&utm_source=qr' className="font-light text-2xl text-primary-white">Instagram</a>
                    </div>
                </div>
                <p className="text-center font-light text-xl text-primary-grey leading-relaxed">Designed by<br /> Andrew Romanov</p>
            </section>
        </footer>
    )
}

export default Footer