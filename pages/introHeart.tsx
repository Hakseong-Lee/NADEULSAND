import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
      <section>
        <div className="intro-container">
          <div className="heart">
            {' '}
            <div className="logo-container">
              <span>
                <h2>NADEUL</h2>
              </span>
              <span>
                <h2>SAND</h2>
              </span>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          @keyframes bigger {
            0% {
              transform: scale(1) rotate(45deg);
            }
            10% {
              transform: scale(2) rotate(45deg);
            }
            30% {
              transform: scale(1.5) rotate(45deg);
            }
            40% {
              transform: scale(3) rotate(45deg);
            }
            60% {
              transform: scale(2) rotate(45deg);
            }
            100% {
              transform: scale(20) rotate(45deg);
            }
          }
          @keyframes vanish {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 1;
            }
            90% {
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }
          * {
            padding: 0;
            margin: 0;
          }
          section {
            width: 100%;
            height: 100vh;
            left: 0;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .heart {
            background: pink;
            transform: rotate(45deg);
            width: 10rem;
            height: 10rem;
            display: flex;
            animation: bigger 3s ease-in 0s 1 normal;
          }
          .heart::before,
          .heart::after {
            content: '';
            width: 10rem;
            height: 10rem;
            position: absolute;
            border-radius: 50%;
            background: pink;
          }
          .heart::before {
            left: -50%;
          }
          .heart::after {
            top: -50%;
          }
          .logo-container {
            position: absolute;
            top: 20%;
            left: 10%;
            transform: rotate(-45deg);
            z-index: 1;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            animation: vanish 3s ease-in 0s 1 normal;
            color: red;
          }
        `}
      </style>
    </>
  );
}
