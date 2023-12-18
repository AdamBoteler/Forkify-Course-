import View from './view';
import icons from 'url:../../img/icons.svg';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');

  _message = 'Recipe uploaded';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this.addHandlerShowWindow();
    this.addHandlerHideWindow();
  }

  toggleWindow = () => {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  };

  addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow);
  }
  addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow);
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
