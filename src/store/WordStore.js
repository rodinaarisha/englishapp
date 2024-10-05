// stores/WordStore.js
import axios from 'axios';
import { makeAutoObservable } from 'mobx';

class WordStore {
  words = [];
  
  constructor() {
    makeAutoObservable(this);
  }

  async fetchWords() {
    try {
      const response = await axios.get('http://itgirlschool.justmakeit.ru/api/words');
      this.words = response.data;
    } catch (error) {
      console.error("Ошибка при получении слов:", error);
    }
  }

  async addWord(newWord) {
    try {
        console.log("Данные для отправки:", newWord);

        const response = await axios.post('http://itgirlschool.justmakeit.ru/api/words/add', newWord, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.data) {
            this.words.push(response.data);
        }
    } catch (error) {
        console.error("Ошибка при добавлении слова:", error.response ? error.response.data : error.message);
    }
}



  async updateWord(id, updatedWord) {
    try {
      await axios.post(`http://itgirlschool.justmakeit.ru/api/words/${id}/update`, updatedWord);
      this.words = this.words.map(word => (word.id === id ? { ...word, ...updatedWord } : word));
    } catch (error) {
      console.error("Ошибка при обновлении слова:", error);
    }
  }

  async deleteWord(id) {
    try {
      await axios.delete(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`);
      this.words = this.words.filter(word => word.id !== id);
    } catch (error) {
      console.error("Ошибка при удалении слова:", error);
    }
  }
}

const wordStore = new WordStore();
export default wordStore;