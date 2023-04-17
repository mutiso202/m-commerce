import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/SideBar'
import '@/styles/globals.css'

import type { AppProps } from 'next/app'
import LayoutTrial from './navbar/LayoutTrial'

export default function App({ Component, pageProps }: AppProps) {

  return(
  <>
  <Sidebar />
  <main className="py-10 lg:pl-72 bg-gray-900">
    <LayoutTrial>
    <Component {...pageProps} />
    </LayoutTrial>
  
  </main>
  
  </>
  )
  
  
}
