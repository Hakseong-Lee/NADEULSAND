export enum colors {
  white = '#ffff',
  navy = '#171B36',
  lightNavy = '#2e324a',
  grey = '#999999',
  caramel = '#B46B18',
  beige = '#F3CFA5',
  babypink = '#FFABAB',
  pink = '#D14D72',
  brown = '#865439',
  kakao = '#361500',
}
export const bgOrder: { [key: string]: colors } = {
  '-2': colors.babypink,
  '-1': colors.brown,
  '0': colors.beige,
  '1': colors.babypink,
  '2': colors.brown,
  '3': colors.beige,
  '4': colors.babypink,
};
export const waveOrder: { [key: string]: colors } = {
  '-2': colors.pink,
  '-1': colors.kakao,
  '0': colors.caramel,
  '1': colors.pink,
  '2': colors.kakao,
  '3': colors.caramel,
  '4': colors.pink,
};
