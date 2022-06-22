import { Link, Outlet } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/red">Red</Link>
                </li>
                <li>
                    <Link to="/blue">Blue</Link>
                </li>
            </ul>
            <hr />
            <Outlet/>
        </div>
    );
};

export default Menu;