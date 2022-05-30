let sections = [
  ['All', 'home'],
  ['Arts', 'arts'],
  ['Health', 'health'],
  ['Travel', 'travel'],
  ['Science', 'science'],
  ['US', 'us'],
  ['World', 'world'],
];
let liLast = document.createElement('p');
let i = 0;

let nav = document.getElementsByTagName('nav')[0];
let main = document.getElementsByTagName('div')[0];

for (i = 0; i < sections.length; i++) {
  let button = document.createElement('button');
  button.innerHTML = sections[i][1];

  nav.append(button);
  button.addEventListener('click', test);
}
document.addEventListener('DOMContentLoaded', (e) => {
  for (i = 0; i < 6; i++) {
    let button = document.createElement('div');
    button.className = 'card';
    button.setAttribute('style', 'display:none;');
    let bookListHtmlMarkup = '';
    bookListHtmlMarkup += `
          <img src="" style="height:200px;object-fit:cover;" alt="...">
          <div class="card-body">
          <small class="text-muted"></small>
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            </div>
            <div class="card-footer">
            <a href="" class="btn btn-primary" target="_blank">Link</a>
            
          </div>
            `;
    button.innerHTML = bookListHtmlMarkup;
    main.append(button);
  }
  category = 'home';
  test();
});
function test() {
  let card_body_style = '';
  let card_link_style = '';
  let card_link_text = '';
  let card_section_style = '';
  let card_footer_style = '';

  switch (this.innerHTML) {
    default:
      card_body_style = 'background-color:#F9AF3E; color:white;';
      card_link_style = 'background-color:#F9AF3E;border:none;';
      card_link_text = 'Read more...';
      card_section_style =
        'background-color:inherit; color:white !important;border:none;';
      card_footer_style = 'border:none;background-color:#F9AF3E; color:white;';
      for (i = 0; i < sections.length; i++) {
        let button = document.getElementsByTagName('button')[i];
        button.setAttribute(
          'style',
          `background-color:#F9AF3E; color:white !important; padding:2vh; border:none; margin:1px;`
        );
        if (button.innerText == this.innerHTML) {
          button.setAttribute(
            'style',
            `background-color:grey; color:white !important; padding:2vh; border:none; margin:1px;`
          );
        }
      }
      break;
    case 'arts':
      card_body_style = 'background-color:#4966D0; color:white;';
      card_link_style = 'background-color:#4966D0;border:none;';
      card_link_text = 'Wanna know more?';
      card_section_style =
        'background-color:inherit; color:white !important;border:none;';
      card_footer_style = 'border:none;background-color:#4966D0; color:white;';
      for (i = 0; i < sections.length; i++) {
        let button = document.getElementsByTagName('button')[i];
        button.setAttribute(
          'style',
          `background-color:#4966D0; color:white !important; padding:2vh; border:none; margin:1px;`
        );
        if (button.innerText == this.innerHTML) {
          button.setAttribute(
            'style',
            `background-color:grey; color:white !important; padding:2vh; border:none; margin:1px;`
          );
        }
      }
      break;
    case 'health':
      card_body_style = 'background-color:#FE6B73; color:white;';
      card_link_style = 'background-color:#FE6B73;border:none;';
      card_link_text = 'interested?';
      card_section_style =
        'background-color:inherit; color:white !important;border:none;';
      card_footer_style = 'border:none;background-color:#FE6B73; color:white;';
      for (i = 0; i < sections.length; i++) {
        let button = document.getElementsByTagName('button')[i];
        button.setAttribute(
          'style',
          `background-color:#FE6B73; color:white !important; padding:2vh; border:none; margin:1px;`
        );
        if (button.innerText == this.innerHTML) {
          button.setAttribute(
            'style',
            `background-color:grey; color:white !important; padding:2vh; border:none; margin:1px;`
          );
        }
      }
      break;
    case 'travel':
      card_body_style = 'background-color:#56B7FF; color:white;';
      card_link_style = 'background-color:#56B7FF;border:none;';
      card_link_text = 'Hmmmm, more?';
      card_section_style =
        'background-color:inherit; color:white !important;border:none;';
      card_footer_style = 'border:none;background-color:#56B7FF; color:white;';
      for (i = 0; i < sections.length; i++) {
        let button = document.getElementsByTagName('button')[i];
        button.setAttribute(
          'style',
          `background-color:#56B7FF; color:white !important; padding:2vh; border:none; margin:1px;`
        );
        if (button.innerText == this.innerHTML) {
          button.setAttribute(
            'style',
            `background-color:grey; color:white !important; padding:2vh; border:none; margin:1px;`
          );
        }
      }
      break;
    case 'science':
      card_link_text = 'Hmmmm, more?';
      for (i = 0; i < sections.length; i++) {
        let button = document.getElementsByTagName('button')[i];
        button.setAttribute(
          'style',
          `background-color:white; color:black !important; padding:2vh; border:none; margin:1px;`
        );
        if (button.innerText == this.innerHTML) {
          button.setAttribute(
            'style',
            `background-color:grey; color:white !important; padding:2vh; border:none; margin:1px;`
          );
        }
      }
      break;
    case 'us':
      card_body_style = 'background-color:#B22234; color:white;';
      card_link_style = 'background-color:#B22234;border:none;';
      card_link_text = 'Do you like it?';
      card_section_style =
        'background-color:inherit; color:white !important;border:none;';
      card_footer_style = 'border:none;background-color:#B22234; color:white;';
      for (i = 0; i < sections.length; i++) {
        let button = document.getElementsByTagName('button')[i];
        button.setAttribute(
          'style',
          `background-color:#B22234; color:white !important; padding:2vh; border:none; margin:1px;`
        );

        if (button.innerText == this.innerHTML) {
          button.setAttribute(
            'style',
            `background-color:grey; color:white !important; padding:2vh; border:none; margin:1px;`
          );
        }
      }
      break;
    case 'world':
      card_body_style = 'background-color:#0064A2; color:white;';
      card_link_style = 'background-color:#0064A2;border:none;';
      card_link_text = 'Sužinok daugiau!';
      card_section_style =
        'background-color:inherit; color:white !important;border:none;';
      card_footer_style = 'border:none;background-color:#0064A2; color:white;';
      for (i = 0; i < sections.length; i++) {
        let button = document.getElementsByTagName('button')[i];
        button.setAttribute(
          'style',
          `background-color:#0064A2; color:white !important; padding:2vh; border:none; margin:1px;`
        );
        if (button.innerText == this.innerHTML) {
          button.setAttribute(
            'style',
            `background-color:grey; color:white !important; padding:2vh; border:none; margin:1px;`
          );
        }
      }
      break;
  }
  if (this.innerHTML == undefined) {
    category = 'home';
  } else {
    category = this.innerHTML;
  }

  fetchPromise = fetch(
    `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=GtDDvUERcUIgbVcj51tdzOULs7Qk1WqH`
  );

  fetchPromise.then((response) => {
    const jsonPromise = response.json();
    jsonPromise.then((json) => {
      let ite = 0;
      json['results'].slice(2, 8).map((item) => {
        let button = document.createElement('div');
        button.className = 'card';
        let news = {};
        news['title'] = item['title'];
        try {
          news['image'] = item['multimedia'][0]['url'];
        } catch (TypeError) {
          news['image'] = 'img/unavailable.png';
        }
        try {
          news['section'] = item['section'];
        } catch (TypeError) {
          news['section'] = 'Not available';
        }
        try {
          news['desc'] = item['abstract'];
        } catch (TypeError) {
          news['desc'] = 'Not available';
        }
        try {
          news['link'] = item['short_url'];
        } catch (TypeError) {
          news['link'] = 'Not available';
        }

        document.getElementsByClassName('card')[ite].removeAttribute('style');
        const elem = document.getElementsByClassName('text-muted')[ite];
        const elem2 = document.getElementsByClassName('card-title')[ite];
        const elem3 = document.getElementsByTagName('img')[ite];
        const elem4 = document.getElementsByTagName('a')[ite];
        const card_body = document.getElementsByClassName('card-body')[ite];
        const card_link = document.getElementsByTagName('a')[ite];
        const card_footer = document.getElementsByClassName('card-footer')[ite];
        const card_text = document.getElementsByClassName('card-text')[ite];
        elem.innerText = news['section'];
        elem2.innerText = news['title'];
        card_text.innerText = news['desc'];
        elem3.setAttribute('src', `${news['image']}`);
        elem4.setAttribute('href', `${news['link']}`);
        card_body.setAttribute('style', `${card_body_style}`);
        card_link.setAttribute('style', `${card_link_style}`);
        elem.setAttribute('style', `${card_section_style}`);
        card_link.innerText = card_link_text;

        card_footer.setAttribute('style', `${card_footer_style}`);
        ite += 1;
      });
    });
  });
}
