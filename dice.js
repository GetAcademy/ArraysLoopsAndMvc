// model
var diceCount = 10;
var diceValues = [];
var diceIsHeld = [];
var diceSymbols = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

// view
function updateView() {
    var html = '';
    for (let i = 0; i < diceValues.length; i++) {
        let diceValue = diceValues[i];
        let isHeldClass = '';
        if (diceIsHeld[i]) isHeldClass = 'isHeld';
        html += `
             <div 
                onclick="hold(${i})"
                class="${isHeldClass} dice"
                style="
                     color: 
                         rgb(${diceValue * 42},${255 - diceValue * 42}, 0)
                       "
                 >
                 ${diceSymbols[diceValue]}
             </div>`;
    }
    document.getElementById('app').innerHTML = html;
}

// controller
roll();
function roll() {
    for (var i = 0; i < diceCount; i++) {
        if (!diceIsHeld[i]) {
            diceValues[i] = Math.ceil(Math.random() * 6);
        }
        diceIsHeld[i] = false;
    }
    updateView();
}

function hold(index) {
    diceIsHeld[index] = !diceIsHeld[index];
    updateView();
}
