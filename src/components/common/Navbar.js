import Image from 'next/image'
import Logo from '../../assets/Logo.svg'
import Search from '../../assets/search-normal.svg'
import Heart from '../../assets/heart.svg'
import Shop from '../../assets/shopping-bag.svg'
import Profile from '../../assets/profile.svg'

export const Navbar = () => {
    console.log({ Logo })
    return (
        <nav className="container">
            <div className='first-row'>
                <div>
                    <Image className='link' src={Logo} alt="Logo" width={30} />
                </div>

                <div>
                    <h2>LOGO</h2>
                </div>

                <div>
                    <Image className='link' src={Search} alt="Search" width={20} />
                    <Image className='link' src={Heart} alt="Heart" width={20} />
                    <Image className='link' src={Shop} alt="Shppping" width={20} />
                    <Image className='link' src={Profile} alt="Profile" width={20} />
                </div>
            </div>

            <div className='second-row'>
                <ul>
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
        </nav>
    )
}