const slugs = [
  {
    hue: 'red',
    name: 'Spanish dancer',
    latin: 'Hexabranchus sanguineus',
    fact: 'It escapes by flexing its broad mantle in powerful waves, swimming like a flamenco skirt in motion.',
    image: 'spanish-dancer.png',
    video: 'https://www.youtube.com/watch?v=TlxfJCGIxT4',
    credit: 'Wikimedia Commons'
  },
  {
    hue: 'coral',
    name: 'Reticulate goniobranch',
    latin: 'Goniobranchus cf. reticulatus',
    fact: 'Its red lattice is a warning sign: chromodorids concentrate defensive chemicals from sponge prey around the mantle edge.',
    image: 'red-reticulate-goniobranchus.png',
    video: 'https://www.youtube.com/watch?v=BKO_Aa-L_0g',
    credit: 'user-supplied cutout'
  },
  {
    hue: 'orange',
    name: 'Gumdrop nudibranch',
    latin: 'Doriopsilla gemela',
    fact: 'It grazes on sponges, and its saturated orange color warns predators that this soft-looking slug is chemically defended.',
    image: 'orange-gumdrop.png',
    video: 'https://www.youtube.com/watch?v=bn1tXHE7CfQ',
    credit: 'Wikimedia Commons'
  },
  {
    hue: 'amber',
    name: 'Berthella',
    latin: 'Berthella aurantiaca',
    fact: 'Its armor is hidden: a broad internal shell protects most of its organs beneath the glowing orange mantle.',
    image: 'orange-berthella.png',
    video: 'https://www.youtube.com/watch?v=vwNHnebyo1I',
    credit: 'user-supplied cutout'
  },
  {
    hue: 'yellow',
    name: 'Umbrella slug',
    latin: 'Tylodina perversa',
    fact: 'Unlike most sea slugs, it keeps an umbrella-shaped external shell and matches the yellow sponges it eats.',
    image: 'oxynoe-olivacea.png',
    video: 'https://www.youtube.com/watch?v=znx6s8K-1bU',
    credit: 'user-supplied cutout',
    imageScale: 1.32
  },
  {
    hue: 'gold',
    name: 'Monterey sea lemon',
    latin: 'Doris montereyensis',
    fact: 'Its yellow, knobbly back mimics the color and texture of the sponges it specializes in eating.',
    image: 'monterey-dorid.png',
    video: 'https://www.youtube.com/watch?v=YssGG2xPXG8',
    credit: 'user-supplied iNaturalist cutout'
  },
  {
    hue: 'green',
    name: 'Lettuce sea slug',
    latin: 'Elysia crispata',
    fact: 'It steals chloroplasts from algae and keeps them photosynthesizing inside its leafy folds for months.',
    image: 'lettuce-sea-slug.png',
    video: 'https://www.youtube.com/watch?v=8hOtj5EQ584',
    credit: 'Wikimedia Commons'
  },
  {
    hue: 'emerald',
    name: 'Eastern elysia',
    latin: 'Elysia chlorotica',
    fact: 'It keeps chloroplasts from Vaucheria algae working inside its cells—one of the longest-lasting cases of kleptoplasty.',
    image: 'eastern-emerald.png',
    video: 'https://www.youtube.com/watch?v=0qY0YlbvKtw',
    credit: 'user-supplied cutout'
  },
  {
    hue: 'mint',
    name: 'Leaf sheep',
    latin: 'Costasiella kuroshimae',
    fact: 'It stores stolen algal chloroplasts inside its leaflike cerata, where they continue capturing light.',
    image: 'leaf-sheep.png',
    video: 'https://www.youtube.com/watch?v=wy60dOaCVfw',
    credit: 'Wikimedia Commons'
  },
  {
    hue: 'blue',
    name: 'Sea swallow',
    latin: 'Glaucus atlanticus',
    fact: 'It eats Portuguese men-of-war, sorts their unfired stinging cells, and packs the strongest into its own fingertips.',
    image: 'blue-dragon.png',
    video: 'https://www.youtube.com/watch?v=0Ako_XDx2-U',
    credit: 'Wikimedia Commons'
  },
  {
    hue: 'iceblue',
    name: "Willan's chromodoris",
    latin: 'Chromodoris willani',
    fact: 'White speckles on its gills and rhinophores act like a fingerprint, separating it from nearly identical blue relatives.',
    image: 'willans-chromodoris.png',
    video: 'https://www.youtube.com/watch?v=MmhTNdwuomE',
    credit: 'user-supplied cutout'
  },
  {
    hue: 'violetblue',
    name: 'Solar-powered nudibranch',
    latin: 'Pteraeolidia ianthina',
    fact: 'It farms photosynthetic algae inside its body and stores stolen stinging cells in the tips of its cerata.',
    image: 'pteraeolidia.png',
    video: 'https://www.youtube.com/watch?v=YA-ASl7ZS0Y',
    credit: 'user-supplied cutout'
  },
  {
    hue: 'magenta',
    name: 'Flabellina',
    latin: 'Flabellina affinis',
    fact: 'It eats stinging hydroids without firing their weapons, then stores the stolen stinging cells in its cerata for defense.',
    image: 'purple-flabellina.png',
    video: 'https://www.youtube.com/watch?v=Sk7UazAL76A',
    credit: 'user-supplied cutout'
  },
  {
    hue: 'purple',
    name: "Bullock's hypselodoris",
    latin: 'Hypselodoris bullockii',
    fact: 'Its vivid mantle is an honest warning: defensive compounds from sponge prey are packed into glands around its edge.',
    image: 'bullocks-hypselodoris.png',
    video: 'https://www.youtube.com/watch?v=nJBO6yx1nX8',
    credit: 'user-supplied cutout'
  },
  {
    hue: 'fairy',
    name: 'Fairy butterfly sea slug',
    latin: 'Cyerce elegans',
    fact: 'When danger strikes, it can cast off its leaflike cerata; the sticky, writhing decoys distract a predator while it escapes.',
    image: 'fairy-butterfly.png',
    video: 'https://www.youtube.com/watch?v=Yqck0kn8KNM',
    credit: 'user-supplied cutout'
  },
  {
    hue: 'rainbow',
    name: "Rainbow Slug",
    latin: 'Babakina anadoni',
    fact: 'The rhinopores atop their head sense chemicals in the water.',
    image: 'rainbow-sea-slug.png',
    video: 'https://www.youtube.com/watch?v=BV5YeKMyHaU',
    credit: 'Wikimedia Commons'
  }
];

