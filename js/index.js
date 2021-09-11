function removefeaturedContent() {
    var el = document.getElementById("home-articles");
    el.style.display = 'none';
    var el2 = document.getElementById("aboutus");
    el2.innerHTML = "About Us";
    let article = "TheReality is like medium type blog .In the medium you can write any article of any topic but TheReality.com contains the article of specific topic like in our website we try to exposes the truth which were being used as propaganda . we try to reach in the depth of true . and we only accept this type of article in our website.";
    var el3 = document.getElementById("aboutus-article");
    el3.innerHTML = article;
}