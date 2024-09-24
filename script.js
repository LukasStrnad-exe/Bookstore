let books = [
    {
      "name": "Die Geheimnisse des Ozeans",
      "author": "Clara Meer",
      "likes": 1250,
      "liked": true,
      "price": "19.99",
      "publishedYear": 2018,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
        },
        {
          "name": "Bookworm84",
          "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
        },
        {
          "name": "FantasyFanatic",
          "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
        },
        {
          "name": "SciFiGuru",
          "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
        },
        {
          "name": "NovelLover",
          "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
        }
      ]
    },
    {
      "name": "Der vergessene Pfad",
      "author": "Maximilian Schwarz",
      "likes": 980,
      "liked": false,
      "price": "14.50",
      "publishedYear": 2021,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Die Farben des Himmels",
      "author": "Laura Blau",
      "likes": 1520,
      "liked": true,
      "price": "22.95",
      "publishedYear": 2019,
      "genre": "Romantik",
      "comments": [
        {
          "name": "LeserPeter",
          "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
        },
        {
          "name": "BookLover21",
          "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
        },
        {
          "name": "FantasyNerd",
          "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
        },
        {
          "name": "SciFiEnthusiast",
          "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
        },
        {
          "name": "ReadingAddict",
          "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
        }
      ]
    },
    {
      "name": "Das Rätsel der Zeit",
      "author": "Alexander Weiss",
      "likes": 750,
      "liked": false,
      "price": "18.00",
      "publishedYear": 2020,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BuchKenner",
          "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
        },
        {
          "name": "LeseWurm",
          "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
        }
      ]
    },
    {
      "name": "Der letzte Wächter",
      "author": "Sabine Grün",
      "likes": 1300,
      "liked": true,
      "price": "16.75",
      "publishedYear": 2017,
      "genre": "Fantasy",
      "comments": []
    },
    {
      "name": "Im Schatten des Mondes",
      "author": "Philipp Silber",
      "likes": 890,
      "liked": false,
      "price": "12.30",
      "publishedYear": 2022,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "BücherLiebhaber",
          "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
        },
        {
          "name": "Leseratte",
          "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
        }
      ]
    },
    {
      "name": "Jenseits der Sterne",
      "author": "Oliver Schwarz",
      "likes": 1450,
      "liked": true,
      "price": "21.00",
      "publishedYear": 2015,
      "genre": "Science-Fiction",
      "comments": [
        {
          "name": "Leser123",
          "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
        }
      ]
    },
    {
      "name": "Das verborgene Königreich",
      "author": "Elena Gold",
      "likes": 920,
      "liked": false,
      "price": "17.50",
      "publishedYear": 2020,
      "genre": "Fantasy",
      "comments": [
        {
          "name": "Bookworm92",
          "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
        }
      ]
    },
    {
      "name": "Liebe in Zeiten des Krieges",
      "author": "Emilia Rot",
      "likes": 1800,
      "liked": true,
      "price": "19.99",
      "publishedYear": 2016,
      "genre": "Romantik",
      "comments": [
        {
          "name": "Bibliophile23",
          "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
        },
        {
          "name": "StorySeeker",
          "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
        },
        {
          "name": "SciFiExplorer",
          "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
        }
      ]
    }
  ]

function render(){

  document.getElementById("containerBooks").innerHTML =``;

  for(i = 0; i <books.length ; i++){ 

    let book = books[i];
  
    document.getElementById("containerBooks").innerHTML +=`
              ${renderTitel(book)}
              ${renderShowcase()}
              ${renderInfos(book)}
              ${renderCommentSection(book,i)}
    `;
  }
}

function renderTitel(book){
  return `
  <div class="book">
    <div class="titel">
      <h3>${book ["name"]}</h3>
    </div> `
}

function renderShowcase(){
  return `
    <div class="showcase">
      <img src="img/book_muster.png" alt="book">
    </div>`
}

function renderInfos(book){
  return `
    <div class="infos">
      <div class="flex_space_between">
        <div class="price">
          <h3><p class="red_color">${book ["price"]}€</p></h3>
        </div>
        <div class="likes">
          ${book ["likes"]}
          <img src="img/hearth_white.png" alt="">
        </div>
      </div>
      <div class="description">
        <div class="description_key">
          <b>Author <br>
          Erscheinungsjahr <br>
          Genre</b>
        </div>
        : <br>
        : <br>
        : 
        <div class="description_value">
          ${book ["author"]} <br>
          ${book ["publishedYear"]} <br>
          ${book ["genre"]}
        </div>
      </div>
    </div>
  `
}

function renderCommentSection(book){
  return `
    <div class="comment_section">
      	<div class="comment_headline">
          <b>Kommentare:</b>
        </div>
              ${renderComments(book)}
        <div class="comment_overview">
          <div class="comment_user">
            [Bookworm84]
          </div>
          <div class="comments">
            :Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.
          </div>
        </div>
        <div class="comment_write">
          <label for="comment_input">
            <input placeholder="Schreibe dein Kommentar..." type="text">
          </label>
          <button>
            <img src="img/senden.png" alt="senden">
          </button>
        </div>
      </div>
    </div>
  `
}

function renderComments(book,i){

  let CommentUser = book[comments[i["name"]]]

    return`
      <div class="comment_overview">
        <div class="comment_user">
          [${CommentUser}]
        </div>
        <div class="comments">
            :Sprich deutsch du Hurensohn
        </div>
      </div>
    `
}