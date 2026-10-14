const imageRoot = './';
const assets = {
  logo: imageRoot + 'LOGO.jpg',
  colors: imageRoot + 'lapis de cor.JPG',
  marker: imageRoot + 'produtos que esta faltando/marca texto.jpg',
  folders: imageRoot + 'pastas.JPG',
  glue: imageRoot + 'colas.JPG',
  eraser: imageRoot + 'borracha.JPG',
  sharpener: imageRoot + 'apontador.JPG',
  agendas: imageRoot + 'agendas.jpg',
  elastic: imageRoot + 'elastico.jpg',
  newKit: imageRoot + 'Kits novos.JPG',
  offer: imageRoot + 'ofertas da semana.JPG',
  discount: imageRoot + 'produtos com descontos.JPG',
  gift: imageRoot + 'kit de presentear.jpg',
  craftPaper: imageRoot + 'papel crepom.JPG'
};

const categoryInfo = {
  criativa: { label: 'Criativa', tone: 'yellow', title: 'Materiais para criar', text: 'Desenho, pintura, lettering e tudo que transforma uma ideia em algo feito por você.' },
  escritorio: { label: 'Escritório', tone: 'pink', title: 'Organize sua rotina', text: 'Pequenos recursos que deixam o trabalho mais leve, prático e bem cuidado.' },
  escola: { label: 'Escola', tone: 'lilac', title: 'Volta às aulas começa aqui', text: 'Materiais para estudar, aprender e deixar cada trabalho com a sua cara.' },
  lancamentos: { label: 'Lançamentos', tone: 'mint', title: 'Tem novidade na Criativa', text: 'Produtos recém-chegados, coleções especiais e descobertas para acompanhar você.' },
  produtos: { label: 'Produtos', tone: 'blue', title: 'Produtos da Criativa', text: 'Uma seleção de kits, presentes e produtos para diferentes momentos.' }
};

