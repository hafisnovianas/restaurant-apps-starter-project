class RestaurantItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _restaurant = {
    id: null,
    name: null,
    description: null,
    pictureId: null,
    city: null,
    rating: null
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open'});
    this._style = document.createElement('style')
  }

  set restaurant(value) {
    this._restaurant = value;
    this.render();
  }

  get restaurant() {
    return this._restaurant;
  }

  _updateStyle() {
    this._style.textContent = `
      .restaurant-item {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        width: 100%;
        height: 100%;
        border-radius: 5px;
        overflow: hidden;
      }

      .restaurant-item_content {
        padding: 16px;
      }

      .restaurant-item_thumbnail {
        width: 100%;
        height: 200px;
        object-fit: cover;
      }

      .restaurant-item_city {
        font-size: 10px;
        text-transform: uppercase;
        color: #999;
      }

      .restaurant-item_title {
        font-weight: 500;
        font-size: 16px;
        margin-top: 16px;
        transition: 0.3s opacity;
      }

      .restaurant-item_title:hover {
        opacity: 0.5;
      }

      .restaurant-item_description {
        margin-top: 16px;
        font-size: 12px;
        line-height: 1.5em;

        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
      }

      
      @media screen and (min-width: 650px) {
        .restaurant-item_content {
          padding: 16px 32px 32px 32px;
        }

        .restaurant-item_title {
          font-size: 18px;
        }

        .restaurant-item_description {
          font-size: 14px;
        }
      }
    `
  }

  render() {
    this._shadowRoot.innerHTML = '';
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <article class="restaurant-item" id=${this._restaurant.id}>
        <img 
          class="restaurant-item_thumbnail"
          src=${this._restaurant.pictureId}
          alt="Gambar 1"
        />

        <div class="restaurant-item_content">
          <p class="restaurant-item_city">
            Rating ${this._restaurant.rating}
            (${this._restaurant.city})
          </p>

          <h1 class="restaurant-item_title">${this._restaurant.name}</h1>
          <p class="restaurant-item_description">${this._restaurant.description}</p>
        </div>
      </article>    
    `
  }
}

customElements.define('restaurant-item',RestaurantItem);