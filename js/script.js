const data = [["https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg","London"],["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg","Paris"],["https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg","New York"],["https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg","Nova Scotia"],["https://classes.codingbootcamp.cz/assets/classes/1428/tokio.jpg","Tokio"],["https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg","Venice"]];

console.log(data);
const gallery = document.querySelector('.gallery'); 
console.log(gallery);

    let newImages = '';
    data.forEach(image => {
        newImages += `
        <div class="image">
            <img src="${image[0]}" alt="${image[1]}">
            <div class="image_discription">${image[1]}</div>
        </div>`;
    });

    gallery.innerHTML = newImages;