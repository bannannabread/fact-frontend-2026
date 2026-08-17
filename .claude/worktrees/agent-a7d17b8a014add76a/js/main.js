(function () {
  'use strict';

  var TARGET = new Date('2026-10-16T00:00:00-05:00').getTime();
  var valueEl = document.getElementById('countdown-value');

  function tick() {
    var diff = TARGET - Date.now();

    if (diff <= 0) {
      valueEl.textContent = "It's here";
      return;
    }

    var days = Math.floor(diff / 86400000);
    var hours = Math.floor((diff % 86400000) / 3600000);
    var minutes = Math.floor((diff % 3600000) / 60000);

    valueEl.textContent = days + 'd ' + pad(hours) + 'h ' + pad(minutes) + 'm';
  }

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  tick();
  setInterval(tick, 1000 * 15);

  var nav = document.querySelector('.hero__nav');
  var toggle = document.getElementById('nav-toggle');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('.hero__links a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('[aria-disabled="true"]').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });

  var searchInput = document.getElementById('workshop-search');
  var sessionsRoot = document.getElementById('workshop-sessions');
  var emptyState = document.getElementById('workshop-empty');

  if (searchInput && sessionsRoot) {
    var groups = Array.prototype.slice.call(sessionsRoot.children);

    searchInput.addEventListener('input', function () {
      var query = searchInput.value.trim().toLowerCase();
      var totalVisible = 0;

      groups.forEach(function (group) {
        var rows = Array.prototype.slice.call(group.querySelectorAll('.workshop__row'));
        var visibleInGroup = 0;

        rows.forEach(function (row) {
          var title = row.querySelector('.workshop__title').textContent.toLowerCase();
          var desc = row.querySelector('.workshop__desc').textContent.toLowerCase();
          var match = !query || title.indexOf(query) !== -1 || desc.indexOf(query) !== -1;
          row.hidden = !match;
          if (match) visibleInGroup++;
        });

        group.hidden = visibleInGroup === 0;
        totalVisible += visibleInGroup;
      });

      if (emptyState) {
        emptyState.hidden = totalVisible !== 0;
      }
    });
  }
})();
