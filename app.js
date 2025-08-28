// --- DATA ---
const WORK_ITEMS = [
  {img: 'images/flying.png', rank: 1, title: `You are flying.' Inside the harrowing 100-mile police chase in Sangamon County`, desc: `Used open source intelligence and visual investigations technique to establish physical route and timeline of police chase and developed custom, interactive animation`, tech: `Google Maps, Leafly, HTML/JS`, collab: true, btnText: `See it live`, url: `https://capitolnewsillinois.com/news/you-are-flying-inside-the-harrowing-100-mile-police-chase-in-sangamon-county/`},
  {img: 'images/campfin.jpg', rank: 2, title: `By the numbers: Unions lead the way on funding state elections in Illinois`, desc: `Developed natural language pipeline to process hundreds of thousands of campaign finance records`, tech: `Adobe Illustrator, Python, pandas, SBERT, Google Sheets`, collab: false, btnText: `See it live`, url: `https://capitolnewsillinois.com/news/by-the-numbers-unions-lead-the-way-on-funding-state-elections-in-illinois/`},
  {img: 'images/voteviz.png', rank: 3, title: `Custom vote visualization`, desc: `Created a custom pipeline that takes PDF vote records and formates the data for a reusable custom visualization to display partisan votes records in the Illinois General Assembly`, tech: `HTML/JS, D3.js, Amazon Web Services`, collab: true, btnText: `See it live`, url: `https://capitolnewsillinois.com/news/lawmakers-move-to-pause-then-further-regulate-carbon-dioxide-pipeline-development/`},
  {img: 'images/assaultweapons.jpg', rank: 4, title: `What to know about Illinois’ assault weapons ban`, desc: `Designed, developed and implemented custom-developed interactive quiz based on new state law and created extensive illustration to strengthen explainer`, tech: `Adobe Illustrator, HTML/JS, Flourish`, collab: false, btnText: `See it live`, url: `https://capitolnewsillinois.com/news/what-to-know-about-illinois-assault-weapons-ban/`},
  {img: 'images/election.png', rank: 5, title: `CNI Election Guide`, desc: `Established contact with every election authority in Illinois to create, design and develop election guide for civics-oriented news platform`, tech: `Adobe Illustrator, Flourish`, collab: true, btnText: `See it live`, url: `https://capitolnewsillinois.com/election-guide/`},
  {img: 'images/madigan.png', rank: 6, title: `Madigan: The Rise and Fall`, desc: `Collabortaively reported details of powerful politician, developed fully custom interactive timeline`, tech: `Adobe Illustrator, HTML/JS`, collab: true, btnText: `See it live`, url: `https://capitolnewsillinois.com/madigan-timeline/`},
  {img: 'images/ctc.png', rank: 7, title: `Illinois child tax credit: who gets it, how much is it?`, desc: `Designed and developed custom interactive for child tax credit eligibility`, tech: `Adobe Illustrator, HTML/JS`, collab: false, btnText: `See it live`, url: `https://capitolnewsillinois.com/news/illinois-child-tax-credit-who-gets-it-how-much-is-it/`},
  {img: 'images/open.png', rank: 8, title: `Open Data Is Here. But What Data Do Governments Publish?`, desc: `Used API endpoints for popular open data platform to aggregate open data publications from hundreds of state and local governments to identify trends in government transparancey nationwide`, tech: `Python, pandas, Flourish`, collab: false, btnText: `See it live`, url: `https://www.govtech.com/biz/data/open-data-is-here-but-what-data-do-governments-publish`},
  {img: 'images/workforce.png', rank: 9, title: `By the Numbers: The Government Technology Workforce`, desc: `Used federal data to identify trends and report on workforce trends for industry magazine`, tech: `Google Sheets, Flourish`, collab: false, btnText: `See it live`, url: `https://www.govtech.com/biz/data/by-the-numbers-the-government-technology-workforce`},
  {img: 'images/cyber.png', rank: 10, title: `Threats, Costs and People: Cybersecurity by the Numbers`, desc: `Used custom-sourced survey data aloingside sources from around cybersecurity industry to create longform interactive inforgraphic and static magazine spread`, tech: `Google Sheets, Infogram`, collab: true, btnText: `See it live`, url: `https://www.govtech.com/biz/data/threats-costs-and-people-cybersecurity-by-the-numbers`},
  /*{img: 'images/results.png', rank: 11, title: `The Results Are In: U.S. Moves Toward Paper-Based Elections`, desc: `Used national databases to identify trends in election machines as the backbone for a data-rich reported feature on election technology`, tech: `Python, pandas, Google Sheets, Flourish`, collab: false, btnText: `See it live`, url: `https://www.govtech.com/biz/data/the-results-are-in-u-s-moves-toward-paper-based-elections`},*/
];

// Visible tech filters (fixed)
const VISIBLE_TECHS = ['HTML/JS','Python','Flourish','D3.js'];

