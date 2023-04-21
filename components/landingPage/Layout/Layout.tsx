import React, { useState ,ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Styles from './Layout.module.scss' 

import Logo from 'assets/logo/logo-2.png'
import favicon from 'assets/hero/heroImage-1.svg'
import SearchBar from 'components/landingPage/SearchBar/SearchBar'

import { UilBars, UilTimes  } from '@iconscout/react-unicons'

 
type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {

  const [clicked, setClicked] = useState(false)

  return(
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={favicon.src} />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"  /> 
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
   
    <header className={Styles.header}>

        <div className={Styles.imgHolder} >
          <Link href="/">
            <Image src={Logo} alt='Logo' 
              className={Styles.logoImage}
            />
          </Link>
        </div> 

        <div className={Styles.infoHolder} >
          <SearchBar rightPadding={5} setClicked={setClicked}/>

          <div className={Styles.navators}>
            <Link href="/compare">Compare</Link>
            <Link href="/discuss">Discuss</Link>
            <Link href="/suggestion">Suggestion</Link>
          </div>
        </div>

        <div onClick={() => setClicked(prev => !prev) }  className={Styles.iconHolder} >
          { clicked ? <UilTimes /> : <UilBars /> }
        </div>

        {
          clicked ? 
          <div className={Styles.infoHolderForMobile} >
            <div onClick={() => setClicked(prev => !prev) }  className={Styles.icon} >
              { clicked ? <UilTimes /> : <UilBars /> }
            </div>
            <div className={Styles.mobileMenuHolder} >
              <SearchBar rightPadding={2} setClicked={setClicked} />

              <p>
                Travel Table is place where you can find everything you need to start your travel. 
                More over you can use this website to learn about any city location, its currency, corona condition, population,
                average cost, internet speed and everything.
              </p>

              <div className={Styles.mobileMenu}>
                <Link href="/compare">Compare</Link>
                <Link href="/discuss">Discuss</Link>
                <Link href="/suggestion">Suggestion</Link>
              </div>
            </div>
        </div> : null
        }

    </header>

    {children}

      <footer className={Styles.footer}>
          <div>
            <Link href="/">
              <Image src={Logo} alt='Logo' 
                className={Styles.logoImage}
              />
            </Link>
                <div className={Styles.footerCopyright}>All Rights Reserved  
                  <a href="https://www.facebook.com/rakib.nazrulislam/"> @Rakib </a>
                  The Developer
                </div>
          </div>

          <div>
            <div className={Styles.footerMenu}>
              <Link href="/compare">Compare</Link>
              <Link href="/discuss">Discuss</Link>
              <Link href="/suggestion">Suggestion</Link>
            </div>
          </div>

          <div>
            <div className={Styles.footerInput}>
              <p> Stay Connected With Us! </p>
              <input type="text" name="" id="" placeholder='Enter Your Email...' />
              <p className={Styles.subsBtn}> Subscribe </p>
            </div>
          </div>
      </footer>
    </div>
  )
}

export default Layout


// <Link href="/">Home</Link>