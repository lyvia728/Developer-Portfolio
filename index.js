let paragraph = document.querySelector(".intro p");
  let text = paragraph.textContent;

  // Clear existing text before typing starts
  paragraph.textContent = "";

  // Initialize the Typewriter
  let typewriter = new Typewriter(paragraph, {
    autoStart: true,
      delay: 40, // typing speed (lower = faster)
    cursor: "",
  });

  typewriter.typeString(text).start();