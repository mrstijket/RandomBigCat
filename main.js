function start() {
    try {
        const button = document.getElementById("get-image-button");
        const image = document.getElementById("image");
        button.addEventListener("click", async () => {
            // Fetch a new image from the API
            const response = await fetch("https://randombig.cat/roar.json");
            const data = await response.json();
            const imageUrl = data.url;
            image.setAttribute("src", imageUrl);
            //getRandomBigCat(data.url);
        });
    } catch (e) {
        alert("There was a problem fetching the breed list.");
    }
}

start();


//function getRandomBigCat(catUrl) {
    //document.getElementById("catpicture").insertAdjacentHTML("beforeend", `<div id="catimage" class="catimage" style="background-image: url('${catUrl}');"></div>`);
    
//}