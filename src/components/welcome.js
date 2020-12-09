import { Header } from 'semantic-ui-react';

function Welcome() {

    return ( 
        <div className='welcome-message'>

            <Header as='h1' className="ui header"> Welcome to my website! </Header>
                
                <p> 
                    Here I will be showcasing a few blogs i'll be adding to periodically.
                    This site is built using JavaScript, React, and WordPress as a CMS or content management system.
                </p>
                <p>
                    I dont have much yet but I plan to add more integration, such as populating a page with youtube videos I've
                    made and hopefully previews.
                </p>
                <p>
                    This is very much a work in progress, as what I have working so far is just importing WordPress blogs from
                    the WordPress api.
                </p>

        </div>
    );
}

export default Welcome;