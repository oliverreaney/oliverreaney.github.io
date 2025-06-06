window.addEventListener('load', () => {
    const cycleText = document.getElementById('cycleText');
    const targetText = cycleText.textContent;
    const characters = targetText.split('');

    const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/~`£';
    const textLength = characters.length;
    const cycleDuration = 150;
    let currentLetterIndex = 0;

    let currentState = characters.map((char) => {
        return { 
            currentLetter: char === ' ' ? ' ' : randomChar(),
            isComplete: false,
            timeElapsed: 0,
        };
    });

    function cycleCharacter() {
        if (currentLetterIndex < textLength) {
            const character = currentState[currentLetterIndex];
            const targetChar = characters[currentLetterIndex];

            if (!character.isComplete) {

                if (characters[currentLetterIndex] !== ' ') {
                    character.currentLetter = randomChar();
                }
                currentState[currentLetterIndex] = character;

                character.timeElapsed += 50;

                if (character.timeElapsed >= cycleDuration) {
                    character.currentLetter = targetChar;
                    character.isComplete = true;

                    currentLetterIndex++;
                }
            }
        }
    }

    let intervalId = setInterval(() => {
        cycleCharacter();

        cycleText.textContent = currentState.map(c => c.currentLetter).join('');

        const allComplete = currentState.every(c => c.isComplete);
        if (allComplete) {
            clearInterval(intervalId);
        }

    }, 25);

    function randomChar() {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        return allChars[randomIndex];
    }
});
