// V1
// fetch('https://jsonplaceholder.typicode.com/photos')
//     .then((response) => response.json())
//     .then(data => {
//         const gallery = data.slice(0,12);
//
//         return gallery.map(item => {
//             const img = document.createElement('img');
//             img.src = item.url;
//             const div = document.createElement('div');
//             div.classList.add('image-grid-cell');
//             div.appendChild(img);
//
//             return div;
//         });
//     })
//     .then(images => {
//         const container = document.createElement('div');
//         container.classList.add('image-grid');
//         container.append(...images);
//         document.body.appendChild(container);
//     });

const getImages = gallery => {
    return gallery.map(item => {
        const img = document.createElement('img');
        img.src = item.url;
        const div = document.createElement('div');
        div.appendChild(img);
        return div;
    })
};

const insertImagesInBody = (images) => {
    const container = document.createElement('div');
    container.classList.add('image-grid');
    container.append(...images);
    document.body.appendChild(container);
};

// V2
(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const records = await response.json();
    const images = getImages(records.slice(0, 12));
    insertImagesInBody(images);
})();