import { renderSearchFormBlock, listeners as searchFormListeners } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getTodosByCount} from './todo.js';

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('Wade Warren','/img/avatar.png', 1 )
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  );
  searchFormListeners();
  getTodosByCount(0);
  getTodosByCount(5);
  getTodosByCount(20);
})
