export interface Color {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

const parseToString = (color: Color): string =>
  `rgba(${color.red}, ${color.green}, ${color.blue}, ${color.alpha})`;

const colorWithOpacity = (red: number, green: number, blue: number) => (
  alpha: number,
) => parseToString({red, green, blue, alpha});

export default {
  primary: colorWithOpacity(20, 224, 112),
  white: colorWithOpacity(255, 255, 255),
  black: colorWithOpacity(0, 0, 0),
};
