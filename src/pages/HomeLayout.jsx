import { Link } from 'react-router-dom';

const HomeLayout = () => {
    return(
        <div>
            <h1>Home Page</h1> 
             <Link to = '/about'>
                About Page
            </Link>
        </div>
    )
};
export default HomeLayout;