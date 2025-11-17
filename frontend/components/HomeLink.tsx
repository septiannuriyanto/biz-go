
import MainLogo from '../assets/images/logo/logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const HomeLink = () => {
  return (
    <div>
      <Link href="/" className="flex items-center space-x-2">
        <div className="flex items-center gap-3">
              <Image
                src={MainLogo}
                alt="Biz-Go Logo" 
                height={28}
                className="object-contain"
                priority  
              />
            </div>
      </Link>
    </div>
  )
}

export default HomeLink
