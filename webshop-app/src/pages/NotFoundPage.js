import '../css/NotFoundPage.css';
import {Link} from 'react-router-dom';

function NotFoundPage() {
    return (
       <div className='main-notfound'>
           <div className='notfound-content'>
                <h1 className='notfound-header'>Oups...something went wrong</h1>
                <h2 className='notfound-link'>Go back to <Link className='link' to='/'>HOMEPAGE</Link></h2>
           </div>
        </div>
    );
}

export default NotFoundPage;