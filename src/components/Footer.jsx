import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section>
      <div className='w-[85%] max-w-[1200px] mx-auto p-12'>
        <div className='font-montserrat text-[0.8rem] md:flex md:justify-evenly'>
          <div>
            <h2 className='font-bold'>General Information</h2>
            <ul className='py-3.5'>
              <li className='mt-2'><Link>About</Link></li>
              <li className='mt-2'><Link>Contact</Link></li>
              <li className='mt-2'><Link>Privacy Policy</Link></li>
              <li className='mt-2'><Link>Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold'>Quick Links</h2>
            <ul className='py-3.5'>
              <li className='mt-2'><Link>Seasonal Produce</Link></li>
              <li className='mt-2'><Link>Weather</Link></li>
            </ul>
          </div>
          <div>
            <h2 className='font-bold'>Stay Connected</h2>
            <ul className='py-3.5'>
              <li className='mt-2'><Link>Social Media</Link></li>
              <li className='mt-2'><Link>Newsletter</Link></li>
              <li className='mt-2'><Link>Join Our Community</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer