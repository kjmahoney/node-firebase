const form = document.getElementById('wordForm');

form.onsubmit = (event) => {
  event.preventDefault();

  const englishWord = document.getElementById('englishField').value;
  const chineseWord = document.getElementById('chineseField').value;
  const pinyinWord = document.getElementById('pinyinField').value;

  let word = {
     [englishWord] : {
      chinese: chineseWord,
      pinyin: pinyinWord
    }
  }

  console.log(word);

  const database = firebase.database();
  const wordRef = database.ref('/')
  return wordRef.set(word);
}