const products = [
  { name: 'Adesivos decorativos', category: 'criativa', image: imageRoot + 'produtos que esta faltando/adesivos decorativos .jpg', text: 'Detalhes criativos para decorar projetos, cadernos e presentes.' },
  { name: 'Adesivos', category: 'criativa', image: imageRoot + 'produtos que esta faltando/adesivos.jpg', text: 'Pequenos detalhes para personalizar materiais e trabalhos.' },
  { name: 'Aquarela', category: 'criativa', image: imageRoot + 'produtos que esta faltando/aquarela.jpg', text: 'Materiais de aquarela para criar e pintar.' },
  { name: 'Blocos de desenho', category: 'criativa', image: imageRoot + 'produtos que esta faltando/blocos de desenho.jpg', text: 'Blocos para desenhos e projetos.' },
  { name: 'Caderno de desenho', category: 'criativa', image: imageRoot + 'produtos que esta faltando/caderno de desenho.jpg', text: 'Caderno para desenhos e projetos.' },
  { name: 'Caneta brush', category: 'criativa', image: imageRoot + 'produtos que esta faltando/caneta brush .jpg', text: 'Canetas brush para lettering e desenho.' },
  { name: 'Canetas coloridas', category: 'criativa', image: imageRoot + 'produtos que esta faltando/canetas coloridas.jpg', text: 'Canetas coloridas para escrever, desenhar e criar.' },
  { name: 'Canetas marcadoras', category: 'criativa', image: imageRoot + 'produtos que esta faltando/canetas marcadores.jpg', text: 'Canetas marcadoras para desenhos e projetos.' },
  { name: 'Canetinha', category: 'criativa', image: imageRoot + 'produtos que esta faltando/canetinha.jpg', text: 'Canetinhas para atividades e projetos criativos.' },
  { name: 'Carimbos', category: 'criativa', image: imageRoot + 'produtos que esta faltando/carimbos .jpg', text: 'Carimbos para personalizar suas criações.' },
  { name: 'Cola colorida', category: 'criativa', image: imageRoot + 'produtos que esta faltando/cola colorida .jpg', text: 'Cola colorida para trabalhos e criações.' },
  { name: 'Cola glitter', category: 'criativa', image: imageRoot + 'produtos que esta faltando/cola glitter .jpg', text: 'Cola com glitter para trabalhos e criações.' },
  { name: 'Colas', category: 'criativa', image: imageRoot + 'colas.JPG', text: 'Colas para diferentes trabalhos e projetos.' },
  { name: 'Fita decorativa', category: 'criativa', image: imageRoot + 'produtos que esta faltando/fita decorativa .jpg', text: 'Fitas decorativas para personalizar projetos.' },
  { name: 'Marcadores', category: 'criativa', image: imageRoot + 'produtos que esta faltando/marcadores.jpg', text: 'Marcadores para escrever, desenhar e criar.' },
  { name: 'Agendas', category: 'escritorio', image: imageRoot + 'agendas.jpg', text: 'Agendas para organizar compromissos e tarefas.' },
  { name: 'Elástico', category: 'escritorio', image: imageRoot + 'elastico.jpg', text: 'Elásticos para prender e organizar materiais.' },
  { name: 'Pastas', category: 'escritorio', image: imageRoot + 'pastas.JPG', text: 'Pastas para organizar e proteger documentos.' },
  { name: 'Compasso', category: 'escritorio', image: imageRoot + 'produtos que esta faltando/compassos .jpg', text: 'Compassos para desenhos e trabalhos técnicos.' },
  { name: 'Corretivo em fita', category: 'escritorio', image: imageRoot + 'produtos que esta faltando/corretivo em fita.jpg', text: 'Corretivo em fita para corrigir anotações.' },
  { name: 'Corretivos', category: 'escritorio', image: imageRoot + 'produtos que esta faltando/corretivos .jpg', text: 'Corretivos para textos e anotações.' },
  { name: 'Esquadros', category: 'escritorio', image: imageRoot + 'produtos que esta faltando/esquadros .jpg', text: 'Esquadros para traços e trabalhos técnicos.' },
  { name: 'Estiletes', category: 'escritorio', image: imageRoot + 'produtos que esta faltando/estiletes .jpg', text: 'Estiletes para cortes em papel e projetos.' },
  { name: 'Fita adesiva', category: 'escritorio', image: imageRoot + 'produtos que esta faltando/fita adesiva .jpg', text: 'Fita adesiva para fixar e organizar.' },
  { name: 'Planners', category: 'escritorio', image: imageRoot + 'produtos que esta faltando/planners .jpg', text: 'Planners para organizar tarefas e compromissos.' },
  { name: 'Tesouras', category: 'escritorio', image: imageRoot + 'produtos que esta faltando/tesouras.jpg', text: 'Tesouras para papelaria e projetos.' },
  { name: 'Apontador', category: 'escola', image: imageRoot + 'apontador.JPG', text: 'Apontador para lápis e materiais escolares.' },
  { name: 'Borracha', category: 'escola', image: imageRoot + 'borracha.JPG', text: 'Borracha para apagar marcas de lápis.' },
  { name: 'Cadernos', category: 'escola', image: imageRoot + 'produtos que esta faltando/cadernos .jpg', text: 'Cadernos para aulas, tarefas e anotações.' },
  { name: 'Cartolina', category: 'escola', image: imageRoot + 'produtos que esta faltando/cartolina.jpg', text: 'Cartolina para trabalhos e apresentações.' },
  { name: 'Cola branca', category: 'escola', image: imageRoot + 'produtos que esta faltando/cola branca .jpg', text: 'Cola branca para trabalhos e atividades.' },
  { name: 'EVA', category: 'escola', image: imageRoot + 'produtos que esta faltando/eva.jpg', text: 'EVA para atividades, recortes e trabalhos manuais.' },
  { name: 'EVA com glitter', category: 'escola', image: imageRoot + 'produtos que esta faltando/eva  com Glitter.jpg', text: 'EVA com glitter para trabalhos e decorações.' },
  { name: 'Giz de cera', category: 'escola', image: imageRoot + 'produtos que esta faltando/giz de cera.jpg', text: 'Giz de cera para desenhar e colorir.' },
  { name: 'Lápis de cor', category: 'escola', image: imageRoot + 'lapis de cor.JPG', text: 'Lápis de cor para desenhos e atividades escolares.' },
  { name: 'Marca-texto', category: 'escola', image: imageRoot + 'produtos que esta faltando/marca texto.jpg', text: 'Marca-texto para destacar conteúdos e anotações.' },
  { name: 'Papel crepom', category: 'escola', image: imageRoot + 'papel crepom.JPG', text: 'Papel crepom para trabalhos e atividades.' },
  { name: 'Papel celofane', category: 'escola', image: imageRoot + 'produtos que esta faltando/papel celofane.jpg', text: 'Papel celofane para atividades e embalagens.' },
  { name: 'Papel colorido', category: 'escola', image: imageRoot + 'produtos que esta faltando/papel colorido.jpg', text: 'Papel colorido para recortes e colagens.' },
  { name: 'Papel para desenho', category: 'escola', image: imageRoot + 'produtos que esta faltando/papel para desenho.jpg', text: 'Papel para desenhos e atividades.' },
  { name: 'Papel seda', category: 'escola', image: imageRoot + 'produtos que esta faltando/papel seda.jpg', text: 'Papel seda para dobraduras e decoração.' },
  { name: 'Papel vegetal', category: 'escola', image: imageRoot + 'produtos que esta faltando/papel vegetal.jpg', text: 'Papel vegetal para decalques e desenhos.' },
  { name: 'Kits criativos', category: 'lancamentos', image: imageRoot + 'produtos que esta faltando/kits criativos.jpg', text: 'Kits criativos para experimentar novas ideias.' },
  { name: 'Kits novos', category: 'lancamentos', image: imageRoot + 'Kits novos.JPG', text: 'Kits de papelaria recém-organizados.' },
  { name: 'Coleção Volta às Aulas', category: 'lancamentos', image: imageRoot + 'cole\u00e7\u00e3o volta as aula.JPG', text: 'Coleção de produtos para a volta às aulas.' },
  { name: 'Paletas para pintura', category: 'lancamentos', image: imageRoot + 'produtos que esta faltando/paletas para pintura.jpg', text: 'Paletas para misturar tintas e pintar.' },
  { name: 'Papel aquarela', category: 'lancamentos', image: imageRoot + 'produtos que esta faltando/papel aquarela.jpg', text: 'Papel aquarela para pinturas e aguadas.' },
  { name: 'Papel com glitter', category: 'lancamentos', image: imageRoot + 'produtos que esta faltando/papel com glitter.jpg', text: 'Papel com glitter para projetos especiais.' },
  { name: 'Papel kraft', category: 'lancamentos', image: imageRoot + 'produtos que esta faltando/papel kraft.jpg', text: 'Papel kraft para criar e personalizar.' },
  { name: 'Sketchbooks', category: 'lancamentos', image: imageRoot + 'produtos que esta faltando/sketchbooks.jpg', text: 'Sketchbooks para estudos e projetos.' },
  { name: 'Telas', category: 'lancamentos', image: imageRoot + 'produtos que esta faltando/telas .jpg', text: 'Telas para projetos de pintura.' },
  { name: 'Tintas', category: 'lancamentos', image: imageRoot + 'produtos que esta faltando/tintas.jpg', text: 'Tintas para pintura e projetos criativos.' },
  { name: 'Produtos exclusivos', category: 'lancamentos', image: imageRoot + 'produtos que esta faltando/produtos exclusivos .jpg', text: 'Produtos exclusivos da seleção Criativa.' },
  { name: 'Produtos sazonais', category: 'lancamentos', image: imageRoot + 'produtos que esta faltando/produtos sazonais .jpg', text: 'Produtos sazonais da seleção Criativa.' },
  { name: 'Kit de presentear', category: 'produtos', image: imageRoot + 'kit de presentear.jpg', text: 'Kit de papelaria para presentear.' },
  { name: 'Ofertas da semana', category: 'produtos', image: imageRoot + 'ofertas da semana.JPG', text: 'Seleção de ofertas da semana.' },
  { name: 'Produtos com descontos', category: 'produtos', image: imageRoot + 'produtos com descontos.JPG', text: 'Seleção de produtos com descontos.' }
];

