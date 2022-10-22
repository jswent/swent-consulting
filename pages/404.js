import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import Link from 'next/link'

const NotFound = () => {
  const hlogo = `/assets/images/logo/Logo-white.svg`
  return (
    <div className='notfound__area'>
      <Layout pageTitle='Swent Consulting | 404 Not Found'>
        <Header
          heroLogo={hlogo}
          headerClass='header__area-2'
          menuClass='main-menu-2'
          sideMenuClass='icon-white'
        />
        <div className='notfound__height hero__pt container d-flex justify-content-center align-items-center'>
          <row className='align-items-center'>
            <div className='notfound__content mt-35'>
              <h2 className='notfound__title'>Not Found</h2>
              <p>The page you&apos;re looking for was not found.</p>
              <Link href='/'>
                <a className='m-btn mt-35'>Return Home</a>
              </Link>
            </div>
          </row>
          <br />
        </div>
      </Layout>
    </div>
  )
}

export default NotFound
