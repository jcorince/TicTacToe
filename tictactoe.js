function TicTacToeGame() {
this.VALID_FIELD_IDS = new Array('TL', 'TC', 'TR', 'CL', 'CC', 'CR', 'BL', 'BC', 'BR');
this.state = new Array();
this.moveCount = 0;
}

TicTacToeGame.prototype = {
}

TicTacToeGame.prototype.reset = function() {
this.state = new Array();
this.moveCount = 0;
};

TicTacToeGame.prototype.getActivePlayer = function() {
if(this.moveCount % 2 == 0)
return 'Player 1';
else
return 'Player 2';
};

TicTacToeGame.prototype.makeMoveTo = function(fieldId) {
if(!this.canSetTo(fieldId)) {
alert('This field is already taken.');
return;
}

var marker = this.getCurrentMarker();
this.state[fieldId] = marker;	
this.moveCount++;
};

TicTacToeGame.prototype.canSetTo = function(fieldId) {
console.log(this.state);
console.log(this.moveCount);
var fieldIsTaken = this.state[fieldId];
return !fieldIsTaken;
};

TicTacToeGame.prototype.getCurrentMarker = function() {
if(this.moveCount % 2 == 0)
return 'X';
else
return 'O';
};

TicTacToeGame.prototype.getFieldTextAt = function(fieldId) {
return this.state[fieldId] || "&nbsp;"; // this fixes the game because it uses the space ("&nbsp") which is inserted in the buttons as a replacement of "X" or "O" when FieldID is empty (as when New Game is clicked)
};

TicTacToeGame.prototype.getValidFieldIds = function() {
return this.VALID_FIELD_IDS;
};


var game = new TicTacToeGame();

function handleFieldClick(fieldId) {
game.makeMoveTo(fieldId);
updateActivePlayer();
updateGameBoard();
}

function newGame() {
game.reset();
updateActivePlayer();
updateGameBoard();
}

function updateActivePlayer() {
$('#playerName').html(game.getActivePlayer());
}

function updateGameBoard() {
for (var i = 0; i < game.getValidFieldIds().length; i++) {
var fieldId = game.getValidFieldIds()[i];
var field = $("#field_" + fieldId + " .ui-btn-text");

field.html(game.getFieldTextAt(fieldId));
}
}