const root = document.querySelector('#root');
root.innerHTML = `
  <main style="--accent: var(--red)">
    <header><span class="counter">01 / ${String(slugs.length).padStart(2, '0')}</span><a href="#collection" class="jump">begin the descent ↓</a></header>
    <nav class="colorline" aria-label="Jump to a sea slug"></nav>
    <section id="top" class="hero"><p class="eyebrow">A field guide to the sea’s living spectrum</p><h1>Every color<br>has a <em>slug.</em></h1><p class="intro">Scroll the reef in color order. Each small, soft-bodied marvel is a real animal with an unbelievable trick.</p></section>
    <section id="collection"></section>
    <footer><p>Keep drifting. The ocean is full of color.</p><a href="#top">back to the surface ↑</a><small class="image-note">All images used with permission.</small></footer>
      <section id="action" class="action-panel" aria-labelledby="action-title">
      <div class="action-tab">See them in action</div>
      <div class="action-heading">
        <p class="eyebrow">16 tiny lives, moving</p>
        <h2 id="action-title">Meet them<br><em>in the sea.</em></h2>
        <p>Each name opens an individual YouTube video in a new tab.</p>
      </div>
      <div class="action-list"></div>
    </section>

  </main>`;

const main = root.querySelector('main');
const collection = root.querySelector('#collection');
const colorline = root.querySelector('.colorline');
const actionList = root.querySelector('.action-list');

slugs.forEach(({ hue, name, latin, fact, image, video, imageScale = 1 }, index) => {
  const id = `slug-${index}`;
  const button = document.createElement('button');
  button.type = 'button';
  button.style.background = `var(--${hue})`;
  button.setAttribute('aria-label', `${String(index + 1).padStart(2, '0')}: ${name}`);
  button.title = name;
  button.addEventListener('click', () => document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' }));
  colorline.append(button);

  const article = document.createElement('article');
  article.className = `slug${latin === 'Babakina anadoni' ? ' finale' : ''}`;
  article.id = id;
  article.dataset.index = index;
  article.innerHTML = `<div class="wash"></div><figure class="photo"><img src="images/slugs-cutout/${image}" alt="Photograph of ${name}" loading="${index < 2 ? 'eager' : 'lazy'}" width="1600" height="1100" style="--image-scale: ${imageScale}"></figure><div class="copy"><h2>${name}</h2><p class="latin">${latin}</p><ul><li><b>SUPERPOWER</b></li><li>${fact}</li></ul></div>`;
  collection.append(article);

  const actionLink = document.createElement('a');
  actionLink.className = 'action-link';
  actionLink.href = video;
  actionLink.target = '_blank';
  actionLink.rel = 'noopener noreferrer';
  actionLink.style.setProperty('--link-color', `var(--${hue})`);
  actionLink.setAttribute('aria-label', `Watch ${name} in the sea on YouTube (opens in a new tab)`);
  actionLink.innerHTML = `<span class="action-index">${String(index + 1).padStart(2, '0')}</span><span class="action-dot" aria-hidden="true"></span><span class="action-name">${name}</span><span class="action-watch">watch <span aria-hidden="true">↗</span></span>`;
  actionList.append(actionLink);
});

const buttons = [...colorline.querySelectorAll('button')];
const setActive = (index) => {
  main.style.setProperty('--accent', `var(--${slugs[index].hue})`);
  root.querySelector('.counter').textContent = `${String(index + 1).padStart(2, '0')} / ${String(slugs.length).padStart(2, '0')}`;
  buttons.forEach((button, buttonIndex) => button.classList.toggle('on', buttonIndex === index));
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) setActive(Number(entry.target.dataset.index)); });
}, { threshold: 0.57 });
root.querySelectorAll('.slug').forEach((slug) => observer.observe(slug));
setActive(0);
