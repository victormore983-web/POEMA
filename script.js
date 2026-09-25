document.addEventListener('DOMContentLoaded', function() {
    const continueBtn = document.getElementById('continueBtn');
    const svg = document.querySelector('.hello-kitty-svg');
    const romanticMessage = document.getElementById('romanticMessage');
    const typingText = document.getElementById('typingText');
    setTimeout(() => {
        continueBtn.classList.remove('hidden');
        continueBtn.style.opacity = '1';
        continueBtn.style.transform = 'translateY(0)';
        continueBtn.style.transition = 'all 0.8s ease-out';
        console.log('Botón aparecido a los 10 segundos');
    }, 10000);
    continueBtn.addEventListener('click', function() {
        // Añadir efecto de clic al botón
        continueBtn.style.transform = 'scale(0.95)';
        continueBtn.style.transition = 'transform 0.1s ease';
        
        setTimeout(() => {
            continueBtn.style.transform = 'scale(1)';
            showRomanticMessage();
        }, 100);
    });
    function showRomanticMessage() {
        // Mostrar el modal con animación suave
        romanticMessage.classList.add('show');
        const fullText = typingText.textContent;
        typingText.textContent = '';
        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        typingText.appendChild(cursor);
        let charIndex = 0;
        const typingSpeed = 80;
        
        function typeWriter() {
            if (charIndex < fullText.length) {
                const textNode = document.createTextNode(fullText.charAt(charIndex));
                typingText.insertBefore(textNode, cursor);
                charIndex++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(() => {
                    addDriftToHearts();
                }, 2000);
            }
        }
        setTimeout(() => {
            typeWriter();
        }, 300);
    }
    function addDriftToHearts() {
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach((heart, index) => {
            const drift = (Math.random() - 0.5) * 40;
            heart.style.setProperty('--drift', `${drift}px`);
        });
    }
    svg.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    svg.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    setTimeout(() => {
        document.body.classList.add('animation-complete');
    }, 10000);
});
function closeMessage() {
    const romanticMessage = document.getElementById('romanticMessage');
    romanticMessage.classList.remove('show');
}
