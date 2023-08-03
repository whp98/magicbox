import { Link } from 'react-router-dom';
import PageLayout from '../components/pageLayout/PageLayout';

const Err404 = () => (
  <PageLayout>
    <p>
      <h4>Err 404</h4>
      <Link to="/">回到首页</Link>
    </p>
  </PageLayout>
);

export default Err404;
