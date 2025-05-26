// ==UserScript==
// @name        DLSite Links+
// @namespace   Loli-A-Best
// @match       *://boards.4chan.org/*/thread/*
// @match       *://boards.4channel.org/*/thread/*
// @match       *://arch.b4k.dev/*/thread/*
// @match       *://archived.moe/*/thread/*
// @match       *://archive.4plebs.org/*/thread/*
// @match       *://archive.palanq.win/*/thread/*
// @match       *://archiveofsins.com/*/thread/*
// @match       *://boards.fireden.net/*/thread/*
// @match       *://desuarchive.org/*/thread/*
// @match       *://thebarchive.com/*/thread/*
// @match       *://warosu.org/*/thread/*
// @version     2.1.1
// @description Provide links and previews for RJ, RE, VJ, DMM, VG, and RG codes as well as ci-en blogs.
// @icon        data:image/png;base64,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
// @downloadURL https://github.com/kani-ge/DLSite-Links-Plus/raw/master/DLSite%20Links%20Plus.user.js
// @updateURL   https://github.com/kani-ge/DLSite-Links-Plus/raw/master/DLSite%20Links%20Plus.user.js
// @grant       GM.xmlHttpRequest
// @run-at      document-idle
// ==/UserScript==
class Chan {
  CIEN = /(?:(?:http[^>\s]+)?ci-en\.dlsite\.com\/creator\/(\d*)(?:\/article\/(\d*))?)/gi;
  DMMCode = /(?:(?:dmm|www|https?)[^>\s]+)?(?:cid=)?(?:d_|DMM)(\d{6})\/?/gi;
  RGCirc = /(?:(?:http|www)?\S*com\S*)?[rv]g(\d{5,8})(?:\.html)?/gi;
  RJCode = /(?:(?:http|www|dlsite)[^>\s]+)?[vr][je]((\d{3,5})\d{3})(?:\.html)?/gi;
  SteamCode = /(?:(?:https?[^>\s]+)?store\.steampowered\.com\/app\/|\ss|^s)(\d+)(?:[^>\s]+)?/gi;

  constructor() {
    switch(location.hostname) {
      case 'boards.4chan.org':
      case 'boards.4channel.org':
        this.threadSelector = '.thread';
        this.postSelector = '.postContainer';
        this.fileSelector = '.fileText';
        break;
      case 'warosu.org':
        this.threadSelector = '.content';
        this.postSelector = '.comment';
        this.fileSelector = '.fileinfo';
        this.addNavBar = true;
        break;
      default:  // assume foolFuuka archive
        if (location.hostname == 'desuarchive.org'){
          this.embedPreview = true;
          this.dataPreview = true;
        }
        if (location.hostname == 'arch.b4k.dev')
          this.dataPreview = true;
        this.threadSelector = '.thread:not(.stub)';
        this.postSelector = '.post';
        this.fileSelector = '.post_file';
        this.opSelector = '.thread:not(.stub) > .text';
        this.opFileSelector = '.thread:not(.stub) > .thread_image_box';
        this.addNavBar = true;
        break;
    }

    this.thread = document.querySelector(this.threadSelector);
    this.initSettings();
    this.html();
    this.css();
    this.lewds = this.hgg2d.querySelector('.hgg2d__lewds');
    this.codes = this.hgg2d.querySelector('.hgg2d__codes');
    this.gridToggle = this.hgg2d.querySelector('.hgg2d__lewdsToggle > a');
    this.jumpLinksToggle = this.hgg2d.querySelector('.hgg2d__jumpLinksToggle > a')
    this.settingsToggle = this.hgg2d__settings.querySelector('.hgg2d__settingsToggle > a');
    this.settingsBox = this.hgg2d__settings.querySelector('.hgg2d__settings');
    this.prev = this.addElement('img', document.body, { class: 'hgg2d__follow' });
    this.prev.style.visibility = 'hidden';
    this.initEventListeners();
    this.toggle();

    /** @type {Set<string>} */
    this.games = new Set();
    if (this.opFileSelector)
      this.work(document.querySelector(this.opFileSelector));
    if (this.opSelector)
      this.work(document.querySelector(this.opSelector));
    document.querySelectorAll(this.postSelector).forEach(el => this.work(el));
  }


  /**
   * creates and adds an element to the document at the specified position
   * @param {string} elementName
   * @param {HTMLElement} target
   * @param {{key:string, value:string}} attributes
   * @param {string} where can be values append | prepend | insertBefore | etc
   */
  addElement(elementName, target = document.body, attributes = {}, where = 'append') {
    /** @type {HTMLElement} */
    const element = this.createElement(elementName, attributes);
    target[where](element);
    return element;
  }

  /**
   * @param {HTMLAnchorElement} anchor
   * @param {string} code
   */
  addCode(anchor, code) {
    const div = this.createElement('div', { class: 'hgg2d__code__container' });
    const clone = anchor.cloneNode();
    clone.append(code);
    div.appendChild(clone);
    this.codes.appendChild(div);
  }

  /**
   * this function and the fetch* helper functrions
   * performs our error checking *and* adds the images to the grid
   * even when the grid is hidden. this allows us to take advantage of the error
   * checked images even for the fallback behavior of displaying previews near
   * the mouse.
   * @param {string} src
   * @param {string} link
   * @param {string} site
   */
  addPreview(src, link, site) {
    const div = this.createElement('div', { class: 'hgg2d__lewds__container' });
    const anchor = this.createElement('a', { href: link, class: 'hgg2d__lewds__preview__link' });
    const img = this.createElement( this.embedPreview ? 'embed' : 'img', { class: 'hgg2d__lewds__preview' });
    const jumpCon = this.createElement('div', { class: 'hgg2d__lewds__jumps' });
    const siteElem = this.createElement('span', { class: `hgg2d__lewds__site ${this.settings.gridSiteLabels ? "" : 'hgg2d-hidden'}` });
    div.appendChild(jumpCon);
    div.appendChild(anchor);
    div.appendChild(siteElem);
    siteElem.textContent = site;
    this.fetchHandler(src, anchor, site);
    this.lewds.appendChild(div);
  }

