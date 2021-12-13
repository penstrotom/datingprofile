var modal = document.querySelector('.modal');
var closeButtons = document.querySelectorAll('.close-modal');
var openButtons = document.querySelectorAll('.open-modal');

function hideModalText() {
  var shown = document.querySelector('.modal-innermost.show');
  if (shown != null && typeof(shown) !== 'undefined')  {
    shown.classList.remove('show');
  }
};
// set open modal behaviour
for (i = 0; i < openButtons.length; ++i) {
  openButtons[i].addEventListener('click', function(event) {
    modal.classList.toggle('modal-open');
    document.querySelector('#modalcontent-' + this.id.split('-')[1] + '.modal-innermost').classList.add('show');
  });
}
// set close modal behaviour
for (i = 0; i < closeButtons.length; ++i) {
  closeButtons[i].addEventListener('click', function() {
    hideModalText();
    modal.classList.toggle('modal-open');
	});
}
// close modal if clicked outside content area
document.querySelector('.modal-inner').addEventListener('click', function() {
  hideModalText();
  modal.classList.toggle('modal-open');
});
// prevent modal inner from closing parent when clicked
document.querySelector('.modal-content').addEventListener('click', function(e) {
	e.stopPropagation();
});

var today = new Date();
var dateFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
var reservationDatesHTML = "";
var newDate, newDateClass;
for (i = 0; i < 7; ++i) {
  newDate = new Date();
  newDate.setDate(today.getDate() + i);
  newDateClass = '';
  if (newDate.getDay() == 4 || newDate.getDay() == 5) {
    newDateClass = ' reservation-date-label-free';
  }
  reservationDatesHTML += '<span class=\"three columns reservation-date-label' + newDateClass + '\">' + newDate.toLocaleDateString("en-US", dateFormatOptions) + '</span>';
}

document.querySelector('#reservations-dates').innerHTML = reservationDatesHTML;