const page = document.body.dataset.page;
const pageInfo = categoryInfo[page];
const linkFor = (slug) => slug === 'home' ? 'index.html' : slug === 'produtos' ? 'produtos.html' : slug + '.html';

const whatsappNumber = '5517997520810';
const whatsappMessages = {
  purchase: 'Olá! Vim pelo site da Papelaria Criativa e gostaria de fazer uma compra.',
  orders: 'Olá! Vim pelo site da Papelaria Criativa e gostaria de consultar um pedido.',
  delivery: 'Olá! Vim pelo site da Papelaria Criativa e gostaria de saber mais sobre entregas e trocas.',
  contact: 'Olá! Vim pelo site da Papelaria Criativa e gostaria de falar com vocês.'
};

function whatsappUrl(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderHeader() {
  const nav = Object.entries(categoryInfo).map(([slug, info]) => `<a class="${page === slug ? 'active' : ''}" href="${linkFor(slug)}">${info.label}</a>`).join('');
  document.querySelector('#site-header').innerHTML = `<div class="topline"><div class="container"><span>Curadoria para criar, estudar e organizar</span><span>Pedidos rápidos pelo WhatsApp</span></div></div><header class="site-header"><div class="container header-main"><a class="logo" href="index.html"><img src="${assets.logo}" alt="Logo Criativa"><span>CRIATIVA</span></a><form class="search" id="search-form"><span aria-hidden="true">⌕</span><input id="search-input" type="search" placeholder="Procurar produto" aria-label="Procurar produto"><button type="submit" aria-label="Buscar">⌕</button></form><div class="header-actions"><a class="whatsapp" href="https://wa.me/?text=Olá! Vim pelo site da Criativa." target="_blank" rel="noreferrer"><span>◉</span><span>WHATSAPP</span></a></div></div><nav class="nav"><div class="container"><a class="${page === 'home' ? 'active' : ''}" href="index.html">INÍCIO</a>${nav}</div></nav></header>`;
  document.querySelector('#search-form').addEventListener('submit', (event) => { event.preventDefault(); const value = document.querySelector('#search-input').value.trim().toLowerCase(); if (value) renderProducts(products.filter(item => item.name.toLowerCase().includes(value) || item.category.includes(value)), 'Resultados da busca'); });
}

function productCard(item) { const message = encodeURIComponent(`Olá! Gostaria de pedir: ${item.name}.`); return `<article class="product-card"><div class="product-image"><img src="${item.image}" alt="${item.name}" onerror="this.src='${assets.logo}'"></div><div class="product-body"><span class="product-category">${categoryInfo[item.category].label}</span><h3>${item.name}</h3><p>${item.text}</p><div class="product-bottom"><strong class="price">R$ 0,00</strong><a class="button product-button" href="https://wa.me/?text=${message}" target="_blank" rel="noreferrer">Pedir pelo WhatsApp <span>↗</span></a></div></div></article>`; }
function renderProducts(list, heading = 'Produtos em destaque') { const target = document.querySelector('#product-area'); if (!target) return; target.innerHTML = `<div class="section-heading"><div><span class="eyebrow">Seleção Criativa</span><h2>${heading}</h2></div><p>Preços sob consulta pelo WhatsApp. Todos os produtos aparecem inicialmente como <strong>R$ 0,00</strong>.</p></div><div class="products-grid">${list.length ? list.map(productCard).join('') : '<p>Nenhum produto encontrado. Tente outro termo.</p>'}</div>`; configureWhatsappLinks(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
function renderFooter() { const whatsapp = 'https://wa.me/?text=Olá! Vim pelo site da Papelaria Criativa.'; document.querySelector('#site-footer').innerHTML = `<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand"><h2>CRIATIVA</h2><p>Papelaria e gifts para deixar suas ideias mais bonitas, organizadas e possíveis.</p><a class="whatsapp" href="${whatsapp}" target="_blank" rel="noreferrer">◉ Fale com a Criativa</a></div><div class="footer-col"><h3>Atendimento</h3><a href="${whatsapp}" target="_blank" rel="noreferrer">Fale conosco</a><span>Horário de atendimento: segunda a sexta, das 8:30 às 18:00; sábado, das 8:30 às 13:00.</span></div><div class="footer-col"><h3>Compras</h3><a href="${whatsapp}" target="_blank" rel="noreferrer">Meus pedidos</a><a href="${whatsapp}" target="_blank" rel="noreferrer">Entrega e trocas</a></div><div class="footer-col"><h3>Institucional</h3><a href="duvidas.html">Dúvidas frequentes</a><a href="sobre.html">Sobre nós</a></div></div><div class="footer-bottom"><span>© 2026 Criativa Papelaria e Gifts</span><span>Organize. Crie. Inspire-se.</span></div></div></footer>`; }
function renderHome() { document.querySelector('#page-content').innerHTML = `<section class="hero" aria-label="Destaques da papelaria"><div class="hero-slides" id="hero-slides"></div><div class="hero-overlay"></div><div class="container"><div class="hero-content"><span class="eyebrow" id="hero-eyebrow">Novidades na Criativa</span><h1 id="hero-title">Materiais para criar.</h1><p id="hero-text">Uma curadoria bonita e prática para estudar, organizar a rotina e dar forma às suas ideias.</p><a class="button" href="#product-area">Explorar produtos <span>↓</span></a></div><div class="hero-controls"><button class="hero-arrow" id="hero-prev" type="button" aria-label="Imagem anterior">←</button><div class="hero-dots" id="hero-dots"></div><button class="hero-arrow" id="hero-next" type="button" aria-label="Próxima imagem">→</button></div></div></section><section class="section"><div class="container"><div class="section-heading"><div><span class="eyebrow">Encontre seu momento</span><h2>Escolha por categoria</h2></div><p>Do primeiro traço à lista de tarefas: tem um cantinho da Criativa esperando por você.</p></div><div class="category-grid">${Object.entries(categoryInfo).map(([slug, info]) => `<a href="${linkFor(slug)}" class="category-card ${info.tone}"><small>Ver seleção</small><strong>${info.label}</strong></a>`).join('')}</div></div></section><section class="section products-section" id="product-area"></section><section class="section"><div class="container home-note"><div><h2>Seu pedido começa por uma conversa.</h2><p>Escolha seus produtos e fale com a gente pelo WhatsApp.</p></div><a class="button light" href="https://wa.me/?text=Olá! Gostaria de fazer um pedido." target="_blank" rel="noreferrer">Fazer pedido ↗</a></div></section>`; renderProducts(products); }
function renderCategory() { document.querySelector('#page-content').innerHTML = `<section class="page-hero"><div class="container"><span class="eyebrow">Coleção Criativa</span><h1>${pageInfo.title}</h1><p>${pageInfo.text}</p></div></section><section class="section page-products" id="product-area"><div class="container"><div class="filters"><button class="filter active">Todos</button><button class="filter">Mais procurados</button><button class="filter">Novidades</button></div></div></section>`; renderProducts(products.filter(item => item.category === page)); document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(item => item.classList.remove('active')); button.classList.add('active'); })); }

