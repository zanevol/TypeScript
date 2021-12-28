'use strict';
exports.__esModule = true;
exports.renderToast = exports.renderBlock = void 0;
function renderBlock(elementId, html) {
  var element = document.getElementById(elementId);
  element.innerHTML = html;
}
exports.renderBlock = renderBlock;
function renderToast(message, action) {
  var messageText = '';
  if (message != null) {
    messageText = '\n      <div id="info-block" class="info-block '.concat(message.type, '">\n        <p>').concat(message.text, '</p>\n        <button id="toast-main-action">').concat((action === null || action === void 0 ? void 0 : action.name) || 'Закрыть', '</button>\n      </div>\n    ');
  }
  renderBlock('toast-block', messageText);
  var button = document.getElementById('toast-main-action');
  if (button != null) {
    button.onclick = function () {
      if (action != null && action.handler != null) {
        action.handler();
      }
      renderToast(null);
    };
  }
}
exports.renderToast = renderToast;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGliLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLFNBQWdCLFdBQVcsQ0FBRSxTQUFTLEVBQUUsSUFBSTtJQUMxQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ2xELE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFBO0FBQzFCLENBQUM7QUFIRCxrQ0FHQztBQUVELFNBQWdCLFdBQVcsQ0FBRSxPQUF1QixFQUFFLE1BQU87SUFDM0QsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFBO0lBRXBCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtRQUNuQixXQUFXLEdBQUcsNERBQzZCLE9BQU8sQ0FBQyxJQUFJLDZCQUM5QyxPQUFPLENBQUMsSUFBSSw0REFDZ0IsQ0FBQSxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsSUFBSSxLQUFJLFNBQVMsa0NBRTdELENBQUE7S0FDRjtJQUVELFdBQVcsQ0FDVCxhQUFhLEVBQ2IsV0FBVyxDQUNaLENBQUE7SUFFRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUE7SUFDM0QsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO1FBQ2xCLE1BQU0sQ0FBQyxPQUFPLEdBQUc7WUFDZixJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQzVDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQTthQUNqQjtZQUNELFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNuQixDQUFDLENBQUE7S0FDRjtBQUNILENBQUM7QUExQkQsa0NBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIE1lc3NhZ2Uge1xuICB0eXBlOiBzdHJpbmcsXG4gIHRleHQ6IHN0cmluZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQmxvY2sgKGVsZW1lbnRJZCwgaHRtbCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKVxuICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRvYXN0IChtZXNzYWdlOiBNZXNzYWdlIHwgbnVsbCwgYWN0aW9uPykge1xuICBsZXQgbWVzc2FnZVRleHQgPSAnJ1xuXG4gIGlmIChtZXNzYWdlICE9IG51bGwpIHtcbiAgICBtZXNzYWdlVGV4dCA9IGBcbiAgICAgIDxkaXYgaWQ9XCJpbmZvLWJsb2NrXCIgY2xhc3M9XCJpbmZvLWJsb2NrICR7bWVzc2FnZS50eXBlfVwiPlxuICAgICAgICA8cD4ke21lc3NhZ2UudGV4dH08L3A+XG4gICAgICAgIDxidXR0b24gaWQ9XCJ0b2FzdC1tYWluLWFjdGlvblwiPiR7YWN0aW9uPy5uYW1lIHx8ICfQl9Cw0LrRgNGL0YLRjCd9PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgXG4gIH1cblxuICByZW5kZXJCbG9jayhcbiAgICAndG9hc3QtYmxvY2snLFxuICAgIG1lc3NhZ2VUZXh0XG4gIClcblxuICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QtbWFpbi1hY3Rpb24nKVxuICBpZiAoYnV0dG9uICE9IG51bGwpIHtcbiAgICBidXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGFjdGlvbiAhPSBudWxsICYmIGFjdGlvbi5oYW5kbGVyICE9IG51bGwpIHtcbiAgICAgICAgYWN0aW9uLmhhbmRsZXIoKVxuICAgICAgfVxuICAgICAgcmVuZGVyVG9hc3QobnVsbClcbiAgICB9XG4gIH1cbn1cbiJdfQ==