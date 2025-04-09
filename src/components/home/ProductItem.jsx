import Heart from '../../assets/heart.svg'
import Image from 'next/image'

export const ProductItem = ({ image, title, description }) => {
    return (
        <div className='product-item'>
            <Image src={image} alt="product image" width={100} height={100} className='product-image'/>
            <div>
                <p>{ title.length > 30 ? title.slice(0, 30) + "..." : title }</p>
                <div>
                    <span>{ description.length > 40 ? description.slice(0, 40) + "..." : description }</span>
                    <Image src={Heart} alt="Heart" width={23} />
                </div>
            </div>
        </div>
    )
}