// Soft colors for tech pills
const TECH_COLORS = {
  'Python': { bg:'#eaf2ff', bd:'#d7e6ff', fg:'#1d4ed8' },
  'D3.js': { bg:'#fff0f5', bd:'#ffd7e5', fg:'#be185d' },
  'Flourish': { bg:'#ecfdf5', bd:'#d1fae5', fg:'#047857' },
  'HTML/JS': { bg:'#fff7ed', bd:'#ffedd5', fg:'#9a3412' },
  'Google Sheets': { bg:'#edf7ee', bd:'#d7f0da', fg:'#166534' },
  'Adobe Illustrator': { bg:'#fee6ff', bd:'#f5c7ff', fg:'#81129a' },
  'pandas': { bg:'#eef2ff', bd:'#e0e7ff', fg:'#3730a3' },
  'SBERT': { bg:'#f1f5f9', bd:'#e2e8f0', fg:'#334155' },
  'Amazon Web Services': { bg:'#ebffeb', bd:'#d3fec7', fg:'#0e9238' },
  'Infogram': { bg:'#f0f9ff', bd:'#bae6fd', fg:'#075985' },
  'Google Maps': { bg:'#ecfeff', bd:'#a5f3fc', fg:'#0e7490' },
  'Leafly': { bg:'#fdf2f8', bd:'#fce7f3', fg:'#9d174d' },
  _default: { bg:'#f3f4f6', bd:'#e5e7eb', fg:'#374151' }
};

// map common raw tokens -> canonical keys above
const TECH_KEY = {
  'python':'Python', 'd3.js':'D3.js', 'd3':'D3.js', 'd3js':'D3.js',
  'html':'HTML/JS', 'js':'HTML/JS', 'javascript':'HTML/JS',
  'google sheets':'Google Sheets', 'adobe illustrator':'Adobe Illustrator',
  'pandas':'pandas', 'sbert':'SBERT', 'amazon web services':'Amazon Web Services',
  'infogram':'Infogram', 'google maps':'Google Maps', 'leafly':'Leafly'
};



// Map each item's tech string to these categories
function deriveTechCategories(techString){
  const tokens = techString.split(',').map(t=>t.trim().toLowerCase());
  const cats = new Set();
  tokens.forEach(tok=>{
    if(tok==='d3.js' || tok==='d3' || tok==='d3js') cats.add('D3.js');
    if(tok==='python') cats.add('Python');
    if(tok==='flourish') cats.add('Flourish');
    if(tok==='html/js' || tok==='html' || tok==='js' || tok==='javascript') cats.add('HTML/JS');
  });
  return cats;
}

