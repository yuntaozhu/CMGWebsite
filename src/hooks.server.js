const securityHeaders = {
    // "Cross-Origin-Embedder-Policy": "require-corp",
    // "Cross-Origin-Opener-Policy": "same-origin",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN",
    "X-XSS-Protection": "1; mode=block",
    "Pemissions-Policy": "geolocation=(), microphone=(), camera=()",
    "Referrer-Policy": "no-referrer, strict-origin-when-cross-origin",
};

export const handle = async ({ event, resolve }) => {
    const response = await resolve(event);
    Object.entries(securityHeaders).forEach(([header, value]) =>
        response.headers.set(header, value)
    );

    return response;
};
