# Game of Life [![Build Status](https://travis-ci.org/giamir/game_of_life_js.svg?branch=master)](https://travis-ci.org/giamir/game_of_life_js) [![Coverage Status](https://coveralls.io/repos/github/giamir/game_of_life_js/badge.svg?branch=master)](https://coveralls.io/github/giamir/game_of_life_js?branch=master)

A basic implementation of Conway's game of life in JavaScript built with a TDD approach.

## Rules

The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:

* Any live cell with fewer than two live neighbours dies, as if caused by under-population.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies, as if by over-population.
* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.


_source:_ [wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## Installation Instructions

Not available yet.

## Technologies

* JavaScript
* Karma (testing framework)

## Contributors

[Giamir Buoncristiani](https://github.com/giamir)
