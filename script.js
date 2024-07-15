const link = document.querySelectorAll("a");

for (let i = 0; i < link.length ;i++)
{
    link[i].addEventListener("click", (event)=>
    {
        for (let i = 0; i < link.length; i++)
            link[i].classList.remove('link');
        event.preventDefault();
        link[i].classList.add('link');
    });
};
