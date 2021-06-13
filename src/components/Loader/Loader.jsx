import { createPortal } from 'react-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Loader.scss';

const loaderRoot = document.getElementById('loader-root');

const MyLoader = () =>
  createPortal(
    <div className="loader">
      <Loader type="Circles" color="#5f4b32" height={100} width={100} />
    </div>,
    loaderRoot,
  );

export default MyLoader;
