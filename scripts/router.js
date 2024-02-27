// router.js

const routes = {
    '/': 'index.html',
    '/about': 'Aboutus.html',
    '/contact': 'Contactus.html',
    '/terms': 'Term.html'
};

function navigateTo(pathname) {
    window.history.pushState({}, pathname, window.location.origin + pathname);
}

function router() {
    const path = window.location.pathname;
    const page = routes[path];
    if (page) {
        fetchPage(page);
    } else {
        fetchPage('404.html'); // Page not found
    }
}

function fetchPage(page) {
    fetch(page)
        .then(response => {
            return response.text();
        })
        .then(html => {
            document.querySelector('#app').innerHTML = html;
        })
        .catch(error => {
            console.warn('Error fetching page:', error);
        });
}

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', event => {
        if (event.target.matches('[data-link]')) {
            event.preventDefault();
            navigateTo(event.target.href);
            router();
        }
    });
    router();
});
