import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h3 className='text-rose-500 text-2xl'>Helloooo airbnb clone!</h3>
    </div>
  )
}
