Hooks.once('babele.init', (babele) => {
  console.log('Project FU RU | Инициализация перевода...');
  
  babele.register({
    module: 'projectfu-ru',
    lang: 'ru',
    dir: 'compendium/ru'
  });
});