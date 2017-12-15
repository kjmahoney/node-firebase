const form = document.getElementById('wordForm');

form.onsubmit = (event) => {
  event.preventDefault();

  const englishWord = document.getElementById('englishField').value;
  const chineseWord = document.getElementById('chineseField').value;
  const pinyinWord = document.getElementById('pinyinField').value;

  let word = {
      chinese: chineseWord,
      english: englishWord,
      pinyin: pinyinWord
    }

  const database = firebase.database();
  const wordRef = database.ref('/')
  wordRef.push(word);
}
