
import Link from "next/link"
import Image from "next/image"

export const Header = () => {
    return (
        <header>
            <div>
                <div className='topNav'>
                    <Image alt='my logo' src={'/images/storeimage.png'} width={88} height={32}/>
                    <nav>
                        <ul>
                            <li><Link href="/" passHref>Home</Link></li>
                            <li><Link href="/events" passHref>Events</Link></li>
                            <li><Link href="/about-us" passHref> About Us</Link></li>
                        </ul>
                    </nav>
                </div>
                <h1>Lorem, ipsum dolor sit amet </h1>
            </div>
            
      </header>
    )
}
   


