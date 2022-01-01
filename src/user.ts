import { renderBlock } from './lib.js'

class UserData {
  username = '';
  avatarUrl = '';
}

function getUserData(): UserData {
  const user: unknown = localStorage.getItem('user');
  if (user instanceof UserData) {
    return user
  }
  return {
    username: '',
    avatarUrl: ''
  }
}

function getFavoritesAmount():number {
  const favoritesAmount: unknown = localStorage.getItem('favoritesAmount');
  if (typeof favoritesAmount === 'number')
    return favoritesAmount
  return 0
}

export function renderUserBlock (username: string, avatarLink: string, favoriteItemsAmount?: number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = !!favoriteItemsAmount

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${avatarLink}" alt="${username}" />
      <div class="info">
          <p class="name">${username}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
