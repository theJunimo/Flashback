const color = [
    '#ffc9c9',
    '#fcc2d7',
    '#eebefa',
    '#d0bfff',
    '#99e9f2',
    '#96f2d7',
    '#ffec99',
    '#ffd8a8'
]
const colorPick = () => {
    const i = Math.floor(Math.random() * color.length);
    return color[i];
}

export default colorPick;