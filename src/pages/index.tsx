import { NextPage } from 'next';
import LoginTemplate from 'template/Login';
import FeedTemplate from 'template/Feed';
import { parseCookies } from 'nookies';

const Begin: NextPage = () => {
    const { '@Piupiuwer:token': token } = parseCookies();
    if (token) {
        return <FeedTemplate />;
    }
    return <LoginTemplate />;
};

export default Begin;