// --- SLIDES ---
const SLIDES = [
  /*{ id:'welcome', type:'text', title:'Welcome', html:`<p class="lead">Minimalist swipeable portfolio demo. Swipe or use arrows.</p>` },*/
  { id:'portrait', type:'portrait', title:'', image:'images/selfp.jpg', copy:`
      <h3>Hi. I'm Andrew.</h3>
      <p>I’m a data journalist and developer focused on turning messy civic data into stories that help people. I build approachable interactives, fast pipelines, and clean visuals, then I work with reporters and editors to ship them. My background blends reporting, visual design, product thinking, and research — so I love projects that cross boundaries. Lately I’ve been exploring natural-language workflows for document sets and custom visual systems for newsroom- and project-wide deployment. Off the clock: coffee, bikes, photogrpahy. If you’re hiring for someone who can report, prototype, and push to prod, let’s talk.<br><br>Swipe or use the arrow buttons to navigate.</p>` },
  { id:'experience', type:'text', title:'', html:`
    <div class="container">
      <p class="lead">
        What do I bring to the table? 
      </p>
      <p> My <a href="https://drive.google.com/file/d/1v1II94Y--juXfuYfMBY5ARWN5m2NdRgi/view">resume</a>, has the recent milestones of my job history, but here's the stuff you actually need to know about me: 
        <ul>
          <li style="margin-bottom: 10px;"><b>10 years in the industry, more than 5 years full time,</b> mostly focused on Illinois government and politics
          <li style="margin-bottom: 10px;">Coordinated <b>data, graphics and guides</b> for statewide, nonprofit newsroom
          <li style="margin-bottom: 10px;">Built a <b>national data journalism beat</b> for industry magazine 
          <li style="margin-bottom: 10px;"><b>Taught <a href="https://github.com/drewjayadams/how-to-data">seminars and workshops</a> on data journalism</b> at University of Illinois Springfield and Southern Illinois University
          <li style="margin-bottom: 10px;">Handled research and was the primary author on a <b>newsroom-wide, award-winning investigation</b> into PPP loans in 2020
          <li style="margin-bottom: 10px;">Led research on academic projects dealing with <b>gun violence in downstate Illinois</b> and sentiment in popular press toward <b>climate change-related technology</b>  
        </ul>
        <br>Don't just take my word for it. Let me show you what I can do. 
      </p>
    </div>` 
  },
  { id:'demo-1',
    type:'text',
    title:'',
    html: `
      <div class="demo1-wrap">
        <div class="demo1-grid" role="group" aria-label="Demo 1 layout">
          <div class="demo1-pane demo1-pane--a" aria-label="Section A (gif placeholder)"></div>
          <div class="demo1-pane demo1-pane--b">
            <div class="demo1-copy">
              <h3>I find, scrape and clean data.</h3>
              <p>
              As a quick demo, here's an example. Here's the <a href="https://github.com/drewjayadams/bgascrape/blob/main/README.md">real code</a> I used to scrape every investigation that Illinois Answers Project has published.
              <br><br> And here's the <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRDjjmY93YCSaPC0wtztFka3dTLKvyRRm1IIsI4w_NqBifrB5CbMd3kp2uEVkkS4XzpR_KmzTv7k4S3/pubhtml">results</a> for the past five years. 
              <br><br> I've created, cleaned and used datasets pulled from FOIA requests, lobbying and ethics disclosures, news archives, government websites and more. 
              </p>
            </div>
          </div>
          <div class="demo1-pane demo1-pane--c" aria-label="Section C (gif placeholder)"></div>
        </div>
      </div>
    `
  },
  { id: 'demo-2', type: 'demo2', title: '', html: `
    <div class="demo2">
      <div class="demo2-copy">
        <div>
          <h3>I use statistics to find the story.</h3>
          <p>
            Statistics, mathematics and modeling are integral tools for nuanced investigations. Here's an example. I took approximately 3.5 million voting records from the Illinois House of Representatives and calculated the percentage of time each lawmaker cast the same vote as each other lawmaker. 
            <br><br>From there, I used a basic multidimensional scaling method (related to method used by <a href="https://voteview.com/about">Voteview</a>, the <a href="https://www.texastribune.org/2025/06/17/texas-house-2025-conservative-liberal-ranking/">Texas Tribune</a> and others) and assigned each lawmaker an "ideology" score. 
            <br><br>And then I whipped up a custom D3.js chart to sum up the results. (Democrats are 75% more ideologically similar since the current speaker took over. Interesting.) 
          </p>
        </div>
      </div>
      <div id="demo2-chart" class="demo2-root demo2-chart"></div>
    </div>
  `},
  /*{ id:'table-intro', type:'text', title:'Selected Work: Context', html:`
    <div class="container">
      <p class="lead">I can ship product and file copy.</p>
        <p>
          I am a technologist and I enjoy developing products. But in my heart I am a journalist. I thrive on deadlines and pride myself on filing clean copy. I've published dozens of major projects and worked on hundreds of stories. I've collected a few recent ones on the next page in a searchable, filterable table.
        </p>
    </div>` },*/
  { id:'work-table', type:'table', title:'Selected Work (Filter & Sort)' },
  { id:'pitch', type:'text', title:'', html: `
  <div class="container pitch">
    <h3>What I'm thinking about these days</h3><p style="text-align:center; font-style:italic;">(these aren't pitches, but subjects about which I might pitch)<br></p>
    
    <br><p style="text-align:center;"><b>
        These are the technical issues that I'm drawn to right now — big methodology problems with data and interactive journalism that interest me.   
    </b></p><br>
      
    <div class="pitch-list" role="list">
      <article class="pitch-item" role="listitem">
        <h4>Mobile-first investigations</h4>
        <p>It’s hard to reach young audiences with longform narrative, but mobile-first writing and page design can package stories for a wider audience.</p>
        <p style="font-style:italic;"><br>Possible projects: project specific PWAs and apps, new formats (like this website) </p>
      </article>  
      
      <article class="pitch-item" role="listitem">
        <h4>Internal and external tool building</h4>
        <p>I want to create a suite of tools and standards for journalists in Illinois that can benefit them</p>
        <p style="font-style:italic;"><br>Possible projects: data guides, legislative bill and vote tracking, centralized platform for IL datasets, database reporting</p>
      </article>
      
      <article class="pitch-item" role="listitem">
        <h4>Political modeling</h4>
        <p>Statistics and data analytics are powerful tools that are rarely applied in Illinois’ business and government beats. </p>
        <p style="font-style:italic;"><br>Possible projects: assisting traditional reporters with stories, cleaning data and providing early insights </p>
      </article>
      
      <article class="pitch-item" role="listitem">
        <h4>Community building </h4>
        <p>What would it look like for everyone in the city to send photos of a common code violation? Could journalism learn from guerilla marketing? Think of the restraint chair booklets.</p>
        <p style="font-style:italic;"><br>Possible projects: custom subsites and forums, real world publishing </p>
      </article>
      
      <article class="pitch-item" role="listitem">
        <h4>Internal standards and practices </h4>
        <p>Data journalists often work like staff photographers on stories and I'm intersted in how to integrate data lead-generation earleir into traditional reporting projects for collaborations.</p>
        <p style="font-style:italic;"><br>Possible projects: internal tools, offering pitches for other people</p>
      </article>
      
      <article class="pitch-item" role="listitem">
        <h4>News app development</h4>
        <p>I've begun to work on "second-person" news, where individuals can learn things about their own situation through responsive web design and storytelling.</p>
        <p style="font-style:italic;"><br>Possible projects: quizes, lookup tools, reference guides</p>
      </article>
      

      
      </div>      
      <br><p style="text-align:center;"><b>
        Here are the subject areas I'm drawn to. I have sourcing, reporting and published work in all of these areas. 
      </b></p><br>
      <div class="pitch-list" role="list">
      <article class="pitch-item" role="listitem">
        <h4>Lobbying expenditures</h4>
        <p>Lobbying disclosures, while imperfect, reveal important trends. Preliminary analysis has promising results on </p>
        <p style="font-style:italic;"><br>Possible projects: network of lobbying contracts, database of non-compliant lobbyists </p>
      </article>

      <article class="pitch-item" role="listitem">
        <h4>Board & commission vacancies</h4>
        <p>Board seats are often left strategically empty to stop policy from being implemented. Many seats come with high salaries.</p>
        <p style="font-style:italic;"><br>Possible projects: dashboard of vacant positions, network analysis of appointees and donors </p>
      </article>

      <article class="pitch-item" role="listitem">
        <h4>Economic development</h4>
        <p>The state has cut billions of dollars of tax breaks to businesses and often gives executives to those companies seats on foreign “trade missions.” </p>
        <p style="font-style:italic;"><br>Possible projects: network analysis of business executives and political connections, budget analysis of lost tax revenue </p>
      </article>

      <article class="pitch-item" role="listitem">
        <h4>Conflicts of interest</h4>
        <p>State lawmakers and regulators regularly face no recourse for voting in line with their conflicts of interest (and there is data to demonstrate it). </p>
        <p style="font-style:italic;"><br>Possible projects: database of conflicts </p>
      </article>

      <article class="pitch-item" role="listitem">
        <h4>Clean energy funding</h4>
        <p>State-backed clean energy projects often fold after their “clean energy credits” are sold and used in marketing materials. </p>
        <p style="font-style:italic;"><br>Possible projects: narrative reporting built on data from grid operators </p>
      </article>

      <article class="pitch-item" role="listitem">
        <h4>Surveillance technology</h4>
        <p>The state regularly faces data breaches, and it often sells and buys personal data of Illinois citizens with little oversight. Already have some concerning data from ILSOS.</p>
        <p style="font-style:italic;"><br>Possible projects: tracking citizen data through sales, identifying data broker state vendors </p>
      </article>
    </div>
    <br><br><br><br><br>
  </div>
` },
  { id:'outro', type:'text', title:'', html: `
    <div class="container">
      <h3>Let’s keep the conversation going</h3>
      <p class="lead">
        Questions or ideas? Email me at
        <a href="mailto:drew.jay.adams@gmail.com">drew.jay.adams@gmail.com</a>
        or call <a href="tel:+13122911417">312-291-1417</a>.
      </p>
      <p>
        Find me on
        <a href="https://x.com/drewjayadams" target="_blank" rel="noopener">X</a> ·
        <a href="https://www.linkedin.com/in/andrew-adams-2897b914a/" target="_blank" rel="noopener">LinkedIn</a> ·
        <a href="https://bsky.app/profile/drewjayadams.bsky.social" target="_blank" rel="noopener">Bluesky</a> ·
      </p>
    </div>` 
  },

];

