const sectionArray = [1,2,4]
sectionArray.forEach(sectionID => {
    const body = document.querySelector('body');
    const ovalParent = document.createElement("div");

    ovalParent.classList.add("oval-parent")
    createOvalnChildren(ovalParent);
    body.append(ovalParent);
});

function createOvalnChildren(ovalParent) {
    for (let i=0; i<5; i++){
        let child = document.createElement("div");
        child.classList.add('oval');
        child.style.top = 10 * i +"px";
        ovalParent.append(child);
    }
}