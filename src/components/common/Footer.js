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
                            Subscribe
                        </button>
                    </div>
                </div>

                <div className='contact-box'>
                    <div>
                        <p>CONTACT US</p> <br />
                        <span>+44 221 133 5360</span> <br />
                        <span>customercare@mettamuse.com</span> <br />
                    </div>

                    <div>
                        <p>Currency</p>

                        <div>
                            <Image src={UsFlag} alt='US flag' width={20} />
                            • USD
                        </div>
                        <span>Transactions will be completed in Euros and a currency reference is available on hover.</span>
                    </div>
                </div>
            </div>

            <div className='second-row'>
                <div>
                    <p>mettā muse</p>
                    <ul>
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compliances Docs</li>
                    </ul>
                </div>

                <div>
                    <p>QUICK LINKS</p>
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

                <div className='follow-box'>
                    <p>FOLLOW US</p>

                    <div className='socials'>
                        <Image src={Insta} alt="instagram" width={30} />
                        <Image src={Linkedin} alt="linkedin" width={30} />
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