import { Helmet, HelmetProvider } from "react-helmet-async";
import {useEffect} from 'react'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>title</title>
      </Helmet>
      <div className="home">
        <h1>Mail Monkey</h1>
      </div>
    </HelmetProvider>
  );
};

export default Home;
