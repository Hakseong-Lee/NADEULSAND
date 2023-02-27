import Image from 'next/image';
import LogoTop from '../public/assets/img/logoTop.png';
import LogoBottom from '../public/assets/img/logoBottom.png';
export default function intro() {
  return (
    <>
      <div className="intro-container">
        <div className="page" />
        <div className="intro up-side-1"></div>
        <div className="intro up-side-2"></div>
        <div className="intro down-side-1"></div>
        <div className="intro down-side-2"></div>
        <div className="animated-logo">
          <div className="logo-top test">
            <div className="first">
              <Image src={LogoTop} layout="responsive" alt="logotop"></Image>
            </div>
          </div>
          <div className="logo-bottom test">
            <div className="first bottom">
              <Image src={LogoBottom} layout="responsive" alt="logotop"></Image>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          * {
            padding: 0;
            margin: 0;
          }
          @keyframes slideInUp {
            0% {
              transform: translate3d(0, 0, 0);
            }
            20% {
              transform: translate3d(0, 50%, 0);
            }
            80% {
              transform: translate3d(0, 50%, 0);
            }
            100% {
              transform: translate3d(0, 0, 0);
            }
          }
          @keyframes slideInDown {
            0% {
              transform: translate3d(0, 0, 0);
            }
            20% {
              transform: translate3d(0, -51%, 0);
            }
            80% {
              transform: translate3d(0, -50%, 0);
            }
            100% {
              transform: translate3d(0, 0, 0);
            }
          }
          @keyframes slideOut {
            0% {
              transform: translateY(100%);
            }
            90% {
              transform: translateY(100%);
            }
            100% {
              transform: translateY(0);
            }
          }
          @keyframes showTopText {
            0% {
              transform: translate3d(0, 100%, 0);
            }
            30% {
              transform: translate3d(0, 0, 0);
            }
            50% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(0, 100%, 0);
            }
          }
          @keyframes showBottomText {
            0% {
              transform: translate3d(0, -100%, 0);
            }
            30% {
              transform: translate3d(0, 0, 0);
            }
            50% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(0, -100%, 0);
            }
          }
          @keyframes fade {
            0% {
              scale: 1;
            }
            100% {
              scale: 0.85;
            }
          }
          .intro-container {
            z-index: 1600;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }
          .page {
            position: fixed;
            width: 100%;
            height: 100%;
            left: 0;
            top: -100%;
            background-color: #2d2d2d;
            animation: slideOut 2s linear 0s 1 normal;
          }
          .intro {
            position: fixed;
            left: 0;
            top: -100%;
            width: 100%;
            height: 100%;
          }
          .up-side-1 {
            background-color: rgb(82, 117, 120);
            animation: slideInUp 2.5s linear 0.5s 1 normal;
          }
          .up-side-2 {
            background-color: #d3d3d3;
            animation: slideInUp 2.5s ease-in 0.8s 1 normal;
          }
          .down-side-1 {
            top: 100%;
            background-color: rgb(82, 117, 120);
            animation: slideInDown 2.5s linear 0.5s 1 normal;
          }
          .down-side-2 {
            top: 100%;
            background-color: #d3d3d3;
            animation: slideInDown 2.5s ease-in 0.8s 1 normal;
          }
          .animated-logo {
            width: 28rem;
            height: 28rem;
            position: absolute;
            animation: fade 2.5s ease-in 0.8s 1 normal;
          }
          .test {
            height: 50%;
            width: 100%;
            overflow: hidden;
            position: absolute;
          }
          .first {
            position: absolute;
            top: 0;
            animation: showTopText 3s;
            animation-delay: 1s;
            transform: translate(0, 100%);
          }
          .logo-bottom {
            bottom: 0;
          }
          .bottom {
            animation: showBottomText 3s;
            animation-delay: 1s;
            top: 0;
            transform: translate(0, -100%);
          }
        `}
      </style>
    </>
  );
}
