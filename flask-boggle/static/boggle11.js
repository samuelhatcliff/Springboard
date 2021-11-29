class BoggleGame {
    constructor(boardId) {
        this.words = []
        $(".add-word").on("submit", this.handleSubmit.bind(this));
        //why does this belong in the constructor?
    }

    async handleSubmit(evt) {
        evt.preventDefault();
        const $word = $(".word")
        let word = $word.val();
        if (!word) {
            return;
        }
        const resp = await axios.get("/word_check", { params: { word: word } });
        console.log(resp.data.test)
    }

}
