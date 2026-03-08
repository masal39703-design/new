const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');
const interactiveElements = document.querySelectorAll('a, button, .hover-target, .element-trigger');

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

// Update mouse coordinates when moving
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // The main cursor follows the mouse perfectly without delay
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

// Animate the follower circle for a smooth floating effect
function animateFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;

    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';

    requestAnimationFrame(animateFollower);
}

animateFollower();

// Array of vibrant colors for the dynamic hover effect
const colors = [
    '#32cd32', // Lime Green
    '#00fa9a', // Medium Spring Green
    '#ffb703', // Warm accent
    '#228b22', // Forest green
    '#adff2f', // Green yellow
    '#fb8500'  // Darker warm accent
];

// Add sophisticated hover effects
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        follower.classList.add('active');

        // Pick a random color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        // Change Cursor Colors directly
        cursor.style.backgroundColor = randomColor;
        cursor.style.boxShadow = `0 0 15px ${randomColor}`;

        follower.style.borderColor = randomColor;
        follower.style.boxShadow = `0 0 20px ${randomColor}44`;
        follower.style.backgroundColor = `${randomColor}11`; // Slight background tint

    });

    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        follower.classList.remove('active');

        // Reset Cursor Formats
        cursor.style.backgroundColor = '';
        cursor.style.boxShadow = '';

        follower.style.borderColor = '';
        follower.style.boxShadow = '';
        follower.style.backgroundColor = '';
    });
});
