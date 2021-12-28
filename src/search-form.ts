import {renderBlock} from "./lib.js";
import {DateTime} from "/lib/luxon/es6/luxon.js";

export function renderSearchFormBlock(arrivalDate?: Date, departureDate?: Date) {
  const arrivalDateTime = !arrivalDate ? DateTime.now().plus({day: 1}) : DateTime.fromJSDate(arrivalDate);
  const departureDateTime = !departureDate ?
    arrivalDateTime.plus({day: 2}) :
    DateTime.fromJSDate(departureDate);
  const minDate = DateTime.now().toFormat("yyyy-MM-dd");
  const nextMonth = DateTime.now()
    .plus({month: 1});
  const maxDate = nextMonth.set({day: nextMonth.daysInMonth}).toFormat("yyyy-MM-dd");

  renderBlock(
    "search-form-block",
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>-->
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input 
                id="check-in-date" 
                type="date" 
                value="${arrivalDateTime.toFormat("yyyy-MM-dd")}" 
                min="${minDate}" 
                max="${maxDate}" 
                name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input 
                id="check-out-date" 
                type="date" 
                value="${departureDateTime.toFormat("yyyy-MM-dd")}" 
                min="${minDate}" 
                max="${maxDate}" 
                name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `,
  );
}
