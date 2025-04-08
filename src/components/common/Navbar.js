import Image from 'next/image'
import Logo from '../../assets/Logo.svg'
import Search from '../../assets/search-normal.svg'
import Heart from '../../assets/heart.svg'
import Shop from '../../assets/shopping-bag.svg'
import Profile from '../../assets/profile.svg'
import DownArrow from '../../assets/downArrow.svg'
import Hamburger from '../../assets/hamburger.svg'

export const Navbar = () => {
    
    return (
        <nav className="container">
            <div className='first-row'>
                <div>
                    <Image className='link mobileOn' src={Hamburger} alt="Logo" width={30} />
                    <Image className='link' src={Logo} alt="Logo" width={30} />
                </div>

                <div>
                    <h2>LOGO</h2>
                </div>

                <div>
                    <Image className='link' src={Search} alt="Search" width={20} />
                    <Image className='link' src={Heart} alt="Heart" width={20} />
                    <Image className='link' src={Shop} alt="Shppping" width={20} />
                    <Image className='link mobileOff' src={Profile} alt="Profile" width={20} />
                    <div className='mobileOff'>
                        <span className='mobileOff'>ENG</span>
                        <Image className='link mobileOff' src={DownArrow} alt="drop down" width={15} />
                    </div>
                </div>
            </div>

            <div className='second-row'>
                <ul>
                    <li className='mobileOn'>HOME</li>
                    <div className='mobileOn navDivider'/>
                    <li>SHOP</li>
                    <li className='mobileOff'>SKILLS</li>
                    <li className='mobileOff'>STORIES</li>
                    <li className='mobileOff'>ABOUT</li>
                    <li className='mobileOff'>CONTACT US</li>
                </ul>
            </div>
        </nav>
    )
}