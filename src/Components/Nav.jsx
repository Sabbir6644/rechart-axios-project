import PropTypes from 'prop-types';


Nav.propTypes = {
     route: PropTypes.object
};

function Nav({route}) {
     return (
          <div>
              
               <ul>
                    <li><a href={route.path}>{route.name}</a></li>
               </ul>
              
          </div>
     );
}

export default Nav;