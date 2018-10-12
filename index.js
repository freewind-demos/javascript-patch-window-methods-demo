function $aaa() {
  console.log('Hello, $aaa, with args: ', arguments);
}

function $bbb() {
  console.log('Hello, $bbb, with args:', arguments);
}

function patch() {
  console.log('> patch');
  const names = Object.keys(window).filter(it => it.startsWith('$'));
  for (const name of names) {
    const ori = window[name];
    console.log(`patched ${name}`);
    window[name] = function () {
      console.log(`> patched ${name}`, arguments);
      ori(arguments);
    }
  }
}

patch();
