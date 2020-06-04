function imageGallery(){
    const highlight = document.querySelector(".gallery-highlight");
    const preview = document.querySelectorAll(".room-preview img");
    preview.forEach(preview => {
        preview.addEventListener("click", function() {
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace("small", "big");
            highlight.src = bigSrc;
            preview.forEach(preview => preview.classList.remove("room-active"));
            preview.classList.add("room-active");
        } );

    } );
}

