import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Link to='/' style={{
            marginTop: '60px',
            fontWeight: '600',
            fontSize: '96px',
            color: '#fff',
            textAlign: 'center',
            letterSpacing: '0.1rem',
            textTransform: 'uppercase'
        }}>ar23</Link>
    )
}

export default Header