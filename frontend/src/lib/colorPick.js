const colors = [
  '#ffc9c9',
  '#fcc2d7',
  '#eebefa',
  '#d0bfff',
  '#99e9f2',
  '#96f2d7',
  '#ffec99',
  '#ffd8a8'
];
const colorPick = () => {
  const i = Math.floor(Math.random() * colors.length);
  return colors[i];
};

export { colors };
export default colorPick;
