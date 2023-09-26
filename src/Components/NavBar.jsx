import { useState } from 'react';
import Nav from './Nav';
import { HiMenuAlt1 } from 'react-icons/hi';

function NavBar() {
  const routes = [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/about', name: 'About' },
    { id: 3, path: '/contact', name: 'Contact' },
    { id: 4, path: '/products', name: 'Products' },
    { id: 5, path: '/products/:id', name: 'ProductDetail' },
  ];
  const [open, setOpen] = useState(false);

  const handleShow = () => {
    setOpen(!open);
  };

  return (
    <div>
      <HiMenuAlt1 onClick={handleShow} className='md:hidden' />
      <div className={`gap-5  ${open ? 'top-5 bg-yellow-500 text-white':'absolute -top-60'} duration-1000 justify-center text-lg font-semibold`}>
          {routes.map((route, index) => (
            <Nav key={index} route={route} />
          ))}
        </div>
     <div  className='hidden  md:flex gap-4 justify-center font-medium text-lg bg-yellow-400'>
     {routes.map((route, index) => (
            <Nav key={index} route={route} />
          ))}
     </div>
    </div>
  );
}

export default NavBar;
