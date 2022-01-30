function handleDragStart(e) {
     this.style.opacity = "0.4";

     dragSrcEl = this;
}

function handleDragEnd(e) {
     this.style.opacity = "1";

     items.forEach(function (item) {
          item.classList.remove("over");
     });
}

function handleDragOver(e) {
     if (e.preventDefault) {
          e.preventDefault();
     }

     return false;
}

function handleDragEnter(e) {
     e.preventDefault();
     this.classList.add("over");
}

function handleDragLeave(e) {
     e.preventDefault();
     this.classList.remove("over");
}

function handleDrop(e) {
     e.stopPropagation();

     e.toElement.classList.remove("over");

     e.dataTransfer.dropEffect = "move";

     if (dragSrcEl.dataset.color === e.toElement.dataset.color) {
          dragSrcEl.style.position = "absolute";
          dragSrcEl.style.left = `${e.toElement.offsetLeft}px`;
          dragSrcEl.style.top = `${e.toElement.offsetTop}px`;
     }

     return false;
}

document.querySelectorAll(".circle").forEach(function (item) {
     item.addEventListener("dragstart", handleDragStart);
     item.addEventListener("dragend", handleDragEnd);
});

document.querySelectorAll(".square").forEach(function (item) {
     item.addEventListener("dragover", handleDragOver);
     item.addEventListener("drop", handleDrop);

     item.addEventListener("dragenter", handleDragEnter);
     item.addEventListener("dragleave", handleDragLeave);
});
