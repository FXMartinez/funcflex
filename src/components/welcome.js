import { Header } from 'semantic-ui-react';

function Welcome() {

    return ( 
        <div>

        <Header as='h1' className="ui header"> Welcome to my website! </Header>
        <p> 
            Here I will be showcasing a few blogs i'll be adding to periodically.
            This site is built using JavaScript, React, and WordPress as a CMS or content management system. 
        </p>

        </div>
    );
}

export default Welcome;