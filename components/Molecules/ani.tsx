@keyframes itemName-in{
    0% {
      transform: translate(20px, 0);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
@keyframes itemName-out {
    0% {
      transform: translate(20px, 0);
      opacity: 1;
    }
    100% {
      transform: translate(0, 0);
      opacity: 0;
    }
  }
  
@keyframes itemName-in-reverse{
    0% {
      transform: translate(-20px, 0);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
@keyframes itemName-out-reverse{
    0% {
      transform: translate(0, 0);
      opacity: 1;
    }
    100% {
      transform: translate(20px, 0);
      opacity: 0;
    }
}
    @keyframes titleStart {
    0% {
      transform: translate3d(0, 100%, 0) rotateX(90deg);
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0%, 0) rotateX(0deg);
    }
  }
  @keyframes nameStart {
    0% {
      transform: translate3d(0, -100%, 0) rotateX(-90deg);
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0%, 0) rotateX(0deg);
    }
  }

  @keyframes img-in {
    0% {
      transform: translate3d(500%, 0, 0);
    }
    20% {
      transform: translate3d(500%, 0, 0);
    }
    70% {
      transform: translate3d(-25%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes img-left {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }