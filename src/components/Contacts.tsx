import { CustomHeading, CustomInput } from "."

const Contacts = () => {
    return (
        <form action="#" className="mx-120">
            <CustomHeading title={'Write to me'} />
            <div className="flex flex-col">
                <CustomInput type={'text'} name={'input-name'} placeholder={'Name'} autocomplete={'given-name'} />
                <CustomInput type={'text'} name={'input-message'} placeholder={'Message'} autocomplete={'off'} />
            </div>
        </form>
    )
}

export default Contacts