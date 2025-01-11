var urlParams = {};
  (window.onpopstate = function () {
      var match;
      var pl     = /\+/g;  // Regex for replacing addition symbol with a space
      var search = /([^&=]+)=?([^&]*)/g;
      var decode = function (s) {
              return decodeURIComponent(s.replace(pl, " "));
          };
      var query  = window.location.search.substring(1);
      while (match = search.exec(query)) {
         urlParams[decode(match[1])] = decode(match[2]);
      }
  })();

  const hiddenFields = document.querySelectorAll('[type=hidden]');

  Array.from(hiddenFields).forEach(function (field) {
      if (urlParams[field.name]) {
          field.value = urlParams[field.name];
      }
  });

  // set hidden title field
  const title = document.querySelector('title');
  const hiddenTitleField = document.querySelector('[name=pageTitle]');
  hiddenTitleField.value = title.text;
</script>
<script>
  // Get the category, action and label from the element and send it to GA. The action is optional, because mostly it will be a click event.
  var trackClickEvent = function () {
    var EventName = this.getAttribute("data-event-name");
    var EventCategory = this.getAttribute("data-event-category");
    var EventAction = this.getAttribute("data-event-action");
    var EventLabel = this.getAttribute("data-event-label");
    dataLayer.push({'event': EventName ,'eventCategory': EventCategory,'eventAction': EventAction,'eventLabel': EventLabel});
  };
  var trackClickEventForm = function () {
    var allAreFilled = true;
    this.parentElement.querySelectorAll("[required]").forEach(function(i) {
      if (!allAreFilled) {
        return;
      };
      if (!i.value){
        allAreFilled = false;
      }
      if (i.type === "radio") {
        let radioValueCheck = false;
        this.parentElement.querySelectorAll(`[name=${i.name}]`).forEach(function(r) {
          if (r.checked) radioValueCheck = true;
        })
        allAreFilled = radioValueCheck;
      }
    });
    if (allAreFilled) {
      var EventName = this.getAttribute("data-event-name");
      var EventCategory = this.getAttribute("data-event-category");
      var EventAction = this.getAttribute("data-event-action");
      var EventLabel = this.getAttribute("data-event-label");
      dataLayer.push({'event': EventName ,'eventCategory': EventCategory,'eventAction': EventAction,'eventLabel': EventLabel});
    }
  };

  // Find all of the elements on the page which have the class 'ga-event'
  var elementsToTrack = document.getElementsByClassName("ga-event");

  // Add an event listener to each of the elements you found
  var elementsToTrackLength = elementsToTrack.length;
  for (var i = 0; i < elementsToTrackLength; i++) {
    if (elementsToTrack[i].nodeName === 'INPUT' && elementsToTrack[i].type === 'submit') {
      elementsToTrack[i].addEventListener('click', trackClickEventForm, false);
    } else {
      elementsToTrack[i].addEventListener('click', trackClickEvent, false);
    }
  }
</script>
<script>
function getParam(name) { name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"), results = regex.exec(location.search); return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " ")); }
Webflow.push(function() {

  // Auto-populate form fields (text fields only) based on query string
  $('input:text, input[type=hidden]').each(function() {
    var paramValue = getParam(this.id);
    if(this.value == "" && paramValue != "") this.value = paramValue;
  });

});