  /**
   * addPreview helper function, do not call directly
   * @param {string} src
   * @param {HTMLDivElement} anchor
   * @param {string} site
   */
  async fetchHandler(src, anchor, site) {
    let success, img;
    switch (site) {
      case 'dlsite circle':
        const imgGrid = this.createElement('div', { class: 'hgg2d__lewds__circle__grid hgg2d__circle' });
        if (!this.settings.gridCircle)
          anchor.parentNode.classList.add('hgg2d-hidden');
        anchor.appendChild(imgGrid);
        success = await this.fetchCircle(src, imgGrid);
        break;
      case 'ci-en':
        img = this.createElement( this.embedPreview ? 'embed' : 'img', { class: 'hgg2d__lewds__preview hgg2d__ci-en' });
        if (!this.settings.gridCIEN)
          anchor.parentNode.classList.add('hgg2d-hidden');
        anchor.appendChild(img);
        success = await this.fetchCIEN(src, img);
        break;
      case 'dlsite':
      case 'dmm':
        img = this.createElement( this.embedPreview ? 'embed' : 'img', { class: `hgg2d__lewds__preview ${'hgg2d__' + site}` });
        if ( site == 'dlsite' && !this.settings.gridDLSite )
          anchor.parentNode.classList.add('hgg2d-hidden');
        if ( site == 'dmm' && !this.settings.gridDMM )
          anchor.parentNode.classList.add('hgg2d-hidden');
        //if ( site == 'steam' && !this.settings.gridSteam )
          //anchor.parentNode.classList.add('hgg2d-hidden');
        anchor.appendChild(img);
        success = await this.fetchImg(src, img, anchor);
        break;
      case 'steam':
        img = this.createElement( this.embedPreview ? 'embed' : 'img', { class: 'hgg2d__lewds__preview hgg2d__steam' });
        //if (!this.settings.gridSteam)
          //anchor.parentNode.classList.add('hgg2d-hidden');
        anchor.appendChild(img);
        success = await this.fetchSteam(src, img);
        break;
      default:
        success = false;
    }
    if (!success)
      anchor.parentNode.remove();
  }

  /*
   * this function handles fetching images as well as handling
   * rjcodes that link to announce pages
   */
  async fetchImg(src, imgDiv, anchor = null, errors = 0) {
    const chan = this;
    let result;
    await GM.xmlHttpRequest({
      method: 'GET',
      responseType: 'blob',
      url: src,
      onerror: function(response) { result = false; },
      onload: function(response) {
        if (response.status != 200) {
          console.log(src);
          console.log(response.status);
          if (src.includes('dlsite') && errors < 1) {
            let code = src.match(/[RV][JE](\d{2})?\d{6}/g)[1];
            const barCode = chan.codes.querySelector(`a[href*="${code}" i]`);
            const threadLinks = chan.thread.querySelectorAll(`a[href*="${code}" i]`);
            if (src.includes('ana')) {
              src = src.replace(/(https\S+)ana(\S+)_ana(\S+)/, '$1work$2$3');
              barCode.href = barCode.href.replace('announce', 'work');
            } else {
              src = src.replace(/(https\S+)work(\S+?_)(\S+)/, '$1ana$2ana_$3');
              barCode.href = barCode.href.replace('work', 'announce');
            }
            for (const threadLink of threadLinks) {
              threadLink.href = barCode.href;
            }
            if (anchor)
              anchor.href = barCode.href;
            result = chan.fetchImg(src, imgDiv, anchor, 1);
            return;
          }
          result = false;
          return;
        }
        if (chan.dataPreview) {
          const reader = new FileReader();
          reader.onload = (e) => { imgDiv.src = e.target.result };
          reader.readAsDataURL(response.response);
        } else
          imgDiv.src = URL.createObjectURL(response.response);
        result = true;
        return;
      },
    }).catch((e) => { result = false; });
    await result;
    return result;
  }

