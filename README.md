# Pre-work - *Omar's Memory Game*

**Omar's Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Omar Torres**

Time spent: **11** hours spent in total

Link to project: https://glitch.com/edit/#!/tranquil-dapper-tourmaline

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Lives and Time restarts after a new game
- [x] Font color/style changed to have a much more video game look
- [x] Timer showcased on screen, pauses when next turn/ pattern

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

- Winner 

(https://github.com/omart980/Memory-Game/blob/main/Winner.gif)

- Lose 

(https://github.com/omart980/Memory-Game/blob/main/Lose.gif)

- Start/ Stop

(https://github.com/omart980/Memory-Game/blob/main/Start:%20Stop.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
  * I used W3Schools for colors, GitHub community, StackOverflow, and YouTube for brief tutorials. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
  * One of the biggest challenges I had was how the sound was not working properly. I am Google Chrome user, and after trying it on 
    multiple browsers, all but Chrome worked. Through the power of the Internet, I managed to find a "security protocol" from 
    Google Chrome that sound will not play until the user has clicked on any web feature. This did not include the "Start/Stop" 
    button. With this in mind, I used a specific function called "context.resume()", which in short, will start the sound using 
    the statement during the methods that it was called in. Fixing this issue made it possible to listen to the sound on Google 
    Chrome during the pattern sequence. 

  * Another challenge was that when clicking the the Start/Stop button in the middle of the sequence, the timer would continue 
    to run. After running a few tests within my functions, I found that the game was still going in the timer function. To fix 
    this, I edited the myTimer() and setTimeout() to not affect one another, but collaboratively, set the start of the timer 
    when the game begins. This issue also helped me reset the time after a user clicked on buttons after the sequence.

  * Another challenge was that in CSS, I wanted to modify the Start/Stop button to have a hoover feature, but in doing so, affected
    my other buttons to have a highlighted, red outline. I had to play around with the shadow until it was more visible on the 
    Start/ Stop button. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
  * After completing this task, I wondered how to make my game website oriented towards other platforms, such as 
    mobile or desktop capabilities. Is there a way to modify my game to have similar functionality in other platforms? 
    Would I need to change the screen size? 
  
  * For making various lines of code, is there a specific structural architecture a developer would need to do to have 
    tidy code? In other words, is there a format for writing effective code in Web Development? 
    
  * Are object-oriented methodologies, such as inheritance or polymorphism, also apply within javascript?
  
  * Within the Web Development field, are users supposed to design the layout to an extent along with UI/ UX designers?


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
  * I would like to have a difficulty level set to this project. For instance, having the option to go from "Easy" to "Hard" mode. This way, it can much more specific interaction with the user. For easy mode, 
    I would like to have more lives, a much slower pace (15 seconds), and more time. Perhaps for hard mode sounds can sound much more similar, one life, and a three second pace.
  
  * Something else I would add would be finding a much smoother tone. I noticed that the tones I used were standard. I would have implemented new sounds that play snippets of ringtones, and the harder the 
    level, the more similar the sounds will sound. 
    
  * Something else I would like to add would be making the user-interface much more polished. I think the way my layout is fixed is acceptable, but I would want to have that feeling as if it were an actual 
    game. Perhaps I would find ways to have some background music, an announcer announcing the game rules, animation transitions between the buttons, or even an accomplishment sound after you completed the game. 



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Omar Torres]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
