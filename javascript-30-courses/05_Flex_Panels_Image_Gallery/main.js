(function () {
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => panel.addEventListener('click', togglrOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

    function togglrOpen() {
        this.classList.toggle('open');
    }

    function toggleActive(e) {
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }

    }
})()