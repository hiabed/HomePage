const link = document.querySelector("a");

function linkBehavior(event)
{
    event.preventDefault();
}

link.addEventListener("click", linkBehavior);