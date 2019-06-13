$(document).ready(function() {
    
    var winCount = 0;
    var loseCount = 0;
    var targetNumber = 0;
    var totalScore = 0;
    var crystalValues = [];

    function restartGame() {
        targetNumber = Math.floor(Math.random() * 102) + 19;
        totalScore = 0;
        crystalValues = [];

        for (var i = 0; i < 4; i++) {
            var value = Math.floor(Math.random() * 12) + 1;
            crystalValues.push(value);
        };

        $("#red-crystal").attr("data-crystalValue", crystalValues[0]);
        $("#blue-crystal").attr("data-crystalValue", crystalValues[1]);
        $("#yellow-crystal").attr("data-crystalValue", crystalValues[2]);
        $("#green-crystal").attr("data-crystalValue", crystalValues[3]);

        $("#target-number").text("Target number: " + targetNumber);
        $("#total-score").text("Your total score: " + totalScore);
    };

    restartGame();

    $(".crystal-image").on("click", function() {
        var value = $(this).attr("data-crystalValue");
        value = parseInt(value);

        totalScore += value;

        if (totalScore === targetNumber) {
            alert("Congratulations, you won!");
            winCount++;
            $("#win-count").text("Wins: " + winCount);
            restartGame();
        } else if (totalScore > targetNumber) {
            alert("You lost, please try again.");
            loseCount++;
            $("#lose-count").text("Losses: " + loseCount);
            restartGame();
        } else {
            $("#total-score").text("Your total score: " + totalScore);
        };
    });
});


