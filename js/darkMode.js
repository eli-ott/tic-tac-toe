setTimeout(() => {
    //we're checking if the user already changed the theme color to set the right one
    if (localStorage.getItem('theme') == 'dark') $(".themeIcon").click(); 
}, 100);

$(".themeIcon").on("click", function () {
    if ($(this).attr('id') == 'sun') {
        //we"re changing the style to a light mode

        //we're storing the prefered theme of the user with the localStorage
        localStorage.setItem('theme', 'dark');

        //we're changing the background icons color
        $("svg").attr('stroke', "#F3F3F3");

        //we're changing the root variables
        document.documentElement.style.setProperty("--background", '#363636');
        document.documentElement.style.setProperty("--color", '#f3f3f3');

        //we're changing the id and src attribute of the image
        $("#sun").attr("src", './icons/sun.svg');
        $("#sun").attr('id', 'moon');
    } else if ($(this).attr('id') == 'moon') {
        //we"re changing the style to a dark mode

        //we're storing the prefered theme of the user with the localStorage
        localStorage.setItem('theme', 'light');

        //we're changing the background icons color
        $("svg").attr('stroke', "#363636");

        //we're changing the root variables
        document.documentElement.style.setProperty("--background", '#f3f3f3');
        document.documentElement.style.setProperty("--color", '#363636');

        //we're changing the id and src attribute of the image
        $("#moon").attr("src", './icons/moon.svg');
        $("#moon").attr('id', 'sun');
    }
});