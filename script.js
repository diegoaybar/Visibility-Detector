document.addEventListener('DOMContentLoaded', () => {
    const alarm = document.getElementById('alarmSound');
    const visibilityChange = document.getElementById('visibilityChange');
    const focusEvent = document.getElementById('focusEvent');
    const blurEvent = document.getElementById('blurEvent');
    const mainContent = document.querySelector('.main-content');

    // State tracking
    let isVisible = true;
    let isFocused = true;

    function updatePageState() {
        const shouldBeGreen = 
            (!visibilityChange.checked || isVisible) &&
            (!focusEvent.checked || isFocused) &&
            (!blurEvent.checked || isFocused);

        if (shouldBeGreen) {
            mainContent.style.backgroundColor = "green";
            alarm.pause();
            alarm.currentTime = 0;
        } else {
            mainContent.style.backgroundColor = "red";
            alarm.loop = true;
            alarm.play();
        }
    }

    // Initial state
    updatePageState();

    // Event listeners
    document.addEventListener("visibilitychange", () => {
        if (visibilityChange.checked) {
            isVisible = document.visibilityState === "visible";
            updatePageState();
        }
    });

    window.addEventListener("focus", () => {
        if (focusEvent.checked) {
            isFocused = true;
            updatePageState();
        }
    });

    window.addEventListener("blur", () => {
        if (blurEvent.checked) {
            isFocused = false;
            updatePageState();
        }
    });

    // Toggle listeners
    visibilityChange.addEventListener('change', updatePageState);
    focusEvent.addEventListener('change', updatePageState);
    blurEvent.addEventListener('change', updatePageState);
});