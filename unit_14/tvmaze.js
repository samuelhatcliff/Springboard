const defaultImage = "http://tinyurl.com/missing-tv";
const ul = document.getElementById('episodes-list');

ul.addEventListener('click', (e) => {
    if (e.target === button //check
    ) {
        let id = e.target.parentElement.getAttribute(data - show - id);//check
    }
    populateEpisodes(getEpisodes(id));
})

/** Search Shows
 *    - given a search term, search for tv shows that
 *      match that query.  The function is async show it
 *       will be returning a promise.
 *
 *   - Returns an array of objects. Each object should include
 *     following show information:
 *    {
        id: <show id>,
        name: <show name>,
        summary: <show summary>,
        image: <an image from the show data, or a default imege if no image exists, (image isn't needed until later)>
      }
 */
async function searchShows(query) {
    let queryRes = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`, {
    })
    let objArr = queryRes.data.map(index => {
        let show = index.show;
        return {
            id: show.id,
            name: show.name,
            summary: show.summary,
            image: show.image ? show.image.medium : defaultImage
        };
    });
    return objArr;
}

/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(objArr) {
    const $showsList = $("#shows-list");
    $showsList.empty();

    for (let show of objArr) {
        let button = document.createElement('BUTTON');
        button.setAttribute("class", "episodes_btn")
        button.innerHTML = "Episodes";

        let $item = $(
            `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
         <img class="card-img-top" src=${show.image}>
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             
           </div>
         </div>
       </div>
      `);

        $showsList.append($item);
        $showsList.append(button);

    }
}

/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch(evt) {
    evt.preventDefault();

    let query = $("#search-query").val();
    if (!query) return;

    $("#episodes-area").hide();

    let shows = await searchShows(query);

    populateShows(shows);
});

/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
    let res = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);
    let list = res.data.map(index => {
        return {
            id: index.id,
            name: index.name,
            season: index.season,
            number: index.number
        };
    })
    return list;
}
function populateEpisodes(list) {
    //removes style attribute from section (display:none)
    //changes DOM to add episodes to "episodes-area" section
    for (episode of list) {
        let newEpisode = document.createElement('LI');
        newEpisode.innerText = `${episode.name} (season ${episode.season}, number ${episode.number})`;
        let episodeList = document.getElementById('episodes-list')
        $('section').removeAttr('style');
        episodeList.append(newEpisode);
    }
}
$('div', '.container').on('click', '.episodes_btn', async function (e) {
    //finds ID for show above clicked button, uses id to run getEpisodes and populateEpisodes
    let findId = ($(this).prev()[0])
    let showID = findId.getAttribute('data-show-id')
    let list = await getEpisodes(showID);
    populateEpisodes(list);
})