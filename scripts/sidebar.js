function sideBarSelection(sideBarChoice){
  
    if(sideBarChoice === 'video'){
        
      let videosHTML = '';

      videos.forEach((video) => {
        videosHTML += `
          <div style="padding-left: 5px; padding-rigt:5px" class="thumbnail-row">
              <video width="100%" height="100%" controls>
              <source src="${video.clip} ">
              Tarayıcınız bu videoyu desteklemiyor.
              </video>

            <p class="video-title">
              ${video.name}
            </p>
            <p class="video-author"> ${video.videographer} </p>
            <p class="video-stats"> 
              ${video.date}
            </p>
          </div>   
        `;
      });

      document.querySelector('.js-video-grid').innerHTML = videosHTML;

    } else if (sideBarChoice = 'fotograf') {
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

    }
  }