function enhanceAccountModal() { const modal = document.querySelector('#account-modal .modal'); if (!modal) return; modal.innerHTML = `<button class="close" aria-label="Fechar">×</button><span class="eyebrow">Área do cliente</span><h2>Minha conta</h2><div class="account-tabs"><button class="filter active" data-account-view="login-view">Entrar</button><button class="filter" data-account-view="register-view">Criar conta</button></div><div class="account-view" id="login-view"><form class="account-form"><div class="form-field"><label for="account-email">E-mail</label><input id="account-email" type="email" required></div><div class="form-field"><label for="account-password">Senha</label><input id="account-password" type="password" required></div><button class="button" type="submit">Entrar</button><p class="form-message" aria-live="polite"></p></form><a class="account-help" href="#">Esqueci minha senha</a></div><div class="account-view" id="register-view" hidden><form class="account-form"><div class="form-field"><label for="full-name">Nome completo</label><input id="full-name" type="text" required></div><div class="form-field"><label for="register-email">E-mail</label><input id="register-email" type="email" required></div><div class="form-field"><label for="phone">Número de telefone</label><input id="phone" type="tel" required></div><div class="form-field"><label for="register-password">Senha</label><input id="register-password" type="password" required></div><div class="form-field"><label for="confirm-password">Confirmar senha</label><input id="confirm-password" type="password" required></div><button class="button" type="submit">Criar conta</button><p class="form-message" aria-live="polite"></p></form></div>`; const backdrop = document.querySelector('#account-modal'); modal.querySelector('.close').addEventListener('click', () => backdrop.classList.remove('open')); modal.querySelectorAll('[data-account-view]').forEach((tab) => tab.addEventListener('click', () => { modal.querySelectorAll('[data-account-view]').forEach((item) => item.classList.remove('active')); tab.classList.add('active'); modal.querySelectorAll('.account-view').forEach((view) => view.hidden = view.id !== tab.dataset.accountView); })); modal.querySelectorAll('.account-form').forEach((form) => form.addEventListener('submit', (event) => { event.preventDefault(); form.querySelector('.form-message').textContent = 'Área demonstrativa: em breve você poderá acompanhar seus pedidos por aqui.'; })); }
function startHeroCarousel() { const hero = document.querySelector('.hero'); const slides = [{ image: assets.newKit, eyebrow: 'Mochila', title: 'Tudo para sua rotina', text: 'Encontre materiais para estudar, trabalhar e criar.' }, { image: assets.eraser, eyebrow: 'Borracha', title: 'Pequenos detalhes, grandes ideias', text: 'Materiais para deixar sua criatividade acontecer.' }, { image: imageRoot + 'kit de presentear.jpg', eyebrow: 'Estojo', title: 'Organize seus materiais', text: 'Praticidade para levar tudo com você.' }, { image: assets.agendas, eyebrow: 'Caderno', title: 'Anote suas ideias', text: 'Cadernos para estudos, trabalho e momentos criativos.' }, { image: assets.colors, eyebrow: 'Canetas', title: 'Dê cor às suas ideias', text: 'Canetas e materiais para escrever, desenhar e criar.' }, { image: assets.folders, eyebrow: 'Pastas', title: 'Tudo no seu lugar', text: 'Organize seus documentos, trabalhos e materiais.' }]; const slidesTarget = document.querySelector('#hero-slides'); const dotsTarget = document.querySelector('#hero-dots'); let current = 0; slidesTarget.innerHTML = slides.map((slide, index) => `<div class="hero-slide${index === 0 ? ' active' : ''}" style="background-image: url('${slide.image}')" aria-hidden="${index !== 0}"></div>`).join(''); dotsTarget.innerHTML = slides.map((slide, index) => `<button class="hero-dot${index === 0 ? ' active' : ''}" type="button" aria-label="Ir para ${slide.eyebrow}" data-slide="${index}"></button>`).join(''); const showSlide = (index) => { current = (index + slides.length) % slides.length; document.querySelectorAll('.hero-slide').forEach((slide, slideIndex) => { slide.classList.toggle('active', slideIndex === current); slide.setAttribute('aria-hidden', slideIndex !== current); }); document.querySelectorAll('.hero-dot').forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === current)); document.querySelector('#hero-eyebrow').textContent = slides[current].eyebrow; document.querySelector('#hero-title').textContent = slides[current].title; document.querySelector('#hero-text').textContent = slides[current].text; }; showSlide(0); const next = () => showSlide(current + 1); document.querySelector('#hero-prev').addEventListener('click', () => showSlide(current - 1)); document.querySelector('#hero-next').addEventListener('click', next); document.querySelectorAll('.hero-dot').forEach((dot) => dot.addEventListener('click', () => showSlide(Number(dot.dataset.slide)))); let timer = setInterval(next, 4500); hero.addEventListener('mouseenter', () => clearInterval(timer)); hero.addEventListener('mouseleave', () => { timer = setInterval(next, 4500); }); }
function startBannerCarousel() {
  const hero = document.querySelector('.hero');
  const slides = [
    { image: imageRoot + 'banner/banner 01.JPG', eyebrow: 'Setembro · 15/09/2026', title: 'Tudo para sua rotina', text: 'Uma composição aconchegante para estudar, trabalhar e criar.' },
    { image: imageRoot + 'banner/banner 02.JPG', eyebrow: 'Setembro · 16/09/2026', title: 'Pequenos detalhes, grandes ideias', text: 'Materiais e inspirações para deixar sua criatividade acontecer.' },
    { image: imageRoot + 'banner/banner 03.JPG', eyebrow: 'Setembro · 17/09/2026', title: 'Organize seus materiais', text: 'Praticidade e beleza para acompanhar todos os seus projetos.' },
    { image: imageRoot + 'banner/bandeira 04.JPG', eyebrow: 'Setembro · 18/09/2026', title: 'Anote suas ideias', text: 'Um espaço especial para estudos, trabalho e momentos criativos.' },
    { image: imageRoot + 'banner/Banner 05.JPG', eyebrow: 'Setembro · 19/09/2026', title: 'Dê cor às suas ideias', text: 'Inspiração para escrever, desenhar e criar todos os dias.' }
  ];
  const slidesTarget = document.querySelector('#hero-slides');
  const dotsTarget = document.querySelector('#hero-dots');
  let current = 0;
  slidesTarget.innerHTML = slides.map((slide, index) => `<div class="hero-slide${index === 0 ? ' active' : ''}" style="background-image: url('${slide.image}')" aria-hidden="${index !== 0}"></div>`).join('');
  dotsTarget.innerHTML = slides.map((slide, index) => `<button class="hero-dot${index === 0 ? ' active' : ''}" type="button" aria-label="Ir para ${slide.eyebrow}" data-slide="${index}"></button>`).join('');
  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    document.querySelectorAll('.hero-slide').forEach((slide, slideIndex) => {
      slide.classList.toggle('active', slideIndex === current);
      slide.setAttribute('aria-hidden', slideIndex !== current);
    });
    document.querySelectorAll('.hero-dot').forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === current));
    document.querySelector('#hero-eyebrow').textContent = slides[current].eyebrow;
    document.querySelector('#hero-title').textContent = slides[current].title;
    document.querySelector('#hero-text').textContent = slides[current].text;
  };
  showSlide(0);
  const next = () => showSlide(current + 1);
  document.querySelector('#hero-prev').addEventListener('click', () => showSlide(current - 1));
  document.querySelector('#hero-next').addEventListener('click', next);
  document.querySelectorAll('.hero-dot').forEach((dot) => dot.addEventListener('click', () => showSlide(Number(dot.dataset.slide))));
  let timer = setInterval(next, 4500);
  hero.addEventListener('mouseenter', () => clearInterval(timer));
  hero.addEventListener('mouseleave', () => { timer = setInterval(next, 4500); });
}

