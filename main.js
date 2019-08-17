function deletePromotedPosts() {
    const promotedDivs = document.getElementsByClassName("promoted");
    for (const div of promotedDivs) {
        div.remove();
    }
}
setInterval(deletePromotedPosts, 200);