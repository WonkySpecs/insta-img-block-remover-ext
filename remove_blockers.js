function clear_blockers() {
    document.querySelectorAll("._aagw")
        .forEach(n => n.remove());
}

setInterval(clear_blockers, 500);
