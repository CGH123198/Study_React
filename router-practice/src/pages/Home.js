import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1><Link to="/">홈</Link></h1>
            <p>가장 먼저 보여지는 페이지</p>
            <ul>
                <li>
                    <Link to="/About">소개</Link>
                </li>
                <li>
                    <Link to="/profiles/velopert">velopert의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong의 프로필</Link>
                </li>
                <li>
                    <Link to="/profiles/void">존재하지 않는 프로필</Link>
                </li>
                <li>
                    <Link to="/articles">게시글 목록</Link>
                </li>
                <li>
                    <Link to="/mypage">로그인</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;