# HTML5 Slider

## About

HTML5 Slider is an amazing framework for HTML presentations on the iPad (and other platforms, see below).

Simply swipe, click or use the arrow keys to navigate between slides. It’s that easy.

## Platforms supported:

All major modern browsers, including:

- Mobile Safari on the iPad
- Webkit browsers (Chrome, Safari…)
- Firefox >= 5
- Opera >= 11.5
- IE >= 9 (not tested yet)

## How does it work?

Basically, the animation part relies on CSS3 transitions and transforms.

The javascript part uses the light framework [Zepto.js](http://zeptojs.com/) to detect finger swipes and navigate through the DOM.

## Customizing

With s.scss, you can easily customize the slider's height and width (this is coded in [sass](http://sass-lang.com), please don’t freak out and read instructions at the top of the file).

## Todo

Hopefully, some of you are going to fork the project and give me some feedback, so we can improve this HTML5 Slider together.

I am not a good JavaScript developer. The code needs a lot of refactoring and cleaning, but you get the idea. Pull requests are welcome ;)

- Javascript refactoring
- Some kind of history support (previous / next)
- More effects
- Smoother transition functions
- Speed optimisations