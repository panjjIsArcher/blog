interface SwiperItem {
    title: string,
    id: number | string,
    sort?: number | undefined
}

const frontSwiperItem: SwiperItem[] = [
    {title: 'vue', id: 1},
    {title: 'JavaScript', id: 2},
    {title: 'css', id: 3},
    {title: 'react', id: 4},
    {title: "前端性能优化", id: 5}
];

export {
    frontSwiperItem
}
