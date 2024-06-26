import Button from '@/components/Button'
import { userQueryOptions } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { Link, useLocation } from '@tanstack/react-router'
import { useState } from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'
import { devcode } from '../assets'
import MenuSvg from '../assets/svg/MenuSvg'
import { navigationHome } from '../constants'
import { HamburgerMenu } from './design/Header'



function HeaderHome() {
  const pathname = useLocation()
  const [openNavigation, setOpenNavigation] = useState(false)
  const location = useLocation()
  const paths = ['/login', '/signup']
  const { data } = useQuery(userQueryOptions)


  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }

  const handleClick = () => {
    if (!openNavigation) return

    enablePageScroll()
    setOpenNavigation(false)
  }


  return (

    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
        }`}
    >
      <div className='flex items-center justify-between px-5 min-h-24 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <Link className='block w-[12rem] xl:mr-8' to='/jobs'>
          <img src={devcode} width={190} height={40} alt='devcode' />
        </Link>
        {paths.includes(location.pathname) ? null : (
          <nav
            className={`${openNavigation ? 'flex' : 'hidden'
              } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row'>
              {navigationHome.map(item => (
                <Link
                  key={item.id}
                  to={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? 'lg:hidden' : ''
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathname.hash
                      ? 'z-2 lg:text-n-1'
                      : 'lg:text-n-1/50'
                    } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <HamburgerMenu />
          </nav>
        )}
        <div className='flex items-center'>

          {data?.user ? (
            <Button className='hidden lg:flex ml-4' href='/api/logout' white>
              Cerrar sesión
            </Button>
          ) : (<>
            <a className='hidden lg:flex' href='/api/register'>
              Crear cuenta
            </a>
            <Button className='hidden lg:flex ml-4' href='/api/login' white>
              Empezar
            </Button>
          </>
          )}

          <Button
            className='ml-auto lg:hidden'
            px='px-3'
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  )
}
export default HeaderHome
