var playerTurn = 1;
var person1
var person2
nameCall();
resetGame();
$('button.reset').on('click', resetGame);



function nameCall(){
person1 = prompt("Player 1 name:");

if (person1 != null) {
    $("#name1").text(person1);
    }
person2 = prompt("Player 2 name: ");

if (person2 != null) {
    $("#name2").text(person2);
    }
}



function clearBoard(){
    $('td').removeClass('x o');
    console.log('Board cleared.');
}




function resetGame() {
    clearBoard();
    playerTurn = 1;
    enableClicks();
    showPlayerTurn();
    console.log('Reset clicked');
}




function showPlayerTurn() {
    if(playerTurn == 1) {
    $('#player-turn').text(person1);
    } else{
    $('#player-turn').text(person2);    
    }
}




function playerClicked() {
    console.log('clicked', $(this));
    $(this).off('click');
    
    if (playerTurn == 1) {
        $(this).addClass('x');
        if (checkForWinner() == 'true') {
            alert(person1 + " is the winner.");
            $('td').off('click');
            return;
        }
        playerTurn = 2;
    } else {
        $(this).addClass('o');
        if (checkForWinner() == 'true') {
            alert(person2 + " is the winner.");
            $('td').off('click');
            return;
        }
        playerTurn = 1;
    }
    
    if(checkForWinner() == 'tie') {
        alert("It's a tie game!");
        return;
    }
    showPlayerTurn();
}




function checkForWinner() {
    var s1 = $('#square1').attr('class') || '?';
    var s2 = $('#square2').attr('class') || '?';
    var s3 = $('#square3').attr('class') || '?';
    var s4 = $('#square4').attr('class') || '?';
    var s5 = $('#square5').attr('class') || '?';
    var s6 = $('#square6').attr('class') || '?';
    var s7 = $('#square7').attr('class') || '?';
    var s8 = $('#square8').attr('class') || '?';
    var s9 = $('#square9').attr('class') || '?';
    
    console.log(s1, s2, s3, s4, s5, s6, s7, s8, s9);
    
    if (s1 == s2 && s2 == s3 && s3 != '?'|| 
        s4 == s5 && s5 == s6 && s6 != '?'||
        s7 == s8 && s8 == s9 && s9 != '?'||
        s1 == s4 && s4 == s7 && s7 != '?'||
        s2 == s5 && s5 == s8 && s8 != '?'||
        s3 == s6 && s6 == s9 && s9 != '?'||
        s1 == s5 && s5 == s9 && s9 != '?'||
        s3 == s5 && s5 == s7 && s7 != '?'){ 
        return 'true';
    } else if ($('td.x').length + $('td.o').length < 9) {
        return 'false';     
    }
    return 'tie';
}
    
    
//    if (s1 == 'x' && s2 == 'x' && s3 == 'x' ||
//       s4 == 'x' && s5 == 'x' && s6 == 'x' ||
//       s7 == 'x' && s8 == 'x' && s9 == 'x' ||
//       s1 == 'x' && s4 == 'x' && s7 == 'x' ||
//       s2 == 'x' && s5 == 'x' && s8 == 'x' ||
//       s3 == 'x' && s6 == 'x' && s9 == 'x' ||
//       s1 == 'x' && s5 == 'x' && s9 == 'x' ||
//       s3 == 'x' && s5 == 'x' && s7 == 'x' ){
//        return 'true';
//    } else if (s1 == 'o' && s2 == 'o' && s3 == 'o' ||
//       s4 == 'o' && s5 == 'o' && s6 == 'o' ||
//       s7 == 'o' && s8 == 'o' && s9 == 'o' ||
//       s1 == 'o' && s4 == 'o' && s7 == 'o' ||
//       s2 == 'o' && s5 == 'o' && s8 == 'o' ||
//       s3 == 'o' && s6 == 'o' && s9 == 'o' ||
//       s1 == 'o' && s5 == 'o' && s9 == 'o' ||
//       s3 == 'o' && s5 == 'o' && s7 == 'o' ) {
//        return 'true';      
//    } else if ($('td.x').length + $('td.o').length < 9) {
//        return 'false';     
//    }
//    return 'tie';
//               
//}
    
    
//    var winningStreaks = [
//         [1, 2, 3], [4, 5, 6], [7, 8, 9]
//        ,[1, 4, 7], [2, 5, 8], [3, 6, 9]
//        ,[1, 5, 9], [3, 5, 7]
//    ];
//    var board = [];
//    for (var i = 0; i < winningStreaks.length; i++) {
//        var streak = "";
//        for (var j = 0; j < winningStreaks[i].length; j++) {
//            streak = streak + $('#square' + winningStreaks[i][j]).attr('class');
//        }
//        board.push(streak);
//     }
//    if (board.indexOf('xxx') >= 0 || board.indexOf('ooo') >= 0) {
//        return 'true';
//    }
//    // check for a tie
//    if($('td.x').length + $('td.o').length < 9) {
//        return 'false'; 
//    }
//   return 'tie';
//}

function enableClicks() {
    //Turn off clicks to avoid multiple event listeners.
    $('td').off('click');
    $('td').on('click', playerClicked);
}

