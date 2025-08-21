function redirectToFreedium(requestDetails) {
    const url = requestDetails.url;

    // Solo interceptar medium.com y subdominios
    const mediumRegex = /^https?:\/\/([a-z0-9-]+\.)?medium\.com(\/.*)?$/i;

    if (mediumRegex.test(url)) {
        const redirectUrl = "https://freedium.cfd/" + url;
        return { redirectUrl: redirectUrl };
    }
}

// Escuchar todas las peticiones de navegación
browser.webRequest.onBeforeRequest.addListener(
    redirectToFreedium,
    { urls: ["<all_urls>"], types: ["main_frame"] },
    ["blocking"]
);