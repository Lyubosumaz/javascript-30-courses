(function () {
    const canvas = document.querySelector('#draw');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 100;

    let isDrowing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;

    canvas.addEventListener('mousemove', drow);
    canvas.addEventListener('mousedown', (e) => {
        isDrowing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    canvas.addEventListener('mouseup', () => isDrowing = false);
    canvas.addEventListener('mouseout', () => isDrowing = false);

    function drow(e) {
        if (!isDrowing) return;

        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];

        hue++;
        if (hue >= 360) {
            hue = 0;
        }

        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
            direction = !direction;
        }

        if (direction) {
            ctx.lineWidth++;
        } else {
            ctx.lineWidth--;
        }
    }
})();