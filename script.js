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

load();

function render(){
  document.getElementById("containerBooks").innerHTML =``;
  for(i = 0; i <books.length ; i++){
    let book = books[i];
    document.getElementById("containerBooks").innerHTML +=`
              ${renderTitel(book)}
              ${renderShowcase()}
              ${renderInfos(book)}
              ${renderCommentSection(i,book)}
    `;
    renderComment(book,i);
    save();
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
          ${renderHearth(book,i)}
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

function renderCommentSection(i){
  return `
    <div class="comment_section">
      	<div class="comment_headline">
          <b>Kommentare:</b>
        </div>
        <div class="comments_container" id="commentsContainer${i}">
        </div>
        <div class="comment_write">
          <label for="comment_input">
            <input placeholder="Schreibe dein Kommentar..." type="text" id="commentInput${i}">
          </label>
          <button onclick="addComment(${i})">
            <img src="img/senden.png" alt="senden" >
          </button>
        </div>
      </div>
    </div>
  `
}

function renderComment(book, i){
  let comment_length = book.comments;
  if (comment_length == 0){
    document.getElementById("commentsContainer"+i).innerHTML +=`
        ${renderComment0()}
      `;
  } else {
    for(y = 0; y <comment_length.length ; y++){ 
      let user = book.comments[y].name;
      let comment = book.comments[y].comment;
      document.getElementById("commentsContainer"+i).innerHTML +=`
        ${renderComment1(user,comment)}
      `;
      }
  }
}

function renderComment0(){
  return`
  <div class="comment_overview">
    <div class="comment_user">
    </div>
    <div class="comments">
        Noch keine kommentare vorhanden.
    </div>
  </div>`
}

function renderComment1(user,comment){
  return`
  <div class="comment_overview">
    <div class="comment_user">
      [${user}]:
    </div>
    <div class="comments">
        ${comment}
    </div>
  </div>`
}

function addComment(i){
  let book = books[i];
  let inputfield = document.getElementById(`commentInput${i}`);
  let input = inputfield.value;

  if (input == "") {
    alert("Bitte Kommentar eingeben");
  } else {
    book.comments.push({ name: "User", comment: input });
  	}
    save();
    render();
}

function renderHearth(book,i){
  if (book.liked) {
    return`
      <button id="redhearth${i}" onclick="dNone('whitehearth${i}','redhearth${i}'); incrementLikes(${i})">
        <img src="img/hearth_red.png" alt="liked">
      </button>
      <button id="whitehearth${i}" class="d-none" onclick="dNone('redhearth${i}','whitehearth${i}'); incrementLikes(${i})">
        <img src="img/hearth_white.png" alt="not liked">
      </button>
      `
  } else {
    return`
      <button id="redhearth${i}" class="d-none" onclick="dNone('whitehearth${i}','redhearth${i}'); incrementLikes(${i})">
        <img   src="img/hearth_red.png" alt="liked">
      </button>
      <button id="whitehearth${i}" onclick="dNone('redhearth${i}','whitehearth${i}'); incrementLikes(${i})">
        <img src="img/hearth_white.png" alt="not liked">
      </button>
      `
  }
}

function dNone(add, remove) { 
  document.getElementById(remove).classList.add('d-none');
  document.getElementById(add).classList.remove('d-none');
}

function incrementLikes(i) {
  let book = books[i];
  if (!book.liked) {
    book.likes++;
    book.liked = true;
  } else {
    book.likes--;
    book.liked = false;
  }
  save();
  render();
}

function save() {
  localStorage.setItem("books", JSON.stringify(books));
}

function load(){
  let data = localStorage.getItem("books");
  books = JSON.parse(data);
}