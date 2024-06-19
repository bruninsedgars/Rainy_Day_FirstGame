document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    let leftPosition = 50; // Initial position (50% of screen width)
    let bottomPosition = 10; // Initial bottom position in %
    let isJumping = false;
    const jumpHeight = 20; // Jump height in percentage
    const jumpSpeed = 0.3; // Speed of jump

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (key === 'ArrowLeft') {
            leftPosition -= 5;
            if (leftPosition < 0) leftPosition = 0;
            character.style.left = leftPosition + '%';
        } else if (key === 'ArrowRight') {
            leftPosition += 5;
            if (leftPosition > 95) leftPosition = 95; // Prevent moving off screen
            character.style.left = leftPosition + '%';
        } else if (key === ' ' && !isJumping) { // Check for space bar
            jump();
        }
    });

    function jump() {
        isJumping = true;
        let upInterval = setInterval(() => {
            if (bottomPosition >= 10 + jumpHeight) {
                clearInterval(upInterval);
                let downInterval = setInterval(() => {
                    if (bottomPosition <= 10) {
                        clearInterval(downInterval);
                        isJumping = false;
                        bottomPosition = 10; // Reset bottom position to initial value
                    } else {
                        bottomPosition -= jumpSpeed;
                        character.style.bottom = bottomPosition + '%';
                    }
                }, 20);
            } else {
                bottomPosition += jumpSpeed;
                character.style.bottom = bottomPosition + '%';
            }
        }, 20);
    }
});