// --- APP ---
const app = document.getElementById('app');
const track = document.getElementById('track');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
let index = 0;
let slideEls = [];

const el = (html)=>{ const d=document.createElement('div'); d.innerHTML=html.trim(); return d.firstElementChild; };

function render(){
  track.innerHTML='';
  slideEls = SLIDES.map(s=>{
    const sec = document.createElement('section');
    sec.className = `slide slide--${s.type}`;
    sec.dataset.id = s.id; 
    sec.id = s.id;
    sec.dataset.slideId = s.id;
    sec.setAttribute('data-id', s.id);

    const body = document.createElement('div');
    body.className = 'slide__body';
    
    if (s.id === 'pitch') sec.classList.add('slide--pitch');

    if(s.type === 'text'){
      const cont = el(`<div class="container">${s.html || ''}</div>`);
      body.append(cont);
    }
    if (s.type === 'demo2') {
      const cont = el(s.html);
      body.append(cont);
      const chartRoot = cont.querySelector('#demo2-chart');
      if (chartRoot && typeof drawDemo2 === 'function') {
        drawDemo2(chartRoot);
      }
    }
    if(s.type === 'portrait'){
      body.append(buildPortrait(s));
    }
    if(s.type === 'table'){
      body.append(buildTableUI());
    }

    // no header at all
    sec.append(body);
    track.append(sec);
    return sec;
  });
}

