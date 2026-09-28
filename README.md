# Number for the Day

## Original idea

When someone clicks, the experience should be unpredictable and meaningful.

This is a small browser experience inspired by the feeling of checking a daily fortune. The user clicks a crystal ball and receives a random number from 1 to 100. Numbers below 50 reveal an encouraging sentence, numbers above 50 reveal a joke or fun fact, and exactly 50 reveals a special message about balance.

The visual design uses a purple crystal ball resting over a soft velvet cushion in a magical room. A moonlit window makes it feel like the reading happens at night.

## How to open the project

No installation is required. Open `dist/index.html` in a web browser.

For a local web server, open a terminal in this folder and run:

```bash
python3 -m http.server 8000 --directory dist
```

Then visit `http://localhost:8000`.

## Project files

```text
dist/
├── index.html    Page content and structure
├── styles.css   Visual design and animation
└── script.js    Random number and message behavior
```

## AI tool and selected prompts

I used Codex to help plan, write, and test the website.

Selected prompt:

> When someone clicks, the experience should be unpredictable and meaningful. I want to create a website where clicking makes a number from 1–100 appear. If the number is under 50, the user sees an encouraging sentence. If it is over 50, they see a meme, joke, or fun fact for the day. The interaction can use a crystal ball inspired by checking a Chinese daily fortune, with the number appearing in the middle.

Important decisions made while working with AI:

- I kept one main interaction: clicking the crystal ball.
- I decided that exactly 50 should have its own “balance point” message.
- I used the visual feeling of a daily fortune without presenting the result as a real prediction.

## Testing notes

Complete this section after testing the page in a browser:

- **I expected:**
- **What actually happened:**
- **What I changed and why:**
- **What happened after I tested again:**
- **A remaining problem or uncertainty:**

## Reflection

Write 1–2 paragraphs here after testing. Use specific details from the testing notes above. Discuss what matched your intention, what did not, how AI helped, what you decided yourself, and anything still unresolved.
