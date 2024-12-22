
let photosHTML = '';

photos.forEach((photo) => {
  photosHTML += `
    <div class="thumbnail-row">
      <img class="thumbnail" src="${photo.image} ">
      <p class="video-title">
        ${photo.name}
      </p>
      <p class="video-author"> ${photo.photog} </p>
      <p class="video-stats"> 
        ${photo.date}
      </p>
    </div>   
  `;
});

document.querySelector('.js-video-grid').innerHTML = photosHTML;