  async fetchCIEN(src, imgDiv) {
    const chan = this;
    let result = false;
    await GM.xmlHttpRequest({
      method: 'GET',
      url: src,
      onerror: function(response) { result = false; },
      onload: function(response) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(response.responseText, 'text/html');
        const nut = 'https://ci-en.dlsite.com/assets/img/common/pic_acorn.png'
        let img = doc.querySelector('.file-player-image');
        if (!img)
          img = doc.querySelector('.is-creatorHeading > .image');
        result = chan.fetchImg(img ? img.getAttribute('src') : nut, imgDiv);
      },
    }).catch((e) => { result = false; });
    await result;
    return result;
  }

  async fetchCircle(src, imgGrid) {
    let doc;
    await GM.xmlHttpRequest({
      method: 'GET',
      url: src,
      onerror: function(response) { doc = null; },
      onload: function(response) {
        const parser = new DOMParser();
        doc = parser.parseFromString(response.responseText, 'text/html');
      }
    }).catch((e) => {doc = null});
    if (!doc)
      return false;
    const works = (doc.querySelectorAll('.sort_box + ._search_result_list .lazy'));
    let complete = 0;
    for (let i = 0; i < works.length; i++) {
      const work = works[i];
      const img = this.createElement( this.embedPreview ? 'embed' : 'img', { class: 'hgg2d__lewds__circle__preview' });
      const result = await this.fetchImg(work.src, img);
      await result;
      if (result) {
        imgGrid.appendChild(img);
        complete++;
      } else {
        img.remove();
      }
      if (complete >= 4)
        break;
    }
    if (complete == 0) {
      const img = this.createElement( this.embedPreview ? 'embed' : 'img', { class: 'hgg2d__lewds__preview' });
      const result = await this.fetchImg('https://www.dlsite.com/images/web/common/logo/pc/logo-dlsite-r18.png', img);
      await result;
      if (!result)
        return false;
      imgGrid.appendChild(img);
    }
    if (complete == 1) {
      imgGrid.firstChild.classList.remove('hgg2d__lewds__circle__preview');
      imgGrid.firstChild.classList.add('hgg2d__lewds__preview');
    }
    return true;
  }

  async fetchSteam(code, imgDiv) {
    const chan = this;
    const app = `https://store.steampowered.com/api/appdetails?appids=${code}`;
    let result = false;
    await GM.xmlHttpRequest({
      method: 'GET',
      url: app,
      onerror: function(response) { result = false; },
      onload: function(response) {
        const details = JSON.parse(response.response);
        const header = details[code]['data']['header_image'];
        if (!header)
          return false;
        result = chan.fetchImg(header, imgDiv);
      },
    }).catch((e) => { result = false; });
    await result;
    return result;
  }

  /**
   * @param {unknown[]} first
   * @param {unknown[]} second
   * @returns {boolean}
   */
  arrayEquals(first, second) {
    if (first.length !== second.length) {
      return false;
    }
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  }

  barCheck(bar, anchor) {
    if (this.games.has(bar))
      return true;
    this.games.add(bar);
    this.addCode(anchor, bar);
    return false;
  }

  /**
   * create methods should not be called directly
   * @param {string} href
   * @returns {HTMLAnchorElement}
   */
  createCien(href, creator, article) {
    const anchor = this.createElement('a', { class: 'hgg2d__code hgg2d__cien__code', href });
    const bar = 'C' + creator + (article ? ('/A' + article) : '');
    anchor.append(href);
    if (this.barCheck(bar, anchor))
      return anchor;
    this.addPreview(href, anchor.href, 'ci-en');
    return anchor;
  }

  /**
   * create methods should not be called directly
   * @param {string} match
   * @param {string} code
   * @returns {HTMLAnchorElement}
   */
  createCirc(match, code) {
    const [type, prefix] = match.includes('RG') ? ['maniax', 'RG'] : ['pro', 'VG'];
    const href = `https://www.dlsite.com/${type}/circle/profile/=/maker_id/${prefix}${code}.html`;
    const anchor = this.createElement('a', { href: href , class: 'hgg2d__code hgg2d__circle__code'});
    anchor.append(match);
    const bar = `${prefix}${code}`;
    if (this.barCheck(bar, anchor))
      return anchor;
    this.addPreview(href, href, 'dlsite circle');
    return anchor;
  }

  /**
   * create methods should not be called directly
   * @param {string} match
   * @param {string} code
   * @returns {HTMLAnchorElement}
   */
  createDMM(match, code) {
    this.DMMCode.lastIndex = 0;
    const anchor = this.createElement('a', { href: `https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_${code}/`, class: 'hgg2d__code hgg2d__dmm__code' });
    const src = `https://doujin-assets.dmm.co.jp/digital/game/d_${code}/d_${code}pr.jpg`;
    const bar = `DMM${code}`;
    anchor.append(match);
    if (this.barCheck(bar, anchor))
      return anchor;
    this.addPreview(src, anchor.href, 'dmm');
    return anchor;
  }

  /**
   * create methods should not be called directly
   * @param {string} match
   * @param {string} code
   * @param {string} bucket
   * @returns {HTMLAnchorElement} anchor
   */
  createRJ(match, code, bucket) {
    this.RJCode.lastIndex = 0;
    const type = (match.includes('announce') || /[rv]j?a/i.test(match)) ? 'announce' : 'work';
    const circleType = match.includes('VJ') ? 'pro' : 'maniax';
    const prefix = match.includes('VJ') ? 'VJ' : 'RJ';
    const href = `https://www.dlsite.com/${circleType}/${type}/=/product_id/${prefix}${code}.html`;
    const anchor = this.createElement('a', { class: 'hgg2d__code', href });
    anchor.append(match);
    const bar = `${match.includes('RE') ? 'RE' : prefix}${code}`;
    if (this.barCheck(bar, anchor))
      return anchor;
    const round = String(Number(bucket) % 1000 || Number(bucket) === 0 ? Number(bucket) + 1 : Number(bucket)).padStart(bucket.length, '0');
    const pathType = type === 'work' ? 'work' : 'ana';
    const circlePathType = circleType === 'pro' ? 'professional' : 'doujin';
    const src = `https://img.dlsite.jp/modpub/images2/${pathType}/${circlePathType}/${prefix}${round}000/${prefix}${code}${pathType === 'ana' ? '_ana' : ''}_img_main.jpg`;
    this.addPreview(src, anchor.href, 'dlsite');
    return anchor;
  }

  createSteam(match, code) {
    this.SteamCode.lastIndex = 0;
    const anchor = this.createElement('a', { href: `https://store.steampowered.com/app/${code}/`, class: 'hgg2d__code hgg2d__steam__code' });
    //const src = `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${code}/`;
    const bar = `S${code}`;
    anchor.append(match);
    if (this.barCheck(bar, anchor))
      return anchor;
    //this.fetchCIEN(anchor.href, null);
    this.addPreview(code, anchor.href, 'steam');
    return anchor;
  }

  /**
   * creates an element without adding it to the document
   * @param {string} elementName
   * @param {{key:string, value:string}} attributes
   * @returns {HTMLElement}
   */
  createElement(elementName, attributes = {}) {
    const element = document.createElement(elementName);
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
    return element;
  }

  /**
   * @param {string} phrase
   * @param {string} url
   */
  createMatches(phrase, url) {
    const matchForm = this.hgg2d__settings.querySelector('.hgg2d__matchForm');
    const matchLine = this.addElement('div', matchForm, { class: 'hgg2d__match' });
    this.addElement('textarea', matchLine, { class: 'hgg2d__textarea', rows: 1, disabled: '' }).textContent = phrase;
    this.addElement('textarea', matchLine, { class: 'hgg2d__textarea', rows: 1, disabled: '' }).textContent = url;
    this.addElement('button', matchLine).textContent = 'remove';
  }

  /**
   * @param {string} code
   */
  createBlocks(code) {
    const blockForm = this.hgg2d__settings.querySelector('.hgg2d__blockForm');
    const blockLine = this.addElement('div', blockForm, { class: 'hgg2d__block' });
    this.addElement('textarea', blockLine, { class: 'hgg2d__textarea', rows: 1, disabled: '' }).textContent = code;
    this.addElement('button', blockLine).textContent = 'remove';
  }

  /**
   * stubs in a thread reply for testing purposes which contains all of the
   * supported formats for links, should not be called directly
   */
  createPost() {
    const br = this.createElement('br');
    const container = this.addElement('div', this.thread, { class: 'postContainer replyContainer' });
    this.addElement('div', container, { class: 'sideArrows' }).append('>>');
    const reply = this.addElement('div', container, { class: 'post reply', id: 'hgg2d__test' });
    const desktop = this.addElement('div', reply, { class: 'postInfo desktop' });
    this.addElement('input', desktop, { type: 'checkbox', name: '00000000', value: 'delete', disabled: '' });
    const nameBlock = this.addElement('span', desktop, { class: 'nameBlock' });
    this.addElement('span', nameBlock, { class: 'name' }).append('TEST USER');
    nameBlock.innerHTML = nameBlock.innerHTML + '&nbsp;';

    this.addElement('span', desktop, { class: 'dateTime', 'data-utc': `${(new Date()).getTime()}` }).innerHTML = '69/69/69(Wed)69:69:69&nbsp;';
    const postNum = this.addElement('span', desktop, { class: 'postNum desktop' });
    this.addElement('a', postNum, { href: '#hgg2d__test', title: 'Link to this post' }).append('No.');
    this.addElement('a', postNum, { href: `javascript:quote('00000000')`, title: 'Reply to this post' }).append('00000000');
    this.addElement('a', desktop, { href: '#', class: 'postMenuBtn', title: 'Post menu', 'data-cmd': 'post-menu' }).append('â–¶');
    const postMessage = this.addElement('blockquote', reply, { class: 'postMessage', id: 'm00000000' });
    postMessage.append('https://www.dlsite.com/maniax/work/=/product_id/RJ146992.html RJ146992');
    postMessage.append(br.cloneNode());
    postMessage.append('https://www.dlsite.com/maniax/announce/=/product_id/RJ343083.html RJ343083');
    postMessage.append(br.cloneNode());
    postMessage.append('https://www.dlsite.com/pro/work/=/product_id/VJ010879.html VJ010879');
    postMessage.append(br.cloneNode());
    postMessage.append('https://www.dlsite.com/maniax/circle/profile/=/maker_id/RG13102.html RG13102');
    postMessage.append(br.cloneNode());
    postMessage.append('https://www.dlsite.com/pro/circle/profile/=/maker_id/VG01540.html VG01540');
    postMessage.append(br.cloneNode());
    postMessage.append('https://www.dmm.co.jp/dc/doujin/-/detail/=/cid=d_107232/ d_107232 DMM107232');
    postMessage.append(br.cloneNode());
    postMessage.append('https://ci-en.dlsite.com/creator/8200/article/526520 https://ci-en.dlsite.com/creator/8200');
    postMessage.append(br.cloneNode());
    postMessage.append(`Fumika's game Violated Heroine VH nanako's game`);
  }

  css() {
    const style = this.addElement('style', document.head);
    const probe = this.addElement('div', document.body, { class: 'post reply' });
    const { color, backgroundColor } = window.getComputedStyle(probe);
    probe.remove();
    this.height = 38;
    this.absoluteTop = this.thread.getBoundingClientRect().top + document.documentElement.scrollTop;
    this.absoluteBot = this.thread.getBoundingClientRect().bottom + document.documentElement.scrollTop;
    this.offset = (window.visualViewport.height * 0.60) - Number(window.getComputedStyle(document.documentElement).fontSize.replace('px', '')) * this.height / 2;
    const css = (`
    :root {
      --absoluteTop: ${this.absoluteTop + this.offset}px;
      --fixedTop: ${this.offset}px;
      --backgroundColor: ${backgroundColor};
      --color: ${color};
      --height:  70%;
    }
    .hgg2d-absolute {
      position: absolute;
      top: var(--absoluteTop);
    }
    .hgg2d-fixed {
      position: fixed;
      top: var(--fixedTop);
    }
    .hgg2d {
      box-sizing: border-box;
      right: 1rem;
      display: grid;
      grid-template-columns: 1fr max-content;
      grid-template-rows: min-content min-content auto;
      grid-auto-rows: auto;
      grid-template-areas:
        'nav nav'
        'toggle toggle'
        'lewds codes';
      max-width: 50vw;
      height: var(--height);
    }

    .hgg2d__navLinks {
      display: flex;
      justify-content: right;
      grid-area: nav;
    }

    .hgg2d__toggles {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      justify-content: right;
      grid-area: toggle;
      margin-right: 5px;
    }

    .hgg2d__lewdsToggle {
      margin-bottom: .5rem;
    }

    .hgg2d__lewdsToggle > a {
      cursor: pointer;
    }

    .hgg2d__codes {
      height: 100%;
      overflow: auto;
      grid-area: codes;
      scrollbar-gutter: stable;
    }

    .hgg2d__code__container {
      display: flex;
      justify-content: left;
    }

    .hgg2d__code {
      padding-right: 4px;
      width: 5rem;
    }

    .hgg2d__cien__code {
      overflow: hidden;
      text-overflow: ellipsis;
      text-wrap: nowrap;
    }

    .hgg2d__lewds {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-area: lewds;
      align-content: baseline;
      overflow: clip auto;
      scrollbar-gutter: stable;
    }

    .hgg2d__lewds__container {
      position: relative;
    }

    .hgg2d__lewds__jumps {
      position: absolute;
      display: flex;
      flex-wrap: wrap;
      z-index: 1;
      width: 100%;
      pointer-events: none;
    }

    .hgg2d__lewds__site {
      position: absolute;
      bottom: 0px;
      right: 0px;
      color: black;
      background-color: white;
      padding-inline: 2px;
      border: 1px solid black;
      pointer-events: none;
    }

    .hgg2d__jump {
      border-inline: 2px solid;
      padding-inline: 2px;
      background-color: white;
      color: black;
      pointer-events: auto;
    }

    .hgg2d__lewds__preview,
    .hgg2d__lewds__circle__grid {
      display: block;
      width: 100%;
      filter: brightness(80%);
      pointer-events: none;
    }

    .hgg2d__lewds__circle__preview {
      width: 50%;
    }

    .hgg2d__active,
    .hgg2d__lewds__preview:hover {
      filter: none;
    }

    .hgg2d__follow {
      display: block;
      position: fixed;
      max-width: 560px;
      max-height: 50vh;
      top: 0;
      padding: 0;
      margin: 0;
      z-index: 8;
      pointer-events: none;
    }

    .hgg2d__matchForm {
      overflow-y: auto;
      grid-area: matches;
      height: 5rem;
      margin-bottom: 0.5rem;
    }

    .hgg2d__match {
      display: grid;
      gap: 0.5rem;
      grid-template-columns: repeat(2, 1fr) 4rem;
      grid-area: matchs;
    }

    .hgg2d__blockForm {
      overflow-y: auto;
      grid-area: blocks;
      height: 5rem;
    }

    .hgg2d__block {
      display: grid;
      gap: 0.5rem;
      grid-template-columns: 1fr 4rem;
    }

    .hgg2d__nogrid {
      width: 0;
    }

    .hgg2d__settings {
      display: grid;
      grid-auto-rows: minmax(auto, min-content);
      grid-template-areas: 'title close'
                           'settingsmain settingsgrid'
                           'settingsjumps settingsgrid'
                           'matches matches'
                           'blocks blocks';
      position: fixed;
      top: 50vh;
      left: 50vw;
      transform: translate(-50%, -50%);
      width: 30rem;
      height: 25rem;
      padding: 0.5rem;
      background: var(--backgroundColor);
      color: var(--color);
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }

    .hgg2d__settings__main {
      grid-area: settingsmain;
    }

    .hgg2d__settings__jumps {
      grid-area: settingsjumps;
    }

    .hgg2d__settings__grid {
      grid-area: settingsgrid;
    }

    .hgg2d__settings-close {
      grid-area: close;
      justify-self: end;
    }

    .hgg2d__settings-close:hover {
      cursor: pointer;
    }

    .hgg2d__settings-header {
      font-size: 1.5rem;
    }

    .hgg2d__settingsToggle {
      grid-area: settings;
    }

    .hgg2d__settingsToggle > a,
    .hgg2d__quicklinksToggle {
      cursor: pointer;
    }

    .hgg2d-hidden {
      display: none;
    }

    .hgg2d__textarea {
      resize: none;
      height: 1rem;
      overflow: hidden;
    }

    .hgg2d__navbarItem::before,
    .hgg2d__toggle::before,
    .hgg2d__lewdsToggle::before,
    .hgg2d__jumpLinksToggle::before,
    .hgg2d__settingsToggle::before {
      content: '[';
      display: inline;
    }
    .hgg2d__navbarItem::after,
    .hgg2d__toggle::after,
    .hgg2d__lewdsToggle::after,
    .hgg2d__jumpLinksToggle::after,
    .hgg2d__settingsToggle::after {
      content: ']';
      display: inline;
    }

    .hgg2d__navbarItem {
      float: right;
      margin-right: 5px;
    }
    `);
    style.append(css);
  }

  /** @param {HTMLElement} node  */
  matchSearches(node) {
    for (const [string, href] of this.settings.matches) {
      const regex = new RegExp(`\\b${string}\\b`, 'gi');
      this.matchText(node, regex, (text) => {
        if (/dlsite\.com\S+[rv]j/gi.test(href)) {
          const [match, code, bucket] = this.RJCode.exec(href);
          const anchor = this.createRJ(match, code, bucket);
          anchor.textContent = string;
          return anchor;
        } else if (href.includes('dmm.co.jp') && href.includes('d_')) {
          const [match, code] = this.DMMCode.exec(href);
          const anchor = this.createDMM(match, code);
          anchor.textContent = string;
          return anchor;
        }
        const anchor = this.createElement('a', { href });
        anchor.append(text);
        return anchor;
      });
    }
  }

  /**
   * so this function has a little too much scope, but i am not comfortable
   * adding its own function really either.
   */
  html() {
    this.hgg2d = this.addElement('section', document.body, { class: 'hgg2d hgg2d-absolute' });
    this.hgg2d.innerHTML = (`
      <div class='navLinks desktop hgg2d__navLinks'></div>
      <div class='hgg2d__toggles'>
        <div class="hgg2d__lewdsToggle">
          <a>${this.settings.previewGrid ? 'hide grid' : 'show grid'}</a>
        </div>
        <div class='hgg2d__jumpLinksToggle'>
          <a>${this.settings.jumpLinks ? 'hide jumps' : 'show jumps'}</a>
        </div>
      </div>
      <main class="hgg2d__lewds ${this.settings.previewGrid ? '' : 'hgg2d__nogrid'}">
      </main>
      <aside class="hgg2d__codes">
      </aside>
    `);
    this.hgg2d__settings = this.addElement('aside', document.body, { class: 'hgg2d__settings hgg2d-hidden' });
    this.hgg2d__settings.innerHTML = (`
      <span class="hgg2d__settings-header">Quicklinks Settings:</span>
      <a class="hgg2d__settings-close">[x]</a>
      <div class="hgg2d__settings__main">
        <span class="hgg2d__settings__main__header">Main Settings:</span>
        <div>
          <input type="checkbox" ${this.settings.previewBar ? 'checked' : ''} class="previewBar">Show Preview Bar</input>
        </div>
        <div>
          <span>>></span><input type="checkbox" ${this.settings.previewGrid ? 'checked' : ''} class="previewGrid">Show Preview Grid</input>
        </div>
        <div>
          <input type="checkbox" ${this.settings.smoothScrolling ? 'checked' : ''} class="smoothScrolling">Smoothscrolling</input>
        </div>
      </div>
      <div class="hgg2d__settings__jumps">
        <span class="hgg2d__settings__jumps__header">Jump to Post Settings:</span>
        <div>
          <span></span><input type="checkbox" ${this.settings.jumpLinks ? 'checked' : ''} class="jumpLinks">Show Post Jumps</input>
        </div>
        <div>
          <span>>></span><input type="checkbox" ${this.settings.jumpLinksGrid ? 'checked' : ''} class="jumpLinksGrid">Show Post Jumps In Grid</input>
        </div>
        <div>
          <span>>></span><input type="checkbox" ${this.settings.jumpLinksCodes ? 'checked' : ''} class="jumpLinksCodes">Show Post Jumps In Code List</input>
        </div>
      </div>
      <div class="hgg2d__settings__grid">
        <span class="hgg2d__settings__grid__header">Preview Grid Settings:</span>
        <div>
          <span></span><input type="checkbox" ${this.settings.gridDLSite ? 'checked' : ''} class="gridDLSite">Include dlsite games</input>
        </div>
        <div>
          <span></span><input type="checkbox" ${this.settings.gridCircle ? 'checked' : ''} class="gridCircle">Include dlsite circles</input>
        </div>
        <div>
          <span></span><input type="checkbox" ${this.settings.gridCIEN ? 'checked' : ''} class="gridCIEN">Include ci-en Blogs</input>
        </div>
        <div>
          <span></span><input type="checkbox" ${this.settings.gridDMM ? 'checked' : ''} class="gridDMM">Include dmm games</input>
        </div>
        <div>
          <span></span><input type="checkbox" ${this.settings.gridSiteLabels ? 'checked' : ''} class="gridSiteLabels">Show site labels</input>
        </div>
      </div>
      <div class="hgg2d__matchForm">
        <span>Text replacements:</span>
        <div class="hgg2d__match hgg2d__newMatch">
          <textarea class="hgg2d__textarea" placeholder="text here"></textarea>
          <textarea class="hgg2d__textarea" placeholder="url here"></textarea>
          <button>add</button>
        </div>
      </div>
      <div class="hgg2d__blockForm">
        <span>Blocks:</span>
        <div class="hgg2d__block hgg2d__newBlock">
          <textarea class="hgg2d__textarea"
                    placeholder="rj code here"></textarea>
          <button type="button">add</button>
        </div>
      </div>
    `);

    for (const [phrase, url] of this.settings.matches) {
      this.createMatches(phrase, url);
    }

    for (const code of this.settings.blocks) {
      this.createBlocks(code);
    }

    if (this.addNavBar) {
      this.insertNavLinks();
    }

    const navLinks = Array.from(document.querySelectorAll('.navLinks.desktop'));
    for (const navLink of navLinks) {
      const quicklinksToggleDiv = this.createElement('div', { class: 'hgg2d__navbarItem' });
      const hgg2d__quicklinksToggle = this.addElement('a', quicklinksToggleDiv, { class: 'hgg2d__quicklinksToggle' });
      hgg2d__quicklinksToggle.append('quicklinks settings');
      navLink.append(quicklinksToggleDiv);
      hgg2d__quicklinksToggle.addEventListener('click', (e) => {
        this.hgg2d__settings.classList.toggle('hgg2d-hidden');
      });
    }

    // development testing
    // this.createPost();
  }

  initEventListeners() {
    new MutationObserver(mutations => {
      for (const { addedNodes } of mutations.filter(mutation => mutation.type === 'childList')) {
        for (const node of addedNodes) {
          let postContent = node.querySelector(this.postSelector);
          if (!postContent && node.classList.contains(this.postSelector.substr(1)))
            postContent = node;
          if (postContent)
            this.work(postContent);
        }
      }
    }).observe(this.thread, {
      childList: true,
      attributes: true,
    });
    document.body.addEventListener('mouseover', this.over, false);
    document.body.addEventListener('mouseout', this.out, false);
    document.body.addEventListener('click', this.click, false);

    this.hgg2d__settings.querySelector('.hgg2d__settings-close').addEventListener('click', () => {
      this.hgg2d__settings.classList.toggle('hgg2d-hidden');
    });

    this.jumpLinksToggle.addEventListener('click', () => {
      this.settings.jumpLinks = this.jumpLinksToggle.textContent === 'show jumps';
      this.jumpLinksToggle.textContent = this.settings.jumpLinks ? 'hide jumps' : 'show jumps';
      this.toggleJumpLinksGrid();
      this.toggleJumpLinksCodes();
    });

    this.gridToggle.addEventListener('click', () => {
      this.settings.previewGrid = this.gridToggle.textContent === 'show grid';
      this.gridToggle.textContent = this.settings.previewGrid ? 'hide grid' : 'show grid';
      if (this.settings.previewGrid) {
        this.lewds.classList.remove('hgg2d__nogrid');
      } else {
        this.lewds.classList.add('hgg2d__nogrid');
      }
    });

    this.hgg2d__settings.addEventListener('click', (e) => {
      if (e.target.nodeName !== 'BUTTON') {
        return;
      }
      /** @type {HTMLDivElement} */
      const parent = e.target.parentNode;
      const action = e.target.textContent;
      const match = Array.from(parent.querySelectorAll('textarea')).map(el => el.value);
      switch (action) {
        case 'add':
          Array.from(parent.querySelectorAll('textArea')).forEach(e => e.value = '');
          if (parent.classList.contains('hgg2d__block')) {
            if (!this.settings.blocks.includes(match)) {
              this.settings.blocks = this.settings.blocks.concat(match);
              this.createBlocks(match);
            }
          } else {
            if (!this.settings.matches.some(el => this.arrayEquals(match, el))) {
              this.settings.matches = this.settings.matches.concat([match]);
              this.createMatches(...match);
            }
          }
          break;
        case 'remove':
          if (parent.classList.contains('hgg2d__block')) {
            this.settings.blocks = this.settings.blocks.filter(el => el === match);
          } else {
            this.settings.matches = this.settings.matches.filter(el => !this.arrayEquals(match, el));
          }
          parent.remove();
          break;
      }
    });

    this.initCheckboxListerners();

    let ticking = false;
    /** @type {FrameRequestCallback} */
    const positionRecalc = () => {
      this.absoluteTop = this.thread.getBoundingClientRect().top + document.documentElement.scrollTop;
      this.absoluteBot = this.thread.getBoundingClientRect().bottom + document.documentElement.scrollTop;
      this.offset = (window.visualViewport.height * 0.60) - Number(window.getComputedStyle(document.documentElement).fontSize.replace('px', '')) * this.height / 2;
      if (window.scrollY > this.absoluteTop) {
        if (this.hgg2d.classList.contains('hgg2d-absolute')) {
          this.hgg2d.classList.remove('hgg2d-absolute');
          this.hgg2d.classList.add('hgg2d-fixed');
        }
      } else {
        if (this.hgg2d.classList.contains('hgg2d-fixed')) {
          this.hgg2d.classList.add('hgg2d-absolute');
          this.hgg2d.classList.remove('hgg2d-fixed');
        }
      }
      if (window.scrollY > this.absoluteBot - this.hgg2d.getBoundingClientRect().height - this.offset) {
        this.hgg2d.style.top = 'unset';
        this.hgg2d.style.bottom = `${window.visualViewport.height - this.thread.getBoundingClientRect().bottom}px`;
      } else {
        this.hgg2d.removeAttribute('style');
      }
      ticking = false;
    };

    document.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(positionRecalc);
        ticking = true;
      }
    });
    positionRecalc();
  }

  initCheckboxListerners() {
    this.hgg2d__settings.querySelector('.previewBar').addEventListener('change', (e) => {
      this.settings.previewBar = e.target.checked;
      if (this.settings.previewBar) {
        this.hgg2d.classList.remove('hgg2d-hidden');
      } else {
        this.hgg2d.classList.add('hgg2d-hidden');
      }
    });

    this.hgg2d__settings.querySelector('.previewGrid').addEventListener('change', (e) => {
      this.settings.previewGrid = e.target.checked;
      if (this.settings.previewGrid) {
        this.lewds.classList.remove('hgg2d__nogrid');
      } else {
        this.lewds.classList.add('hgg2d__nogrid');
      }
      this.gridToggle.textContent = this.settings.previewGrid ? 'hide grid' : 'show grid';
    });

    this.hgg2d__settings.querySelector('.smoothScrolling').addEventListener('change', (e) => {
      this.settings.smoothScrolling = e.target.checked;
    });

    this.hgg2d__settings.querySelector('.jumpLinks').addEventListener('change', (e) => {
      this.settings.jumpLinks = e.target.checked;
      this.toggleJumpLinksGrid();
      this.toggleJumpLinksCodes();
      this.jumpLinksToggle.textContent = this.settings.jumpLinks ? 'hide jumps' : 'show jumps';
    });

    this.hgg2d__settings.querySelector('.jumpLinksGrid').addEventListener('change', (e) => {
      this.settings.jumpLinksGrid = e.target.checked;
      this.toggleJumpLinksGrid();
    });

    this.hgg2d__settings.querySelector('.jumpLinksCodes').addEventListener('change', (e) => {
      this.settings.jumpLinksCodes = e.target.checked;
      this.toggleJumpLinksCodes();
    });

    this.hgg2d__settings.querySelector('.gridDLSite').addEventListener('change', (e) => {
      this.settings.gridDLSite = e.target.checked;
      if (this.settings.gridDLSite)
        this.hgg2d.querySelectorAll('.hgg2d__dlsite').forEach(el => el.parentNode.parentNode.classList.remove('hgg2d-hidden'));
      else
        this.hgg2d.querySelectorAll('.hgg2d__dlsite').forEach(el => el.parentNode.parentNode.classList.add('hgg2d-hidden'));
    });

    this.hgg2d__settings.querySelector('.gridCircle').addEventListener('change', (e) => {
      this.settings.gridCircle = e.target.checked;
      if (this.settings.gridCircle)
        this.hgg2d.querySelectorAll('.hgg2d__circle').forEach(el => el.parentNode.parentNode.classList.remove('hgg2d-hidden'));
      else
        this.hgg2d.querySelectorAll('.hgg2d__circle').forEach(el => el.parentNode.parentNode.classList.add('hgg2d-hidden'));
    });

    this.hgg2d__settings.querySelector('.gridCIEN').addEventListener('change', (e) => {
      this.settings.gridCIEN = e.target.checked;
      if (this.settings.gridCIEN)
        this.hgg2d.querySelectorAll('.hgg2d__ci-en').forEach(el => el.parentNode.parentNode.classList.remove('hgg2d-hidden'));
      else
        this.hgg2d.querySelectorAll('.hgg2d__ci-en').forEach(el => el.parentNode.parentNode.classList.add('hgg2d-hidden'));
    });

    this.hgg2d__settings.querySelector('.gridDMM').addEventListener('change', (e) => {
      this.settings.gridDMM = e.target.checked;
      if (this.settings.gridCIEN)
        this.hgg2d.querySelectorAll('.hgg2d__dmm').forEach(el => el.parentNode.parentNode.classList.remove('hgg2d-hidden'));
      else
        this.hgg2d.querySelectorAll('.hgg2d__dmm').forEach(el => el.parentNode.parentNode.classList.add('hgg2d-hidden'));
    });

    this.hgg2d__settings.querySelector('.gridSiteLabels').addEventListener('change', (e) => {
      this.settings.gridSiteLabels = e.target.checked;
      if (this.settings.gridSiteLabels)
        this.hgg2d.querySelectorAll('.hgg2d__lewds__site').forEach(el => el.classList.remove('hgg2d-hidden'));
      else
        this.hgg2d.querySelectorAll('.hgg2d__lewds__site').forEach(el => el.classList.add('hgg2d-hidden'));
    });
  }

  toggleJumpLinksGrid() {
    if (this.settings.jumpLinksGrid && this.settings.jumpLinks) {
      this.hgg2d.querySelectorAll('.hgg2d__jump__grid').forEach(el => el.classList.remove('hgg2d-hidden'));
    } else {
      this.hgg2d.querySelectorAll('.hgg2d__jump__grid').forEach(el => el.classList.add('hgg2d-hidden'));
    }
  }

  toggleJumpLinksCodes() {
  if (this.settings.jumpLinksCodes && this.settings.jumpLinks) {
      this.hgg2d.querySelectorAll('.hgg2d__jump__list').forEach(el => el.classList.remove('hgg2d-hidden'));
    } else {
      this.hgg2d.querySelectorAll('.hgg2d__jump__list').forEach(el => el.classList.add('hgg2d-hidden'));
    }
  }

  initSettings() {
    const defaults = {
      firstRun: true,
      matches: [
        ['VH', 'https://mega.nz/#F!F9ZyVSLY!6U0TlvbW88UFAynZ3pxJBg'],
        ['Violated Heroine', 'https://mega.nz/#F!F9ZyVSLY!6U0TlvbW88UFAynZ3pxJBg'],
        ['(nanako|serena)\'s game', 'https://mega.nz/#F!F9ZyVSLY!6U0TlvbW88UFAynZ3pxJBg'],
        ['fumika\'s game', 'https://www.dlsite.com/maniax/work/=/product_id/RJ242995.html'],
      ],
      previewBar: true,
      previewGrid: true,
      smoothScrolling: true,
      jumpLinks: true,
      jumpLinksCodes: true,
      jumpLinksGrid: true,
      gridDLSite: true,
      gridCIEN: true,
      gridCircle: true,
      gridDMM: true,
      gridSiteLabels: true,
      blocks: [],
    };
    /**
     * @type {{
     *    firstRun: boolean,
     *    matches: {string: string}[],
     *    previewBar: boolean,
     *    previewGrid: boolean,
     *    jumpLinks: boolean,
     *    jumpLinksCodes: boolean,
     *    jumpLinksGrid: boolean,
     *    gridDLSite: boolean,
     *    gridCIEN: boolean,
     *    gridCircle: boolean,
     *    gridDMM: boolean,
     *    gridSiteLabels: boolean,
     *    smoothScrolling: boolean,
     *    blocks: string[]
     * }}
     */
    const target = JSON.parse(localStorage.getItem('hgg2d')) || defaults;
    const keys = Object.keys(target);
    const defaultKeys = Object.keys(defaults);
    for (const key of Object.keys(defaults)) {
      if (!keys.includes(key)) {
        target[key] = defaults[key];
      }
    }

    for (const key of keys) {
      if (!defaultKeys.includes(key)) {
        delete target[key];
      }
    }
    // Proxies are really cool, this allows us to have an actively updating
    // local storage entity while removing logic from everywhere to update the
    // instance variable as well.
    this.settings = new Proxy(target, {
      set: (obj, prop, value) => {
        obj[prop] = value;
        switch (prop) {
          case 'previewGrid':
            this.hgg2d__settings.querySelector('.previewGrid').checked = value;
            break;
          case 'previewBar':
            this.hgg2d__settings.querySelector('.previewBar').checked = value;
            break;
          case 'jumpLinks':
            this.hgg2d__settings.querySelector('.jumpLinks').checked = value;
            break;
        }
        localStorage.setItem('hgg2d', JSON.stringify(target));
        return true;
      }
    });
    localStorage.setItem('hgg2d', JSON.stringify(this.settings));
    this.settings_4chan = JSON.parse(localStorage.getItem('4chan-settings'));
  }

  toggle() {
    if (this.settings.previewBar) {
      this.hgg2d.classList.remove('hgg2d-hidden');
    } else {
      this.hgg2d.classList.add('hgg2d-hidden');
    }
  }


  /**
   * @param {HTMLElement} node
   * @param {RegExp} regex
   * @param {Function} callback
   */
  matchText(node, regex, callback, file = null) {
    /** @type {Text} */
    let child = node.firstChild;
    if (!file) {
      file = node.querySelector(this.fileSelector);
      if (!file)
        file = this.createElement('div');   // empty div
    }
    while (child) {
      switch (child.nodeType) {
        case Node.ELEMENT_NODE:
          if (['script', 'style', 'iframe', 'canvas'].includes(child.tagName.toLowerCase()))
            break;
          this.matchText(child, regex, callback, file);
          break;
        case Node.TEXT_NODE:
          if (regex.test(child.data)) {
            let pad = 0;
            child.data.replace(regex, (match, ...args) => {
              if (this.settings.blocks.some(block => block.toUpperCase().includes(match))) return match;
              const offset = args[args.length - 2];
              const groups = args.slice(0, -2);
              const newTextNode = child.splitText(offset + pad);
              pad -= child.data.length + match.length;
              newTextNode.data = newTextNode.data.substr(match.length);
              const anchor = callback.apply(this, [match].concat(groups));
              child.parentNode.insertBefore(anchor, newTextNode);
              let targetNode = anchor;
              let fileflag = false;
              if (file.contains(node)){
                fileflag = true;
                targetNode = file;
              }
              this.addPostJump(targetNode, anchor.href, fileflag);
              child = newTextNode;
            });
          }
          break;
      }
      child = child.nextSibling;
    }
    return node;
  }
  /** @param {HTMLAnchorElement} */
  getEventImg (target) {
    let img;
    if (target.href.includes('ci-en')) {
      const code = target.href.match(/creator\S*/)[0];
      img = this.lewds.querySelector(`a[href$="${code}" i]`).firstChild;
    } else if (target.href.includes('circle/profile')) {
      const code = target.href.match(/[RV]G\d{5,8}/)[0];
      img = this.lewds.querySelector(`a[href*="${code}" i]`).firstChild;
    } else if (target.href.includes('dlsite')) {
      const code = target.href.match(/[RV][JE](\d{2})?\d{6}/)[0];
      img = this.lewds.querySelector(`a[href*="${code}" i]`).firstChild;
    } else if (target.href.includes('dmm.co.jp')) {
      const code = target.href.match(/d_\d{1,}/)[0];
      img = this.lewds.querySelector(`a[href*="${code}" i]`).firstChild;
    }
    return img;
  }

  /** @param {MouseEvent} e */
  over = (e) => {
    /** @type {HTMLAnchorElement} */
    const target = e.target.classList.contains('hgg2d__code') ? e.target : undefined;
    if (!target) return;
    const behavior = this.settings.smoothScrolling ? 'smooth' : 'instant';
    /** @type {HTMLImageElement} */
    const img = this.getEventImg(target);
    if (!img) return;
    if (this.settings.previewGrid && this.settings.previewBar) {
      img.classList.add('hgg2d__active');
      img.scrollIntoView( { behavior: behavior, block: 'center' });
      return;
    }
    const rect = target.getBoundingClientRect();
    if (img.tagName == 'DIV') {
      this.tmpPrev = this.prev;
      this.prev = img.cloneNode(true);
      this.prev.classList.add('hgg2d__follow');
      document.body.appendChild(this.prev);
    } else {
      this.prev.src = img.src;
    }
    this.prev.style.visibility = '';
    this.prev.style.top = ((window.innerHeight - rect.top < 420) ? window.innerHeight - 435 : rect.top - 15) + 'px';
    this.prev.style.left = ((window.innerWidth - rect.left < 560) ? rect.left - 565 : rect.right + 5) + 'px';
  };

  /** @param {MouseEvent} e */
  out = (e) => {
    /** @type {HTMLAnchorElement} */
    const target = e.target.classList.contains('hgg2d__code') ? e.target : undefined;
    if (!target) return;
    const settings = JSON.parse(localStorage.getItem('hgg2d'));
    const lewds = document.querySelector('.hgg2d__lewds');
    const img = this.getEventImg(target);
    if (settings.previewGrid && settings.previewBar) {
      if (!img) return;
      img.classList.remove('hgg2d__active');
      return;
    }
    if (this.prev.tagName == 'DIV') {
      this.prev.remove();
      this.prev = this.tmpPrev;
    } else {
      this.prev.src = '';
    }
    this.prev.style.visibility = 'hidden';
  };

  /** @param {MouseEvent} e */
  click = (e) => {
    const target = e.target.classList.contains('hgg2d__jump') ? e.target : undefined;
    if (!target) return;
    const destination = document.getElementById(target.getAttribute('jumpTo'));
    destination.scrollIntoView( { behavior: this.settings.smoothScrolling ? 'smooth' : 'instant', block: 'center' } );
  }

  /**
   * @param {node} target
   * @param {string} code
   */
  addPostJump(target, href, fileflag) {
    if (fileflag && target.querySelector(`[id^="${href}" i]`))
      return;
    const codeContainer = this.codes.querySelector(`a[href="${href}" i]`)?.parentNode;
    const lewdJumpContainer = this.lewds.querySelector(`a[href="${href}" i]`)?.parentNode.querySelector('.hgg2d__lewds__jumps');
    const letter = fileflag ? 'F' : 'P';
    if (codeContainer) {
      const id = href + '__' + codeContainer.childElementCount;
      const listNotHidden = this.settings.jumpLinks && this.settings.jumpLinksCodes;
      const gridNotHidden = this.settings.jumpLinks && this.settings.jumpLinksGrid;
      const jumpElemList = this.createElement('button', { class: `hgg2d__jump hgg2d__jump__list ${listNotHidden ? '' : 'hgg2d-hidden'}` });
      const jumpElemGrid = this.createElement('button', { class: `hgg2d__jump hgg2d__jump__grid ${gridNotHidden ? '' : 'hgg2d-hidden'}` });
      jumpElemList.setAttribute('jumpTo', id);
      jumpElemList.append(letter);
      jumpElemGrid.setAttribute('jumpTo', id);
      jumpElemGrid.append(letter);
      if (fileflag)
        target.appendChild(this.createElement('div', { id: id }));
      else
        target.id = id;
      codeContainer.appendChild(jumpElemList);
      lewdJumpContainer.appendChild(jumpElemGrid);
    }
  }

  insertNavLinks() {
    const navBar = this.addElement('div', document.body, { class: 'navLinks desktop' } );
    this.thread.before(navBar);
    this.thread.after(navBar.cloneNode());
    this.hgg2d.before(navBar.cloneNode());
  }

  /** @param {HTMLElement} node */
  work(node) {
    for (const el of node.querySelectorAll('wbr')) {
      el.remove();
    }
    node.normalize();
    this.matchText(node, this.CIEN, (href, creator, article) => this.createCien(href, creator, article));
    this.matchText(node, this.DMMCode, (match, code) => this.createDMM(match, code));
    this.matchText(node, this.RGCirc, (match, code) => this.createCirc(match, code));
    this.matchText(node, this.RJCode, (match, code, bucket) => this.createRJ(match, code, bucket));
    this.matchText(node, this.SteamCode, (match, code) => this.createSteam(match, code));
    this.matchSearches(node);
  }
}
new Chan();
