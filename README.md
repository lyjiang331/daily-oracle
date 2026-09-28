# Number for the Day

## Original idea

When someone clicks, the experience should be unpredictable and meaningful.

This is a small browser experience inspired by the feeling of checking a daily fortune. The user clicks a crystal ball and receives a random number from 1 to 100. Numbers below 50 reveal an encouraging sentence, numbers above 50 reveal a joke or fun fact, and exactly 50 reveals a special message about balance.

The visual design uses a glassy purple crystal ball resting over a soft velvet cushion in a magical room. A moonlit window makes it feel like the reading happens at night. The ball begins with a glowing script-style question mark, then light, mist, and particles animate before the number appears.

## How to open the project

No installation is required. Open `dist/index.html` in a web browser.

For a local web server, open a terminal in this folder and run:

```bash
python3 -m http.server 8000 --directory dist
```

Then visit `http://localhost:8000`.

## AI tool and selected prompts

I used Codex to help plan, write, and test the website.

Selected prompt:

> When someone clicks, the experience should be unpredictable and meaningful. I want to create a website where clicking makes a number from 1–100 appear. If the number is under 50, the user sees an encouraging sentence. If it is over 50, they see a meme, joke, or fun fact for the day. The interaction can use a crystal ball inspired by checking a Chinese daily fortune, with the number appearing in the middle.

“I want the style to be more miracle， the crystal ball should be purple and have a soft垫子uder it. The headline needs to be change, i do not like "today's number oracle." maybe change it to "Number for the day.", The background can be a magic room, and it is nighttime outside the window”

“I want the ball to be crystal, and will click it, it has some animation and special effects to make the ball itself more beautiful and dreamy. Then remove "qi", and it becomes a cursive question mark“？”
Important decisions made while working with AI:

- I kept one main interaction: clicking the crystal ball to reveal a random number and message.
- After testing the first version, I changed the red sphere into a purple crystal ball and added a magical nighttime room and velvet cushion.
- I replaced the unexpected character “启” with a cursive question mark and added animation to create anticipation before the number appears.

## Reflection

### What matched your intention, and what didn’t?

I feel that Codex fully captured what I wanted in terms of gameplay—the interactions have an element of randomness and yield corresponding rewards—but the art style, layout, and some specific interactions feel a bit rigid. It also gives me things I didn’t mention and don’t really need, like the character “启” in the crystal ball. I tested whether the numerical results could be randomized and whether different numbers would trigger different corresponding sentences (jokes, educational facts, etc.). I changed the page style, altered the sphere’s texture and color, modified the background, added a velvet pillow beneath the sphere, and included interactive animations and special effects. I made these changes to make it more visually striking and give it a more magical feel. I felt that simply clicking to reveal a number lacked impact, so I added interactive animations to give users a moment of anticipation while waiting for the number to appear. This builds suspense and enhances the user experience. Since I communicated with Codex using a mix of Chinese and English, Codex did a great job of standardizing my language and saved me the time I would have spent looking up general knowledge and memes myself. As someone who can’t draw, I find it incredible that detailed descriptions can directly generate the background images I want. But this also made me realize the importance of precise prompts—I have to be very specific and detailed to get exactly the effect I’m looking for. Actually, there aren’t really any unresolved issues, but in the future, I might add other features like music, “today’s lucky number,” or a collection of fun facts.

### What did you test or change, and why?

I tested whether the numerical results could be randomized and whether different numbers would trigger different corresponding sentences (jokes, trivia, etc.). I changed the page’s style, altered the sphere’s texture and color, changed the background, added a velvet pillow beneath the sphere, and incorporated interactive animations and special effects. I made these changes to make it more visually striking and give it a more magical feel. I felt that simply clicking to generate a number lacked impact, so I added interactive animations to give users a moment of anticipation while waiting for the number to appear. This builds suspense and enhances the user experience. Since I communicate with Codex using a mix of Chinese and English, Codex did a great job of standardizing my language and saved me the time I would have spent looking up general knowledge and memes myself. As someone who can’t draw, I find it incredible that detailed descriptions can directly generate the background images I want. But this also made me realize the importance of instructions—I have to be very specific and detailed to get exactly the effect I’m looking for. Actually, there aren’t really any unresolved issues, but in the future, I might add other features like music, “today’s lucky number,” or a collection of fun facts.

### How did AI help, and what did you need to decide or understand yourself?

Since I communicate with Codex using a mix of Chinese and English, Codex did a great job of standardizing my language, which saved me time that I would have otherwise spent looking up general knowledge and memes. As someone who can’t draw, I find it incredible that detailed descriptions can directly generate the background images I want. But this has also made me even more aware of the importance of instructions—I have to write them very specifically and in great detail to get exactly the results I want.

### What remains uncertain or unresolved?

Actually, there aren’t really any unresolved issues, but in the future I might add other features like music, “today’s lucky number,” or a collection of fun facts.
