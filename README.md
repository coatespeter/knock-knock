# __Knock Knock - Portfolio Project 2__

![image showing the responsiveness of the homepage](https://i.ibb.co/JkbW9PC/Screenshot-2023-10-02-at-10-17-26.png)

Welcome to Knock Knock, an interactive game of chance where you'll face off against the computer in a multi-choice game of luck. The goal? Get lucky three times in a row to emerge victorious!

It is designed to be very simple and nostalgic for players who were fans of th TV show "Takeshi's Castle".

## UX & DESIGN

Given that this website is designed as a single-serving platform, it comprises only one page. The chosen design approach prioritizes simplicity and cleanliness to ensure that it complements, rather than competes with, the central game section of the page.

## USER STORIES

- As a player, I want to be able to hear the theme song by clicking the    "Play Music" button, so that I can have an immersive experience.
  
- As a player, I want to read the game instructions by clicking the "Instructions" button, so that I can understand how to play the    game.
  
- As a player, I want to see the game image and directional buttons on the page, so that I can make choices in the game.
  
- As a player, I want to be able to choose a direction (left, middle, or right) by clicking the corresponding button, so that I can    progress in the game.
  
- As a player, I want the game to indicate if I've successfully ripped through a door or if I've banged into a wall, so that I can       track my progress.
  
- As a player, I want my score to reset to 0 if I bang into a wall, so that I can have a fresh start.
  
- As a player, I want the game to display a winning image and a "Play Again" button if I successfully rip through three doors in a       row, so that I know I've won.
  
- As a player, I want to be able to click the "Play Again" button to reset the game after winning, so that I can play again.
  
- As a player, I want to be able to click the "Reset" button at any time to restart the game, so that I can start over if I choose to.
  
- As a player, I want to know that winning is based on luck and there are no specific strategies, so that I can approach the game with a fair chance.

## WIREFRAMES

![enter image description here](https://i.ibb.co/7Cn3nSM/initial-wireframe.png)

This was the initial wireframe for the project. The final design is very similar to this, with the exception of the "Play Again" button, which was added to the final design. I also decided to remove the vs computer button as it was not necessary for the game.

## COLOUR SCHEME

![enter image description here](https://i.ibb.co/Hxs2mfP/colourscheme.jpg)

## TYPOGRAPHY

I used Google Fonts to choose the typography for this project.

![google font](https://i.ibb.co/9htV8r8/font.png)

## FEATURES

Favicon

![enter image description here](https://i.ibb.co/0Bx3V2Z/Screenshot-2023-10-03-at-09-23-39.png)

The favicon was created using [favicon.io](https://favicon.io/favicon-converter/). I drew an image of General Lee from the TV show Takeshi's Castle and uploaded it to the site. The site then generated a favicon.ico file which I downloaded and added to the project.

Logo

![image of the knock knock logo](https://i.ibb.co/9HcQ7qq/Screenshot-2023-10-03-at-09-18-03.png)
The Logo appears at the top of the page in the center and introduces the name of the game to the user.

Game Settings Buttons

![image of the game settings buttons](https://i.ibb.co/gPYHHCV/Screenshot-2023-10-03-at-09-18-13.png)
The game settings buttons are located at the top of the page and allow the user to play music, read the instructions, reset the game, and play again.

- The play music buttonis in the off state when the page loads. When the user clicks the button, the music starts playing and the button changes to the on state. When the user clicks the button again, the music stops playing and the button returns to the off state. It will play the theme song from the TV show Takeshi's Castle on a loop.

- When the user clicks the instructions button, a modal appears with the game instructions. The user can close the modal by clicking the lets play button or by clicking anywhere outside the modal. The modal is responsive and will resize to fit the screen.

Modal

![image of the modal](https://i.ibb.co/c2W9FkH/Screenshot-2023-10-03-at-09-20-00.png)

The reset button will reset the game to its initial state. It will reset the score to 0 and the game image to the initial image.

Game Area

![image of the game area](https://i.ibb.co/dgwyZxG/Screenshot-2023-10-03-at-09-18-27.png)

The game area is the central section of the page. It contains the game image of the doors and is where the visual changes will take place based on the player's choices. One outcome is that the player will rip through the door and the other is that the player will bang into the wall. The game area contains the directional buttons which the player will use to make their choices and also contains the score counter which will keep track of the player's score. depending on the game state, there is also text displayed below the score counter which will indicate to the player whether they have ripped through the door or banged into the wall.

Score counter

This will go up with each rip and reset with each wall bang. It will reset to 0 if the player clicks the reset button. When it reaches 3, the player wins the game.

![image of the score counter](https://i.ibb.co/9VxwcH1/Screenshot-2023-10-03-at-09-18-35.png)

Game State Text

This will change depending on player choices and outcome.
![image of the game state text](https://i.ibb.co/kmtdMB9/gamestatetedt.jpg)

Directional Buttons

![image of the directional buttons](https://i.ibb.co/s5FJNJ9/Screenshot-2023-10-03-at-09-18-50.png)

The directional buttons are located below the game image and allow the user to make their choices. The buttons are responsive and will resize to fit the screen.

Outcome Images

These will appear when the player has successfully ripped through a door or banged into a wall.

![image of the outcome images](https://i.ibb.co/NsBhVB3/outcomespic.jpg)

Winning image

This will appear once the player has successfully ripped through three doors in a row.

![image of the winning image](https://i.ibb.co/17y4F0b/Screenshot-2023-10-03-at-09-19-34.png)

Play again button

This will appear once the player has successfully ripped through three doors in a row. It will reset the game to its initial state when clicked.

![image of the play again button](https://i.ibb.co/zSPxpKY/Screenshot-2023-10-03-at-09-19-43.png)

## FUTURE IMPLEMENATIONS

In future, I would like to add a game timer which is the lenght of the theme song. It would give the player an added element of pressure and would make the game more challenging.
Future versions of the game could also feature a switch to allow the player to choose between playing against the computer or playing against another player.

## TECHNOLOGIES USED

- HTML5. The project uses HTML5 to create the structure of the website.

- CSS3. The project uses CSS3 to style the website.

- JavaScript. The project uses JavaScript to add interactivity to the website.

- [Google Fonts](https://fonts.google.com/) The project uses google fonts to style the typography of the website.

- [Favicon.io](https://favicon.io/favicon-converter/) The project uses favicon.io to create the favicon for the website.

- [Git](https://git-scm.com/) The project uses Git for version control.

- [GitHub](https://github.com/coatespeter/knock-knock) The project uses GitHub to host the project.

- [GitHub Pages](https://github.com/coatespeter/knock-knock/deployments/github-pages) The project uses GitHub Pages to deploy the project.

- [Visual Studio Code](https://code.visualstudio.com/) The project uses Visual Studio Code as the IDE.

- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) The project uses Chrome DevTools to test and debug the project.

- [W3C Markup Validation Service](https://validator.w3.org/) The project uses W3C Markup Validation Service to validate HTML code.

- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) The project uses W3C CSS Validation Service to validate CSS code.

- [JSHint](https://jshint.com/) The project uses JSHint to validate JavaScript code.

- [procreate](https://procreate.art/) The project uses procreate to create the favicon and all the game images.

## TESTING

## DEPLOYMENT

## LOCAL DEPLOYMENT

## CREDITS
