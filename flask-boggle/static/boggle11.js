
class BoggleGame {
    constructor(boardId) {
        //hides board so that words don't timer doesn't start until board appears
        this.hide = $("#boggle").hide()
        this.words = []
        this.score = 0
        this.seconds = 60;
        this.start = document.getElementById("start")
        this.iniate = this.start.addEventListener("click", this.startTime.bind(this))
        $(".add-word").on("submit", this.handleSubmit.bind(this));
    }

    startTime(evt) {
        $("#boggle").show()
        $("#start").hide()
        this.timer()
        this.minute = setInterval(this.timer.bind(this), 1000);
    }

    async handleSubmit(evt) {
        evt.preventDefault();
        //retrieves text from form, makes sure text has actually been entered
        const $word = $(".word")
        let word = $word.val();
        if (!word) {
            return;
        }
        //sends word to server where it recieves and captures response, sending it to be evaluated by 'message' func
        const req = await axios.get("/word_check", { params: { word: word } });
        const resp = req.data.response
        this.message(resp, word)
        $('.add-word').children('input').val('')
    }
    message(alr, word) {
        // verifies whether or not word exists/is on board/has already been guessed
        if (alr === "not-word") {
            alert(`${word} is not a valid English word`)
            return
        }
        else if (alr === "not-on-board") {
            alert(`${word} does not exist on this board`)
            return
        }
        if (this.words.includes(`${word}`)) {
            alert(`${word} has already been guessed. Keep searching!`)
            return
        }
        else {
            //updates score and list of words found
            alert(`You guessed correctly. You received ${word.length} points!`)
            this.score += word.length;
            $("#score").text(this.score)
            this.words.push(word);
            $("#words-found").append(`<p>${this.words.length}. ${word}</p>`)
        }
    }
    timer() {
        //changes text of timer every second
        let newSec = this.seconds - 1;
        this.seconds = newSec;
        $("#timer").text(newSec)
        if (this.seconds === 0) {
            clearInterval(this.minute);
            this.endGame(this.score);
        }
    }
    async endGame(score) {
        alert("Game is over. Refresh to start new game.");
        const req = await axios.post("/score_check", { score: score });
        return req;
    }
}
