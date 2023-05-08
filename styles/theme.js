// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size) => `${size / 16}rem`;

const font = {
  family: {
    base: `'Montserrat', sans-serif`,
    title: `'Montserrat', serif`,
  },
  size: {
    title: pixelToRem(128),
    subtitle: pixelToRem(96),
    paragraph: pixelToRem(40),
  },
  weight: {
    light: 300,
    normal: 500,
    bold: 700,
  },
};

const colors = {
  white: "#ffff",
  navy: "#171B36",
  grey: "#999999",
  caramel: "#B46B18",
  beige: "#F3CFA5",
};

const margins = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem",
};

const paddings = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem",
};

const flex = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

const size = {
  mobile: "425px",
  tablet: "768px",
  laptopS: "1023px",
  laptopM: "1239px",
  desktopS: "1440px",
  desktopL: "1800px",
};

const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  laptopS: `@media only screen and (max-width: ${size.laptopS})`,
  laptopM: `@media only screen and (max-width: ${size.laptopM})`,
  desktopS: `@media only screen and (max-width: ${size.desktopS})`,
  desktopL: `@media only screen and (min-width: ${size.desktopL})`,
};

const theme = {
  font,
  colors,
  flex,
  margins,
  paddings,
  device,
};

export default theme;
