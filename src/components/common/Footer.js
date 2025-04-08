import Image from 'next/image'
import UsFlag from '../../assets/us.svg'
import Insta from '../../assets/insta.png'
import Linkedin from '../../assets/linkedin.png'
import Gpay from '../../assets/gpay.png'
import Visa from '../../assets/visa.png'
import Paypal from '../../assets/paypal.png'
import Amex from '../../assets/amex.png'
import ApplePay from '../../assets/applePay.png'
import Opay from '../../assets/oPay.png'
import DownArrow from '../../assets/downArrow.svg'

export const Footer = () => {

    return (
        <section className="container footer">
            <div className='first-row'>
                <div className='subscribe-box'>
                    <p>BE THE FIRST TO KNOW</p> <br />
                    <span>Sign up for updates from metta muse.</span>

                    <div>
                        <input type="email"
                            placeholder='Enter your e-mail...'
                        />

                        <button>
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

                <hr className='divider' />

                <div className='contact-box'>
                    <div>
                        <p>CONTACT US</p> <br />
                        <div className='contact-info'>
                            <span>+44 221 133 5360</span>
                            <span>customercare@mettamuse.com</span>
                        </div>
                    </div>

                    <hr className='divider' />

                    <div>
                        <p>CURRENCY</p>

                        <div>
                            <Image src={UsFlag} alt='US flag' width={20} />
                            • USD
                        </div>
                        <span>Transactions will be completed in Euros and a currency reference is available on hover.</span>
                    </div>
                </div>
            </div>

            <div className='second-row'>

                <div className="dropdown">
                    <input type="checkbox" id="toggle" className="dropdown-toggle mobileOn" />

                    <div className="dropdown-wrapper">
                        <label for="toggle" className="dropdown-label">mettā muse
                            <Image className='mobileOn' src={DownArrow} alt="drop down" width={15} />
                        </label>

                        <div className="dropdown-content">
                            <ul>
                                <li>About Us</li>
                                <li>Stories</li>
                                <li>Artisans</li>
                                <li>Boutiques</li>
                                <li>Contact Us</li>
                                <li>EU Compliances Docs</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="dropdown">
                    <input type="checkbox" id="links" className="dropdown-toggle mobileOn" />

                    <div className="dropdown-wrapper">
                        <label for="links" className="dropdown-label">QUICK LINKS
                            <Image className='mobileOn' src={DownArrow} alt="drop down" width={15} />
                        </label>
                        <div className="dropdown-content">
                            <ul>
                                <li>Orders & Shippling</li>
                                <li>Join/Login as a Seller</li>
                                <li>Payment & Pricing</li>
                                <li>Return & Refunds</li>
                                <li>FAQs</li>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='follow-box'>

                    <div className="dropdown">
                        <input type="checkbox" id="follow" className="dropdown-toggle mobileOn" />

                        <div className="dropdown-wrapper">
                            <label for="follow" className="dropdown-label">FOLLOW US
                                <Image className='mobileOn' src={DownArrow} alt="drop down" width={15} />
                            </label>
                            <div className="dropdown-content">

                                <div className='socials'>
                                    <Image src={Insta} alt="instagram" width={30} />
                                    <Image src={Linkedin} alt="linkedin" width={30} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <p>mettā muse Accepts</p>

                        <div>
                            <Image src={Gpay} alt="gpay" width={50} />
                            <Image src={Visa} alt="visa" width={50} />
                            <Image src={Paypal} alt="paypal" width={50} />
                            <Image src={Amex} alt="amex" width={50} />
                            <Image src={ApplePay} alt="apple pay" width={50} />
                            <Image src={Opay} alt="opay" width={50} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='third-row'>
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </section>
    )
}