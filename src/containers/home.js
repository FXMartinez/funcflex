import { Button } from 'semantic-ui-react';
import React from 'react';

function Home(props) {
    
    return  <div>
                <header className="App-header">
                    We Making Sites Boi!
                    <p>
                        <Button color='black' content='Dope' icon={{ color: 'blue', name: 'like' }} />
                    </p>
                    <p>
                        <Button icon={{ as: 'i', className: 'my-icon' }} />
                    </p>
                </header>
            </div>

    }

export default Home;