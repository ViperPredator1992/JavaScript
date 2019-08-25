const teamImage = () => {

    const image = document.querySelectorAll('.command__photo');
    let teamFoto;

    image.forEach((elem, index) => {

        image[index].addEventListener('mouseenter', (event) => {
            teamFoto = event.target.getAttribute('src');
            event.target.src = event.target.dataset.img;
        });

        image[index].addEventListener('mouseleave', (event) => {
            event.target.src = teamFoto;
        });

    });

};

export default teamImage;