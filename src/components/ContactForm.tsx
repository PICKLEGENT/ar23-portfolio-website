import axios from "axios"
import { useState } from "react"
import CustomButton from "./CustomButton"

const ContactForm = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [organization, setOrganization] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()

        const serviceId = 'service_pxzr3ln'
        const templateId = 'template_i87aw9h'
        const publicKey = 'JmpqvafZowogfcMmr'

        const data = {
            service_id: serviceId,
            template_id: templateId,
            user_id: publicKey,
            templateParams: {
                from_name: name,
                from_email: email,
                from_organization: organization,
                message: message,
                to_name: 'Andrew',
            },
        }

        try {
            const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
            console.log(response.data);
            setName('');
            setEmail('');
            setOrganization('');
            setMessage('');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li className="mt-12 flex justify-start items-start">
                    <p className="mr-12 text-2xl text-purple-800 dark:text-yellow-400">0001</p>
                    <div className='w-[501px]'>
                        <label htmlFor='user-name' className="block text-2xl text-purple-800 dark:text-yellow-400">What's your name?</label>
                        <input
                            type="text"
                            name="user-name"
                            id="user-name"
                            placeholder="John Doe"
                            autoComplete="given-name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-5 pb-2 w-full text-xl text-zinc-900 dark:text-neutral-100 border-b border-neutral-500 bg-neutral-100 dark:bg-zinc-900"
                        />
                    </div>
                </li>
                <li className="mt-12 flex justify-start items-start">
                    <p className="mr-12 text-2xl text-purple-800 dark:text-yellow-400">0010</p>
                    <div className='w-[501px]'>
                        <label htmlFor='user-email' className="block text-2xl text-purple-800 dark:text-yellow-400">What's your email?</label>
                        <input
                            type="email"
                            name="user-email"
                            id="user-email"
                            placeholder="john@doe.com"
                            autoComplete="on"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-5 pb-2 w-full text-xl text-zinc-900 dark:text-neutral-100 border-b border-neutral-500 bg-neutral-100 dark:bg-zinc-900"
                        />
                    </div>
                </li>
                <li className="mt-12 flex justify-start items-start">
                    <p className="mr-12 text-2xl text-purple-800 dark:text-yellow-400">0011</p>
                    <div className='w-[501px]'>
                        <label htmlFor='user-organization' className="block text-2xl text-purple-800 dark:text-yellow-400">What's the name of your organization?</label>
                        <input
                            type="text"
                            name="user-organization"
                            id="user-organization"
                            placeholder="John & Doe"
                            autoComplete="none"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            className="mt-5 pb-2 w-full text-xl text-zinc-900 dark:text-neutral-100 border-b border-neutral-500 bg-neutral-100 dark:bg-zinc-900"
                        />
                    </div>
                </li>
                <li className="mt-12 flex justify-start items-start">
                    <p className="mr-12 text-2xl text-purple-800 dark:text-yellow-400">0100</p>
                    <div className='w-[501px]'>
                        <label htmlFor="message" className="block text-2xl text-purple-800 dark:text-yellow-400">Your message</label>
                        <textarea
                            name="message"
                            id="message"
                            cols={48}
                            rows={5}
                            placeholder="Hello Andrew..."
                            autoComplete="none"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="mt-5 pb-2 text-xl text-zinc-900 dark:text-neutral-100 border-b border-neutral-500 bg-neutral-100 dark:bg-zinc-900 resize-none"
                        >
                        </textarea>
                    </div>
                </li>
            </ul>
            <div className="flex justify-center items-center mt-12">
                <CustomButton type={'submit'} title="Send" />
            </div>
        </form>
    )
}

export default ContactForm