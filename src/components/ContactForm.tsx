import axios from "axios"
import { useState } from "react"
import CustomButton from "./CustomButton"
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation()

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
                    <p className="mr-6 lg:mr-12 text-xl lg:text-2xl text-purple-800 dark:text-yellow-400">0001</p>
                    <div>
                        <label
                            htmlFor='user-name'
                            className="block text-2xl lg:text-4xl text-purple-800 dark:text-yellow-400"
                        >
                            {t('contactLabel_1')}
                        </label>
                        <input
                            type="text"
                            name="user-name"
                            id="user-name"
                            placeholder={t('contactPlaceholder_1')}
                            autoComplete="none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-6 lg:mt-12 pb-2 w-full text-xl lg:text-2xl text-zinc-900 dark:text-neutral-100 border-b border-neutral-500 bg-neutral-100 dark:bg-zinc-900 focus:border-purple-800 focus:dark:border-yellow-400 duration-300 ease-in"
                        />
                    </div>
                </li>
                <li className="mt-12 flex justify-start items-start">
                    <p className="mr-6 lg:mr-12 text-xl lg:text-2xl text-purple-800 dark:text-yellow-400">0010</p>
                    <div>
                        <label htmlFor='user-email' className="block text-xl lg:text-2xl lg:text-4xl text-purple-800 dark:text-yellow-400">{t('contactLabel_2')}</label>
                        <input
                            type="email"
                            name="user-email"
                            id="user-email"
                            placeholder={t('contactPlaceholder_2')}
                            autoComplete="none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-6 lg:mt-12 pb-2 w-full text-xl lg:text-2xl text-zinc-900 dark:text-neutral-100 border-b border-neutral-500 bg-neutral-100 dark:bg-zinc-900 focus:border-purple-800 focus:dark:border-yellow-400 duration-300 ease-in"
                        />
                    </div>
                </li>
                <li className="mt-12 flex justify-start items-start">
                    <p className="mr-6 lg:mr-12 text-xl lg:text-2xl text-purple-800 dark:text-yellow-400">0011</p>
                    <div>
                        <label htmlFor='user-organization' className="block text-2xl lg:text-4xl text-purple-800 dark:text-yellow-400">{t('contactLabel_3')}</label>
                        <input
                            type="text"
                            name="user-organization"
                            id="user-organization"
                            placeholder={t('contactPlaceholder_3')}
                            autoComplete="none"
                            value={organization}
                            onChange={(e) => setOrganization(e.target.value)}
                            className="mt-6 lg:mt-12 pb-2 w-full text-xl lg:text-2xl text-zinc-900 dark:text-neutral-100 border-b border-neutral-500 bg-neutral-100 dark:bg-zinc-900 focus:border-purple-800 focus:dark:border-yellow-400 duration-300 ease-in"
                        />
                    </div>
                </li>
                <li className="mt-12 flex justify-start items-start">
                    <p className="mr-6 lg:mr-12 text-xl lg:text-2xl text-purple-800 dark:text-yellow-400">0100</p>
                    <div>
                        <label htmlFor="message" className="block text-2xl lg:text-4xl text-purple-800 dark:text-yellow-400">{t('contactLabel_4')}</label>
                        <textarea
                            name="message"
                            id="message"
                            cols={50}
                            rows={5}
                            placeholder={t('contactPlaceholder_4')}
                            autoComplete="none"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="mt-6 lg:mt-12 pb-2 text-xl lg:text-2xl text4-zinc-900 dark:text-neutral-100 border-b border-neutral-500 bg-neutral-100 dark:bg-zinc-900 focus:border-purple-800 focus:dark:border-yellow-400 duration-300 ease-in resize-none"
                        >
                        </textarea>
                    </div>
                </li>
            </ul>
            <div className="flex justify-center items-center mt-12 lg:mt-24">
                <CustomButton type={'submit'} title={t('contactButton')} />
            </div>
        </form>
    )
}

export default ContactForm