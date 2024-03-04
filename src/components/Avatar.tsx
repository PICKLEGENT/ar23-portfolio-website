import AvatarPic from '/src/assets/images/Avatar.jpg'

const Avatar = () => {
    return (
        <div className='avatar w-200 h-200 rounded-full overflow-hidden'><img src={AvatarPic} alt="avatar" /></div>
    )
}

export default Avatar