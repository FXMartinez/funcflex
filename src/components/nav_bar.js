import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function NavBar() {

    return ( 
        <div className='nav'>
            <p>
                
                <Button 
                    color='black' content='Home' 
                    icon={{ color: 'blue', name: 'like' }}
                    as={ Link }
                    to='/'
                    />
                <Button 
                    color='black' content='Coding' 
                    icon={{ color: 'red', name: 'like' }}
                    as={ Link }
                    to='/Blog'
                />

            </p>
        </div>

    );
}

export default NavBar;