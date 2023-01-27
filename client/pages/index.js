import Link from 'next/link';
import { Carousel, Button } from 'antd';
const Home = () => {
  return (
    <div>
      <div>
        {' '}
        <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top py-2'>
          <div className='mx-5'>
            {' '}
            <Link href='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              <p className='navbar-brand m-2'>Your Site Name</p>
            </Link>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <ul className='navbar-nav mx-auto ' style={{paddingLeft: '1000px'}}>
            <li className='nav-item m-2'>
              <Link href='/explore'style={{ textDecoration: 'none', color: 'inherit' }}>
                <p className='nav-link text-decoration-none'>Explore</p>
              </Link>
            </li>

            <li className='nav-item m-2'>
               <Link href='/login' style={{ textDecoration: 'none', color: 'inherit' }}>
               <p className='nav-link text-decoration-none'>Sign In</p>
                </Link>
            </li>

            <li className='nav-item m-2 mt-2'>
            <Link href='/signup' style={{ textDecoration: 'none', color: 'inherit' }}>
                <button
                  className='btn btn-outline-primary mx-3 h1'
                  type='button'>
                  Join
                </button>
                </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className='home-page h-100 w-100 text-light'
        style={{ background: 'linear-gradient(#040226, #040226)' }}>
        <div className='container h-100'>
          <div className='row h-100 align-items-center'>
            <div className='col-md-12 text-center'>
              <Carousel className='text-light'>
                <div>
                  <img
                    className='d-block w-100'
                    src=''
                    
                    alt='job 1'
                  />
                  <p className='carousel-caption'>Job Title 1</p>
                  <p className='carousel-caption'>Job Description 1</p>
                </div>
                <div>
                  <img
                    className='d-block w-100'
                    style={{width: '180px', height: '50px'}}
                    src='path/to/job2.jpg'
                    alt='job 2'
                  />
                  <p className='carousel-caption'>Job Title 2</p>
                  <p className='carousel-caption'>Job Description 2</p>
                </div>
                <div>
                  <img
                    className='d-block w-100'
                    style={{width: '180px', height: '50px'}}
                    src='path/to/job3.jpg'
                    alt='job 3'
                  />
                  <p className='carousel-caption'>Job Title 3</p>
                  <p className='carousel-caption'>Job  3</p>
                </div>
              </Carousel>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
