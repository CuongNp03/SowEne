let images = ['https://i.pinimg.com/564x/75/20/1d/75201d677811a0d3a015a9a279111f8b.jpg', 'https://i.pinimg.com/564x/66/d1/4a/66d14aec6cd11d59264dd58525fdb449.jpg', 'https://i.pinimg.com/564x/37/81/49/3781495f0af90005c96520aee7cd0c21.jpg', 'https://nhadepso.com/wp-content/uploads/2023/02/tong-hop-65-hinh-nen-meo-cute-dang-yeu-de-thuong-kho-cuong_1.jpg']; 
let index = 0;

function changeImg() {
  let img = document.getElementById('myImg');
    img.style.opacity = 0; 

 setTimeout(function() {
        img.src = images[index]; 
        img.style.opacity = 1; 
    }, 2000); 
 index = (index + 1) % images.length; 
}

window.onload = function() {
    setInterval(changeImage, 5000); 
};

