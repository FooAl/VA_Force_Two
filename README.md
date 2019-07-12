# VA Force

## Background and Overview

VA Force is a classic arcade-style vertical Shoot em' Up. Players will control a ship while flying through a hail of enemy bullets in an attempt to reach the end of a level.

## Functionality and MVP
- [x] Users will be able to control a character that can shoot projectiles.
- [x] Enemies will have individual health values and can attempt to shoot the player with projectiles.
- [x] There wlil be a single level with an end
- [x] Score that is increased by destroying enemies
- [x] Pickups that enemies drop on death that increase score


## Wireframe

The project will be done on a single canvas, where the game will be rendered along with score.

![](https://github.com/FooAl/JavaScriptProject/blob/master/Screen%20Shot%202019-06-10%20at%204.37.54%20PM.png)

## Architecture and Technology

This project will use these technologies:
* Vanilla Javascript for game logic
* Canvas to render the game on the display

These files will be required for this project:
* Main.js - will hold the scripts to keep things organized
* Board.js - will handle the render and collision logic of the play area.
* Sidebar.js - holds onto the information for the sidebar, such as score
* Score.js - handles updating the score based on what happens in game
* Player.js - will create the logic for controlling the player character
* PlayerProjectile.js - class that has a velocity, hitbox and damage
* Enemy.js - class that has health, movement, what kind of bullet it fires, and what it drops on death
* EnemyProjectile.js - class that has velocity and hitbox information
* Level.txt - file that holds onto how enemies will spawn

## Timeline

## Day 1:
- [x] Setup controllable player
- [x] Setup board
- [x] Setup render loop 

## Day 2:
- [x] Create enemy attack types and movement types
- [x] Player life and respawn system
- [x] Game over system
- [x] Score system
- [x] Add item pickups

## Day 3:
- [x] Generate single level
- [x] Show controls on screen
- [x] Display player statistics

## Day 4:
- [x] improve visuals and polish


## Bonus MVPs:
- [ ] Different player types
- [x] Start screen
- [ ] More enemy movement and attack patterns
- [x] Boss
- [ ] More levels
