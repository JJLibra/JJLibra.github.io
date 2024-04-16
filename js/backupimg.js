document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.onerror = function() {
                    if (this.dataset.fallback) {
                        this.src = this.dataset.fallback;
                    }
                };
                observer.unobserve(img);
            }
        });
    }, {rootMargin: "0px", threshold: 0.01});

    document.querySelectorAll('img').forEach(img => {
        observer.observe(img);
    });
});
