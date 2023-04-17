var observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(item => {
            
        });
    }
);

document.querySelectorAll('.slides').forEach(element => {
    observer.observe(element);
});