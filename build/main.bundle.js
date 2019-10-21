/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var search = function search(event) {
  event.preventDefault();
  var pokenumber = document.getElementById("pokenumber").value;
  var baseURL = "https://pokeapi.co/api/v2/pokemon/";
  $.get(baseURL + pokenumber, function (pokemon) {
    console.log(pokemon);
    document.getElementById("pokename").innerHTML = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    document.getElementById("pokeimage").src = pokemon.sprites.front_default;
    document.getElementById("height").innerHTML = "Height: " + (pokemon.height * .1).toPrecision(2) + " Meters";
    document.getElementById("speed").innerHTML = "Speed: " + pokemon.stats[0].base_stat;
    document.getElementById("specialDefense").innerHTML = "Special Defense: " + pokemon.stats[1].base_stat;
    document.getElementById("specialAttack").innerHTML = "Special Attack: " + pokemon.stats[2].base_stat;
    document.getElementById("defense").innerHTML = "Defense: " + pokemon.stats[3].base_stat;
    document.getElementById("attack").innerHTML = "Attack: " + pokemon.stats[4].base_stat;
    document.getElementById("hp").innerHTML = "HP: " + pokemon.stats[5].base_stat;
  });
};
document.getElementById("pokeform").addEventListener('submit', search);

/***/ })
/******/ ]);