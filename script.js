const link = document.querySelector("a");

function linkBehavior(event)
{
    event.preventDefault();
    link.style.backgroundColor = "#3f2455";
    link.style.borderRadius = "10%";
    link.style.boxShadow = "0px 0px 10px #9477fa"
    link.style.paddingTop = "5px";
    link.style.height = "50px";
}

link.addEventListener("click", linkBehavior);