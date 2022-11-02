import Header from './header'
import Meta from './meta'

export default function Layout({children }) {
  return (
    <>
      <Meta />
      <div className='relative' >
        <Header />
        {children}
      </div>

    </>
  )
}
