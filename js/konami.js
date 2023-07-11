
    // Konami Code sequence
    const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a"
    ];

    // Keep track of key presses
    let keySequence = [];

    // Listen for keydown event
    document.addEventListener("keydown", function(event) {
    const key = event.key;

    // Add the key to the sequence
    keySequence.push(key);

    // Check if the sequence matches the Konami Code
    if (keySequence.join("").includes(konamiCode.join(""))) {
    // Konami Code is entered correctly
    console.log("Konami Code activated!");

    // Hide the original image
    document.querySelector(".pompom").style.display = "none";


        alert("Sprinkling sleep dust!");

    // Show the animated image
    document.getElementById("sleepy-image").style.display = "block";



    document.querySelector(".page-wrapper").style.backgroundColor =
        "#dde8f3";

    }

    // Keep the sequence length equal to the Konami Code length
    if (keySequence.length > konamiCode.length) {
    keySequence.shift();
}
});