// --- Hash helpers (kept for table filter sync) ---
function parseHash(){
  const m = location.hash.match(/^#\/([^?]+)(?:\?(.*))?$/);
  const out = { id: m? decodeURIComponent(m[1]) : '', params: {} };
  if(m && m[2]) new URLSearchParams(m[2]).forEach((v,k)=> out.params[k]=v);
  return out;
}
function setHash(id, params){
  const qs = params && Object.keys(params).length ? '?' + new URLSearchParams(params).toString() : '';
  const newHash = `#/${encodeURIComponent(id)}${qs}`;
  if(location.hash !== newHash) history.replaceState(null,'', newHash);
}

// --- Portrait UI ---
function buildPortrait(s){
  const hero = document.createElement('div'); hero.className = 'hero';
  hero.style.backgroundImage = `url('${s.image}')`;
  const copy = document.createElement('div'); copy.className = 'hero__copy';
  copy.innerHTML = s.copy || '';
  hero.append(copy);

  // Ensure the BOTTOM of the copy stays ABOVE the vertical midline
  const position = ()=>{
    const heroH = hero.clientHeight || 0;
    const copyH = copy.offsetHeight || 0;
    const clearance = 16; // px above the midline
    let topPx = heroH * 0.5 - copyH - clearance;
    const minTop = heroH * 0.08; // keep some air at the very top
    if(!isFinite(topPx)) topPx = 0;
    copy.style.top = Math.max(minTop, topPx) + 'px';
  };
  requestAnimationFrame(position);
  if (window.ResizeObserver){
    const ro = new ResizeObserver(position);
    ro.observe(hero); ro.observe(copy);
    hero._ro = ro;
  } else {
    window.addEventListener('resize', position);
  }

  return hero;
}

// --- Table UI ---
function buildTableUI(){
  const wrap = document.createElement('div'); 
  wrap.className='container';
  
  // Intro copy ABOVE the table (same text as the table-intro slide)
  const intro = document.createElement('div');
  intro.className = 'table-intro';
  intro.innerHTML = `
    <h3><br>I ship product and file copy.</h3>
    <p class="muted">
      I am a technologist and I enjoy developing products. But in my heart I am a
      journalist. I thrive on deadlines and pride myself on filing clean copy. I've
      published dozens of major projects and worked on hundreds of stories. I've
      collected a few recent ones below in a searchable, filterable table.
    </p><br><br>
  `;
  wrap.appendChild(intro);           // ⟵ append BEFORE tools/table


  // Tools (search, collab, chips)
  const tools = document.createElement('div'); tools.className='tools';
  const search = document.createElement('input'); search.className='input'; search.type='search'; search.placeholder='Search title, description, tech…'; search.setAttribute('aria-label','Search');
  const onlyCollabLabel = document.createElement('label'); onlyCollabLabel.className='label';
  const onlyCollabInput = document.createElement('input'); onlyCollabInput.type='checkbox'; onlyCollabInput.className='checkbox';
  onlyCollabLabel.append(onlyCollabInput, document.createTextNode('Collaboration only'));

  const chipRow = document.createElement('div'); chipRow.className='chips';
  const makeChip = (name)=>{ const b=document.createElement('button'); b.type='button'; b.className='chip'; b.setAttribute('data-tech', name); b.setAttribute('aria-pressed','false'); b.textContent=name; return b; };
  VISIBLE_TECHS.forEach(t=> chipRow.appendChild(makeChip(t)));

  tools.append(search, onlyCollabLabel, chipRow);
  wrap.append(tools);

  // Table
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const trHead = document.createElement('tr');
  const headers=[
    { key: null, label: '' }, 
    {key:'title',label:'Title'},
    {key:'desc',label:'Description'},
    {key:'tech',label:'Tech used'},
    {key:'collab',label:'Collaboration?'},
    {key:null,label:'Link'}
  ];
  headers.forEach(h=>{ const th=document.createElement('th'); th.textContent=h.label + ' '; if(h.key){ th.setAttribute('data-key',h.key); const s=document.createElement('span'); s.className='sort'; th.appendChild(s);} trHead.appendChild(th); });
  thead.appendChild(trHead);
  const tbody = document.createElement('tbody');
  table.append(thead, tbody);
  wrap.append(table);

  // State
  let sortKey='rank', sortDir='asc';
  let onlyCollab=false; let query='';
  const selectedTech = new Set();

  // Sticky offset helper (handles chips wrapping + body padding top)
  const updateStickyOffsets = ()=>{
    requestAnimationFrame(()=>{
      const scroller = wrap.closest('.slide__body');
      const padTop = parseFloat(getComputedStyle(scroller).paddingTop) || 0;
      const offset = tools.getBoundingClientRect().height + padTop;
      scroller.style.setProperty('--sticky-offset', offset + 'px');
    });
  };

  // Hash -> initial state
  const { params } = parseHash();
  if(params.q){ query = params.q; search.value = params.q; }
  if(params.collab==='1'){ onlyCollab = true; onlyCollabInput.checked = true; }
  if(params.tech){
    const allowed = new Set(VISIBLE_TECHS);
    params.tech.split(',').forEach(t=>{ const tt=t.trim(); if(allowed.has(tt)) selectedTech.add(tt); });
  }
  if(params.sort){ const [k,d] = params.sort.split(':'); if(k) sortKey=k; if(d==='desc') sortDir='desc'; }

  const saveHash = ()=>{
    const p = {};
    if(query) p.q=query;
    if(onlyCollab) p.collab='1';
    if(selectedTech.size>0) p.tech = Array.from(selectedTech).join(',');
    p.sort = `${sortKey}:${sortDir}`;
    setHash('work-table', p);
  };
  
  // deterministic color per tag (Airtable-ish)
  const _hash = str => { let h=0; for (let i=0;i<str.length;i++) { h=(h<<5)-h+str.charCodeAt(i); h|=0; } return h>>>0; };
  const tagColor = (name) => {
    const h = _hash(name.toLowerCase()) % 360;         // stable hue per name
    return {
      bg: `hsl(${h} 85% 92%)`,                          // soft pastel bg
      bd: `hsl(${h} 60% 75%)`,                          // subtle border
      txt: '#111'                                       // readable text
    };
  };
  
  function renderTagList(techStr){
    const wrap = document.createElement('div');
    wrap.className = 'tech-tags';
    techStr.split(',').map(t=>t.trim()).filter(Boolean).forEach(name=>{
      const tag = document.createElement('span');
      tag.className = 'tech-pill';   // ← was 'tech-tag'
      const {bg, bd, txt} = tagColor(name);
      tag.style.backgroundColor = bg;
      tag.style.borderColor = bd;
      tag.style.color = txt;
      tag.textContent = name;
      wrap.appendChild(tag);
    });
    return wrap;
  }



  const apply = ()=>{
    const q = query.trim().toLowerCase();
    let rows = WORK_ITEMS.filter(it=>{
      const qmatch = !q || it.title.toLowerCase().includes(q) || it.desc.toLowerCase().includes(q) || it.tech.toLowerCase().includes(q);
      const cmatch = !onlyCollab || it.collab;
      const cats = deriveTechCategories(it.tech);
      const tmatch = selectedTech.size===0 || Array.from(selectedTech).some(t=> cats.has(t));
      return qmatch && cmatch && tmatch;
    });
    rows.sort((a,b)=>{
      let A=a[sortKey], B=b[sortKey];
      if(sortKey==='collab'){ A = a.collab?1:0; B = b.collab?1:0; }
      if(typeof A==='string') A=A.toLowerCase();
      if(typeof B==='string') B=B.toLowerCase();
      if(A<B) return sortDir==='asc'?-1:1;
      if(A>B) return sortDir==='asc'?1:-1;
      return 0;
    });
    tbody.innerHTML='';
    rows.forEach(it => {
      const tr = document.createElement('tr');

      // --- NEW: image cell (first column) ---
      const tdImg = document.createElement('td');
      tdImg.className = 'col-img';
      tdImg.setAttribute('data-label',''); // keep mobile label empty
      if (it.img) {
        const img = document.createElement('img');
        img.className = 'thumb';
        img.src = it.img;
        img.alt = it.title || '';
        img.loading = 'lazy';
        tdImg.appendChild(img);
      }
      // --------------------------------------

      const tdTitle = document.createElement('td');
      tdTitle.setAttribute('data-label','Title');
      tdTitle.textContent = it.title;

      const tdDesc = document.createElement('td');
      tdDesc.setAttribute('data-label','Description');
      tdDesc.textContent = it.desc;

      const tdTech = document.createElement('td');
      tdTech.setAttribute('data-label','Tech used');
      tdTech.appendChild(renderTagList(it.tech));

      const tdCollab = document.createElement('td');
      tdCollab.setAttribute('data-label','Collaboration?');
      tdCollab.textContent = it.collab ? 'Yes' : 'No';

      const tdBtn = document.createElement('td');
      tdBtn.setAttribute('data-label','Link');
      const a = document.createElement('a');
      a.className = 'btn';
      a.href = it.url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = it.btnText;
      tdBtn.appendChild(a);

      // Append with image column first
      tr.append(tdImg, tdTitle, tdDesc, tdTech, tdCollab, tdBtn);
      tbody.appendChild(tr);
    });
    updateStickyOffsets();
    updateSortIndicators();
    saveHash();
  };

  const updateSortIndicators = ()=>{
    thead.querySelectorAll('th .sort').forEach(el=> el.textContent='');
    const active = thead.querySelector(`th[data-key="${sortKey}"] .sort`);
    if(active) active.textContent = sortDir==='asc' ? '↑' : '↓';
  };

  thead.addEventListener('click', (e)=>{
    const th = e.target.closest('th[data-key]'); if(!th) return;
    const key = th.getAttribute('data-key');
    if(sortKey === key){ sortDir = sortDir==='asc'?'desc':'asc'; }
    else { sortKey = key; sortDir='asc'; }
    thead.querySelectorAll('th').forEach(th => th.removeAttribute('aria-sort'));
    th.setAttribute('aria-sort', sortDir==='asc'?'ascending':'descending');
    apply();
  });

  search.addEventListener('input', ()=>{ query = search.value; apply(); });
  onlyCollabInput.addEventListener('change', (e)=>{ onlyCollab = e.target.checked; apply(); });
  chipRow.addEventListener('click', (e)=>{
    const chip = e.target.closest('.chip'); if(!chip) return;
    const tech = chip.getAttribute('data-tech');
    if(chip.getAttribute('aria-pressed')==='true'){ chip.setAttribute('aria-pressed','false'); selectedTech.delete(tech); }
    else { chip.setAttribute('aria-pressed','true'); selectedTech.add(tech); }
    apply();
  });

  // Initialize chips visual state
  Array.from(chipRow.children).forEach(ch=>{ if(selectedTech.has(ch.getAttribute('data-tech'))) ch.setAttribute('aria-pressed','true'); });

  // Initial render + first offset measure
  apply();
  window.addEventListener('resize', updateStickyOffsets);
  return wrap;
}

// --- Navigation ---
function goTo(i){
  i=Math.max(0,Math.min(SLIDES.length-1,i));
  index=i;
  const slideW=app.clientWidth;
  track.style.transform=`translateX(${-index*slideW}px)`;
  btnPrev.disabled=index===0; btnNext.disabled=index===SLIDES.length-1;
  const current = SLIDES[index].id;
  // Maintain simple hash per slide; table manages its params itself
  if(current==='work-table'){
    const { params } = parseHash();
    setHash('work-table', params);
  } else {
    setHash(current, {});
  }
  if (current === 'demo-2') ensureDemo2Chart();
}

// Swipe/drag navigation
let drag = null; const DRAG_THRESHOLD = 60; const VELOCITY_MIN = 0.5;
function onPointerDown(e){
  if(e.button !== undefined && e.button !== 0) return;
  if(e.target.closest('input, textarea, select, button, a, label, .btn')) return;
  if (e.target.closest('[data-stop-swipe]')) return;
  drag = { id:e.pointerId, startX:e.clientX, startY:e.clientY, lastX:e.clientX, startT:performance.now(), isHoriz:null, active:true };
  app.setPointerCapture && app.setPointerCapture(e.pointerId);
  document.body.classList.add('dragging');
}
function onPointerMove(e){
  if(!drag?.active) return;
  drag.lastX = e.clientX; const dx = drag.lastX - drag.startX; const dy = e.clientY - drag.startY;
  if(drag.isHoriz === null){ if(Math.abs(dx)>8 || Math.abs(dy)>8){ drag.isHoriz = Math.abs(dx)>Math.abs(dy); } }
  if(drag.isHoriz){
    const slideW = app.clientWidth; const base = -index * slideW; const atEnds = (index===0 && dx>0) || (index===SLIDES.length-1 && dx<0); const damp = atEnds?0.35:1;
    track.style.transform = `translateX(${base + dx*damp}px)`;
  }
}
function onPointerUp(e){
  if(!drag?.active) return;
  const dx = drag.lastX - drag.startX; const dt = performance.now() - drag.startT; const vel = Math.abs(dx)/dt;
  document.body.classList.remove('dragging'); app.releasePointerCapture && app.releasePointerCapture(drag.id);
  if(drag.isHoriz && (dx < -DRAG_THRESHOLD || (vel>VELOCITY_MIN && dx<-20))) goTo(index+1);
  else if(drag.isHoriz && (dx > DRAG_THRESHOLD || (vel>VELOCITY_MIN && dx>20))) goTo(index-1);
  else goTo(index);
  drag = null;
}

let demo2Drawn = false;
function ensureDemo2Chart(){
  if (demo2Drawn) return;
  const root = document.getElementById('demo2-root');
  if (!root) return;
  drawDemo2(root);
  demo2Drawn = true;
}

async function drawDemo2(root){
  const CSV_URL = 'data.csv';
  const raw = await d3.csv(CSV_URL);
  
  // "Last, First" -> "First Last"
  const toFirstLast = (s) => {
    if (!s) return 'Member';
    const parts = s.split(',').map(t => t.trim());
    return parts.length === 2 ? `${parts[1]} ${parts[0]}` : s.trim();
  };

  const data = raw.map(d => ({
    party: (d.party || d.Party || '').trim(),
    x: +((d.spectral_1d_weighted || d.spectral || d.x)),
    year: (d.years || d.year || d.ga || '').trim(),   // <- keep your text "years"
    yLabel: String(d.years ?? d.ga ?? d.district ?? d.District ?? d.y ?? '').trim(),
    name: toFirstLast(d.legislator || d.name || d.member || '') // <- First Last
  }))
  .filter(d => Number.isFinite(d.x) && d.party && d.year);

  // ---- setup ----
  root.innerHTML = '';
  const tooltip = document.createElement('div');
  tooltip.className = 'demo2-tooltip';
  root.appendChild(tooltip);

  const svg = d3.select(root)
    .append('svg')
    .attr('role','img')
    .attr('aria-label','Scatter plot by party and spectral score');

  const margin = { top: 56, right: 16, bottom: 56, left: 110 };

  const color = d3.scaleOrdinal()
    .domain(['Democratic','Republican'])
    .range(['#005cf4','#fa6f6f']);

  const render = ()=>{
    const {width: W, height: H} = root.getBoundingClientRect();
    svg.attr('viewBox', [0,0,W,H]);
    svg.selectAll('*').remove();

    const innerW = Math.max(0, W - margin.left - margin.right);
    const innerH = Math.max(0, H - margin.top - margin.bottom);
    const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);

    // X scale (numeric)
    const xExtent = d3.extent(data, d => d.x);
    const xPad = 0.2;
    const x = d3.scaleLinear()
      .domain([ (xExtent[0] ?? -2) - xPad, (xExtent[1] ?? 2) + xPad ])
      .range([0, innerW]);

    // Y scale (categorical). If labels contain numbers (e.g., "99th"), sort numerically.
    const yDomain = Array.from(new Set(data.map(d => d.yLabel))).sort((a,b)=>{
      const na = +((a.match(/\d+/)||[])[0] ?? NaN);
      const nb = +((b.match(/\d+/)||[])[0] ?? NaN);
      if (Number.isFinite(na) && Number.isFinite(nb)) return na - nb;
      return d3.ascending(a,b);
    });

    const y = d3.scaleBand()
      .domain(yDomain)
      .range([innerH, 0])
      .paddingInner(0.25);

    // grid (vertical)
    g.append('g')
      .attr('stroke', '#e5e7eb')
      .selectAll('line')
      .data(x.ticks(5))
      .join('line')
      .attr('x1', d => x(d))
      .attr('x2', d => x(d))
      .attr('y1', 0)
      .attr('y2', innerH);

    // axes
    g.append('g')
      .attr('transform', `translate(0,${innerH})`)
      .call(d3.axisBottom(x).ticks(W < 520 ? 4 : 6))
      .call(g => g.select('.domain').remove());

    g.append('g')
      .call(d3.axisLeft(y).tickSize(0))
      .call(g => g.select('.domain').remove());

    // ---- axis titles ----
    g.append('text')
      .attr('class', 'axis-title')
      .attr('text-anchor', 'middle')
      .attr('x', innerW / 2)
      .attr('y', innerH + 42)                 // sits below the x-axis
      .text('← more liberal | more conservative → ');

    g.append('text')
      .attr('class', 'axis-title y')
      .attr('transform', 'rotate(-90)')
      .attr('x', -innerH / 2)
      .attr('y', -(margin.left -20))   // push left of tick labels
      .attr('text-anchor', 'middle')
      .text('Session (years)');



    // legend
    const legend = svg.append('g')
      .attr('class','demo2-legend')
      .attr('transform', `translate(${margin.left},${margin.top - 14})`);

    [['Democratic', color('Democratic')], ['Republican', color('Republican')]].forEach(([label, col], i) => {
      const item = legend.append('g').attr('transform', `translate(${i*140},0)`);
      item.append('circle').attr('r',5).attr('cx',0).attr('cy',0).attr('fill',col).attr('stroke','#fff').attr('stroke-width',0.8);
      item.append('text').attr('x',10).attr('y',4).text(label);
    });

    // points (with slight vertical jitter so overlaps are visible)
    const jitter = d3.randomUniform(-3, 3);
    g.append('g')
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('class','demo2-dot')
      .attr('r', 4)
      .attr('cx', d => x(d.x))
      .attr('cy', d => (y(d.yLabel) + y.bandwidth()/2) + jitter())
      .attr('fill', d => color(d.party))
      .attr('tabindex', 0)
      .on('pointerdown', e => e.stopPropagation())
      .on('mouseenter focus', function (e, d) {
        tooltip.style.display = 'block';
        d3.select(this).attr('r', 6);
        tooltip.innerHTML = `
          <strong>${d.name}</strong><br>
          Year: ${d.year}<br>
          Party: ${d.party}<br>
          Ideology score: ${d.x.toFixed(2)}
        `;
      })
      .on('mousemove', function(e){
        tooltip.style.left = e.offsetX + 'px';
        tooltip.style.top  = e.offsetY + 'px';
      })
      .on('mouseleave blur', function(){
        tooltip.style.display = 'none';
        d3.select(this).attr('r', 4);
      });
  };

  const ro = new ResizeObserver(render);
  ro.observe(root);
  render();
}

