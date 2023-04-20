import mainCaramel from '../../public/assets/img/mainCaramel.webp';
import mainStrawberry from '../../public/assets/img/mainStrawberry.webp';
import mainKakao from '../../public/assets/img/mainKakao.webp';

export interface ListItemsType {
  name: string;
  nameArr: string[];
  src: any;
  index: number;
}

export const listItems: ListItemsType[] = [
  {
    name: 'strawberry',
    nameArr: ['S', 'T', 'R', 'A', 'W', 'B', 'E', 'R', 'R', 'Y'],
    src: mainStrawberry,
    index: -2,
  },
  {
    name: 'kakao',
    nameArr: ['K', 'A', 'K', 'A', 'O'],
    src: mainKakao,
    index: -1,
  },
  {
    name: 'caramel',
    nameArr: ['C', 'A', 'R', 'A', 'M', 'E', 'L'],
    src: mainCaramel,
    index: 0,
  },
  {
    name: 'strawberry',
    nameArr: ['S', 'T', 'R', 'A', 'W', 'B', 'E', 'R', 'R', 'Y'],
    src: mainStrawberry,
    index: 1,
  },
  {
    name: 'kakao',
    nameArr: ['K', 'A', 'K', 'A', 'O'],
    src: mainKakao,
    index: 2,
  },
  {
    name: 'caramel',
    nameArr: ['C', 'A', 'R', 'A', 'M', 'E', 'L'],
    src: mainCaramel,
    index: 3,
  },
  {
    name: 'strawberry',
    nameArr: ['S', 'T', 'R', 'A', 'W', 'B', 'E', 'R', 'R', 'Y'],
    src: mainStrawberry,
    index: 4,
  },
];
