import { CustomButton, CustomHeading, CustomInput } from "."

const Contacts = () => {
    return (
        <><section className="mx-120">
            <CustomHeading title={'Write to me'} />
            <form action="#" className="flex justify-between items-center">
                <div className="flex flex-col">
                    <CustomInput type={'text'} name={'input-name'} placeholder={'Name'} autocomplete={'given-name'} />
                    <CustomInput type={'text'} name={'input-message'} placeholder={'Message'} autocomplete={'off'} />
                </div>
                <CustomButton title={'send'} />
            </form>
        </section>
        </>
    )
}

export default Contacts