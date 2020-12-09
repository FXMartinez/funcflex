import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

function NavBar(props) {

    return ( 

        // console.log(props),

        <div className='nav'>
            <div className="func-flex">
                <h1>
                    <span style={{color: "Navy", fontFamily: "Cascadia Code"}}>func </span>
                    <span style={{color: "Khaki", fontFamily: 'Cascadia Code'}}>Flex</span>
                    <span style={{color: "Gold", fontFamily: 'Cascadia Code'}}>(</span>
                    <span style={{color: "SteelBlue"}}>{props.currentPage}</span>
                    <span style={{color: "Gold", fontFamily: 'Cascadia Code'}}>)</span>
                </h1>
                {/* maybe turn this into a component that takes in other operations */}
            </div>

            <div>
                
                <Button 
                    color='black' content='Home' 
                    icon={{ color: 'blue', name: 'terminal' }}
                    as={ Link }
                    to='/'
                    onClick={() => {props.getPage('Home')}}
                    />
                <Button 
                    color='black' content='Coding' 
                    icon={{ color: 'red', name: 'terminal' }}
                    as={ Link }
                    to='/Coding'
                    onClick={()=> {props.getPage('Coding')}}
                    />
                <Button
                    color='black' content='Gaming'
                    icon={{ color: 'green', name: 'terminal'}}
                    as={ Link }
                    to='/Gaming'
                    onClick={() => {props.getPage('Gaming')}}
                    />
                <Button
                    color='black' content='Fitness'
                    icon={{ color: 'yellow', name: 'terminal'}}
                    as={ Link }
                    to='/Fitness'
                    onClick={() => {props.getPage('Fitness')}}
                    />

                <Button
                    color='black'
                    icon={{ color: 'red', name: 'youtube'}}
                    // as={ Link }
                    href='https://www.youtube.com/channel/UCzzUwbAKCCoplHIgvyqZ-fA'
                    />
                <Button 
                    color='black'
                    icon={{ color: 'blue', name: 'twitter'}}
                    href='http://www.twitter.com/funcmasterflex'
                    />
                <Button
                    color='black'
                    icon={{ color: 'purple', name: 'twitch'}}
                    href='http://www.twitch.com/funcmasterflex'
                    />
                <Button
                    color='black'
                    icon={{ color: 'blue', name: 'linkedin'}}
                    href='https://www.linkedin.com/in/felix-xavier-martinez-77491429/'
                    />
                <Button
                    color='black'
                    icon={{ color: 'pink', name: 'instagram'}}
                    href='https://www.instagram.com/flexingtonsteel'
                    />
            </div>

        </div>

    );
}

export default NavBar;