// Put this near your other helpers
function setSlideOrder(idsInOrder) {
  const byId = Object.fromEntries(SLIDES.map(s => [s.id, s]));
  const reordered = idsInOrder.map(id => byId[id]).filter(Boolean);
  const remaining = SLIDES.filter(s => !idsInOrder.includes(s.id));

  // mutate SLIDES in place (allowed even though it's a const binding)
  const currentId = SLIDES[index]?.id;
  SLIDES.length = 0;
  SLIDES.push(...reordered, ...remaining);

  // re-render and keep you on the same slide if it still exists
  render();
  const i = SLIDES.findIndex(s => s.id === currentId);
  goTo(i >= 0 ? i : 0);
}

setSlideOrder([
  'portrait',
  'experience',
  'demo-intro',
  'demo-1',
  'demo-2',
  /*'table-intro',*/
  'work-table',
  'pitch',
  'outro'
]);

// Init
function init(){
  render();
  btnPrev.addEventListener('click',()=>goTo(index-1));
  btnNext.addEventListener('click',()=>goTo(index+1));
  window.addEventListener('keydown',e=>{ if(e.key==='ArrowLeft') goTo(index-1); if(e.key==='ArrowRight') goTo(index+1); });
  app.addEventListener('pointerdown', onPointerDown);
  app.addEventListener('pointermove', onPointerMove, {passive: true});
  app.addEventListener('pointerup', onPointerUp);
  window.addEventListener('resize', ()=> goTo(index));

  // Always start at Welcome
  setHash('portrait', {});
  goTo(0);
}

window.addEventListener('hashchange', ()=>{
  const m = location.hash.match(/^#\/([^?]+)/);
  const id = m? decodeURIComponent(m[1]) : '';
  const i = SLIDES.findIndex(s=> s.id===id);
  if(i>=0 && i!==index) goTo(i);
});

init();
