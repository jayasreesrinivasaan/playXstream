window.addEventListener('load', () => {
    // Set a delay before redirecting to the next page
    const delayBeforeRedirect = 5000; // 5 seconds (5000 milliseconds)
    
    // Apply fade-out effect
    setTimeout(() => {
        document.body.classList.add('fade-out');
    }, delayBeforeRedirect - 1000); // Start fading out 1 second before the redirect
    
    // Redirect to the next page
    setTimeout(() => {
        window.location.href = 'http://127.0.0.1:5500/nextpage.html';
    }, delayBeforeRedirect);
});
