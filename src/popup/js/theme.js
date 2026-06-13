(function () {
    var btn = document.getElementById('theme-toggle');

    function applyIcon() {
        btn.textContent = document.documentElement.classList.contains('dark') ? '🌙' : '☀️';
    }

    btn.addEventListener('click', function () {
        var isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', isDark ? '1' : '0');
        applyIcon();
    });

    applyIcon();

    var slider = document.getElementById('volume-slider');
    if (slider) {
        var section = slider.parentNode;
        section.style.position = 'relative';
        slider.style.position = 'relative';
        slider.style.zIndex = '1';

        var sliderRect = slider.getBoundingClientRect();
        var sectionRect = section.getBoundingClientRect();

        var wrap = document.createElement('div');
        wrap.className = 'slider-ticks-wrap';
        wrap.style.left   = (sliderRect.left - sectionRect.left) + 'px';
        wrap.style.top    = (sliderRect.top  - sectionRect.top)  + 'px';
        wrap.style.width  = sliderRect.width  + 'px';
        wrap.style.height = sliderRect.height + 'px';

        var thumbR = 8;
        var trackW = sliderRect.width - thumbR * 2;

        [100, 200, 300, 400, 500].forEach(function (v) {
            var line = document.createElement('span');
            line.style.left = (thumbR + (v / 600) * trackW) + 'px';
            wrap.appendChild(line);
        });

        section.appendChild(wrap);
    }
}());
