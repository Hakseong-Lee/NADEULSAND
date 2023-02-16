export default function intro() {
  return (
    <>
      <section>
        <div className="intro-container">
          <div className="page"></div>
          <div className="intro up-side-1"></div>
          <div className="intro up-side-2"></div>
          <div className="intro down-side-1"></div>
          <div className="intro down-side-2"></div>
        </div>
        <div className="logo-container">
          <span>
            <h2>NADEUL</h2>
          </span>
          <span>
            <h2>SAND</h2>
          </span>
        </div>
      </section>
      <h1>Hello World</h1>
      <style jsx>
        {`
          @keyframes slideInUp {
            0% {
              transform: translateY(0);
            }
            25% {
              transform: translateY(50.5vh);
            }
            60% {
              transform: translateY(50.5vh);
            }
            100% {
              transform: translateY(0);
            }
          }
          @keyframes slideInDown {
            0% {
              transform: translateY(0);
            }
            25% {
              transform: translateY(-50.5vh);
            }
            60% {
              transform: translateY(-50.5vh);
            }
            100% {
              transform: translateY(0);
            }
          }
          @keyframes slideOut {
            0% {
              transform: translateY(100vh);
            }
            90% {
              transform: translateY(100vh);
            }
            100% {
              transform: translateY(0);
            }
          }

          section {
            width: 100%;
            height: 100vh;
            left: 0;
            top: 0;
          }
          .page {
            position: fixed;
            width: 100%;
            height: 100vh;
            left: 0;
            top: -100vh;
            background-color: #505050;
            animation: slideOut 2s linear 0s 1 normal;
          }
          .intro {
            position: fixed;
            z-index: 1;
            left: 0;
            width: 100%;
            height: 100vh;
          }
          .up-side-1 {
            top: -100vh;
            background-color: #ff9900;
            animation: slideInUp 2s linear 0.5s 1 normal;
          }
          .up-side-2 {
            top: -100vh;
            background-color: #dcdcdc;
            animation: slideInUp 2s ease-in 0.8s 1 normal;
          }
          .down-side-1 {
            top: 100vh;
            background-color: #ff9900;
            animation: slideInDown 2s linear 0.5s 1 normal;
          }
          .down-side-2 {
            top: 100vh;
            background-color: #dcdcdc;
            animation: slideInDown 2s ease-in 0.8s 1 normal;
          }
        `}
      </style>
    </>
  );
}
