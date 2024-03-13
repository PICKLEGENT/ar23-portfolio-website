import AvatarPic from '/src/assets/images/Avatar.jpg'

const Avatar = () => {
    return (
        <div className='avatar w-200 h-200 border-2 border-primary-black border-dashed rounded-full overflow-hidden shadow-drop'><img src={AvatarPic} alt="avatar" /></div>
    )
}

export default Avatar