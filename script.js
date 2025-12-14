
document.addEventListener('DOMContentLoaded', () => {
    /* -----------------------------
       Carousel Logic
    ----------------------------- */
    const textElement = document.getElementById('dynamic-text');
    
    // The sequence logic:
    // It alternates between "CEE" (base) and a "Yes" variant.
    // Base: DataCEE
    // Variant: Data? Si!
    
    const yesVariants = [
        "? Si!",    // Italian/International
        "? Yes?",   // English
        "? Tak",    // Polish
        "? Da",     // Romanian, Bulgarian, Croatian, Serbian
        "? Ano",    // Czech
        "? Áno",    // Slovak
        "? Igen",   // Hungarian
        "? Taip",   // Lithuanian
        "? Jah",    // Estonian
        "? Jā"      // Latvian
    ];

    const baseText = "CEE";
    let variantIndex = 0;
    let showingBase = true; 

    // Start the loop
    setTimeout(runCarousel, 2000);

    async function runCarousel() {
        if (!textElement) return;

        // 1. Animate Out (Slide Up)
        textElement.classList.add('carousel-out');

        // 2. Wait for animation to finish (400ms matches CSS)
        await new Promise(r => setTimeout(r, 400));

        // 3. Swap Text and Reset Position (Instant Snap)
        if (showingBase) {
            // Switch to a variant
            textElement.textContent = yesVariants[variantIndex];
            variantIndex = (variantIndex + 1) % yesVariants.length;
            showingBase = false;
        } else {
            // Switch back to base
            textElement.textContent = baseText;
            showingBase = true;
        }

        // Disable transition to snap to bottom instantly
        textElement.classList.add('no-transition');
        textElement.classList.remove('carousel-out');
        textElement.classList.add('carousel-in-start');
        
        // Force reflow to ensure the browser registers the position change
        void textElement.offsetWidth;

        // 4. Animate In (Slide Up from bottom)
        textElement.classList.remove('no-transition');
        textElement.classList.remove('carousel-in-start');

        // 5. Schedule next run
        setTimeout(runCarousel, 2500);
    }

    /* -----------------------------
       Cookie Consent Logic
    ----------------------------- */
    const banner = document.getElementById('consent-banner');
    const acceptBtn = document.getElementById('accept-consent');
    const declineBtn = document.getElementById('decline-consent');
    
    // Versioned key to ensure users see the updated banner
    const storageKey = 'data_cee_consent_v4';

    // Helper to enable GA consent
    function grantAnalyticsConsent() {
        // window.gtag is defined in index.html
        if (typeof window.gtag === 'function') {
            window.gtag('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
            });
        }
    }

    // Check user preference on load
    const userPreference = localStorage.getItem(storageKey);

    if (userPreference === 'granted') {
        // User previously accepted - enable analytics
        grantAnalyticsConsent();
        // Banner stays hidden (default CSS)
    } else if (userPreference === 'denied') {
        // User previously declined - leave defaults (denied)
        // Banner stays hidden
    } else {
        // No choice yet - show banner
        setTimeout(() => {
            banner.classList.remove('translate-y-full');
        }, 1000);
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            // Update consent to Google
            grantAnalyticsConsent();
            // Store preference
            localStorage.setItem(storageKey, 'granted');
            // Hide banner
            banner.classList.add('translate-y-full');
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            // Do not update consent (stays denied)
            // Store preference
            localStorage.setItem(storageKey, 'denied');
            // Hide banner
            banner.classList.add('translate-y-full');
        });
    }
});