function configureWhatsappLinks() {
  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => {
    const label = link.textContent.trim().toLowerCase();
    let message = whatsappMessages.contact;
    if (label.includes('meus pedidos')) message = whatsappMessages.orders;
    else if (label.includes('entrega')) message = whatsappMessages.delivery;
    else if (label.includes('pedir pelo whatsapp')) {
      const product = link.closest('.product-card')?.querySelector('h3')?.textContent.trim();
      message = product ? `${whatsappMessages.purchase}\nProduto de interesse: ${product}` : whatsappMessages.purchase;
    } else if (label.includes('fazer pedido')) message = whatsappMessages.purchase;
    link.href = whatsappUrl(message);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    if (!link.closest('.site-footer') && !link.querySelector('.whatsapp-mark')) {
      const logo = document.createElement('img');
      logo.className = 'whatsapp-mark';
      logo.src = assets.logo;
      logo.alt = '';
      link.prepend(logo);
    }
  });
  document.querySelectorAll('.footer-col a').forEach((link) => {
    const label = link.textContent.trim().toLowerCase();
    const labelText = [...link.childNodes].find((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
    if (label === 'fale conosco' && labelText) labelText.textContent = 'Fale Conosco';
    if (label === 'entrega e trocas' && labelText) labelText.textContent = 'Entregas e Trocas';
  });
}

if (page === 'conta') {
  window.location.href = 'index.html';
}

renderHeader();
if (page === 'home') renderHome();
else if (page === 'duvidas' || page === 'sobre') renderInfoPage();
else renderCategory();
renderFooter();
configureWhatsappLinks();
if (page === 'home') startBannerCarousel();

function renderInfoPage() {
  const content = document.querySelector('#page-content');
  if (page === 'duvidas') {
    const questions = [
      ['Como faço para realizar uma compra?', 'Você pode escolher os produtos que deseja pelo site e finalizar sua compra pelo nosso WhatsApp. Nossa equipe irá te ajudar com o pedido e passar todas as informações necessárias.'],
      ['Quais formas de pagamento estão disponíveis?', 'As formas de pagamento disponíveis serão informadas durante o atendimento pelo WhatsApp, de acordo com o seu pedido.'],
      ['Como funciona a entrega?', 'As condições, valores e prazos de entrega podem variar de acordo com a localização e o pedido. Entre em contato pelo WhatsApp para consultar as informações da sua entrega.'],
      ['Posso trocar ou devolver um produto?', 'Sim. Caso precise realizar uma troca ou tenha algum problema com o produto, entre em contato com nossa equipe pelo WhatsApp para receber as orientações.'],
      ['Como posso entrar em contato com a Papelaria Criativa?', 'Você pode falar diretamente com nossa equipe pelo WhatsApp oficial da Papelaria Criativa.']
    ];
    content.innerHTML = `<section class="page-hero"><div class="container"><span class="eyebrow">Atendimento</span><h1>Dúvidas frequentes</h1><p>Estamos aqui para ajudar com suas compras, entregas e dúvidas.</p></div></section><section class="section info-section"><div class="container faq-list">${questions.map(([question, answer]) => `<details><summary>${question}</summary><p>${answer}</p></details>`).join('')}</div></section>`;
    return;
  }

  content.innerHTML = `<section class="page-hero"><div class="container"><span class="eyebrow">Institucional</span><h1>Sobre nós</h1><p>Uma papelaria feita para inspirar ideias e acompanhar o seu dia a dia.</p></div></section><section class="section info-section"><div class="container info-copy"><p>A Papelaria Criativa existe para ajudar você a encontrar produtos de papelaria bonitos, novos, selecionados com cuidado e de qualidade. Reunimos opções para diferentes necessidades e estilos, para que escolher seus materiais também seja uma experiência gostosa.</p><p>Queremos oferecer produtos que façam sentido para o seu dia a dia, seja para estudar, trabalhar, organizar a rotina, presentear ou dar vida a uma ideia. Cada escolha é pensada com carinho, considerando o que você precisa e a experiência que queremos proporcionar.</p><h2>O que acreditamos</h2><p>Nosso trabalho é guiado por princípios simples, que fazem diferença em cada relação e em cada atendimento:</p><ul><li>Respeito aos clientes e aos funcionários;</li><li>Qualidade nos produtos e no serviço;</li><li>Honestidade em todas as relações;</li><li>Responsabilidade no que fazemos;</li><li>Bom atendimento, com atenção e acolhimento;</li><li>Compromisso com você e com a comunidade.</li></ul></div></section>`;
}
