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
    var closeMenu = function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('.hero__links a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', function (event) {
      if (nav.classList.contains('is-open') && !nav.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }

  var disabledAnnouncer = null;

  function announceDisabled(el) {
    if (!disabledAnnouncer) {
      disabledAnnouncer = document.createElement('div');
      disabledAnnouncer.setAttribute('aria-live', 'polite');
      disabledAnnouncer.className = 'sr-only';
      document.body.appendChild(disabledAnnouncer);
    }

    var clone = el.cloneNode(true);
    Array.prototype.slice.call(clone.querySelectorAll('.sr-only')).forEach(function (node) {
      node.remove();
    });
    var label = clone.textContent.trim();
    var reason = el.getAttribute('title') || 'Not available yet';

    disabledAnnouncer.textContent = '';
    window.setTimeout(function () {
      disabledAnnouncer.textContent = label + ' — ' + reason;
    }, 50);
  }

  var lockedTip = null;
  var lockedTipHideTimer = null;

  function showLockedTip(el, text) {
    if (!lockedTip) {
      lockedTip = document.createElement('div');
      lockedTip.className = 'locked-tip';
      document.body.appendChild(lockedTip);
    }

    var rect = el.getBoundingClientRect();
    lockedTip.style.left = (rect.left + rect.width / 2) + 'px';
    lockedTip.style.top = (rect.bottom + 10) + 'px';
    lockedTip.textContent = text;
    lockedTip.classList.add('is-visible');

    window.clearTimeout(lockedTipHideTimer);
    lockedTipHideTimer = window.setTimeout(function () {
      lockedTip.classList.remove('is-visible');
    }, 2200);
  }

  window.addEventListener('scroll', function () {
    if (lockedTip) {
      lockedTip.classList.remove('is-visible');
    }
  }, { passive: true });

  document.querySelectorAll('[aria-disabled="true"]').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      announceDisabled(el);
      var reason = el.getAttribute('title');
      if (reason) {
        showLockedTip(el, reason);
      }
    });
  });

  var jumpnav = document.querySelector('.team__jumpnav');
  var jumpgroups = document.querySelectorAll('.team__groups > div[id]');

  if (jumpnav && jumpgroups.length && 'IntersectionObserver' in window) {
    var jumplinks = {};
    jumpnav.querySelectorAll('.team__jumplink').forEach(function (link) {
      jumplinks[link.getAttribute('href').slice(1)] = link;
    });

    var jumpObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var link = jumplinks[entry.target.id];
        if (link) {
          link.classList.toggle('is-active', entry.isIntersecting);
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    jumpgroups.forEach(function (group) {
      jumpObserver.observe(group);
    });
  }

  var sealIcons = Array.prototype.slice.call(document.querySelectorAll('.cta__icon, .mahiwagahan__icon'));

  if (sealIcons.length && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-seal-armed');

    var sealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-stamped');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    sealIcons.forEach(function (icon) {
      sealObserver.observe(icon);
    });
  }

  var quoteReveal = document.querySelector('.quote-reveal');

  if (quoteReveal && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('js-quote-armed');

    var quoteRevealParts = [quoteReveal.querySelector('.quote-reveal__mark')]
      .concat(Array.prototype.slice.call(quoteReveal.querySelectorAll('.quote-reveal__seg')))
      .concat([quoteReveal.querySelector('.quote-reveal__cite')])
      .filter(Boolean);

    var quoteDelays = [0, 250, 330, 410, 520];

    var quoteObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          quoteRevealParts.forEach(function (part, i) {
            window.setTimeout(function () {
              part.classList.add('is-revealed');
            }, quoteDelays[i] || quoteDelays[quoteDelays.length - 1] + (i - quoteDelays.length + 1) * 80);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    quoteObserver.observe(quoteReveal);
  }

  var themeStage = document.querySelector('.theme__stage');
  var themeHeading = document.querySelector('.section__heading--theme');
  var sparkles = themeStage ? Array.prototype.slice.call(themeStage.querySelectorAll('.theme__sparkle')) : [];
  var sparkleGlyphs = themeStage ? Array.prototype.slice.call(themeStage.querySelectorAll('.theme__sparkle-glyph')) : [];

  if (themeStage && themeHeading && sparkles.length) {
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fineHover = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var interactive = !reduceMotion && fineHover;

    var themeVisible = false;
    var pointerActive = false;
    var pointerX = 0;
    var pointerY = 0;
    var rafId = null;
    var targets = sparkles.map(function () {
      return { x: 0, y: 0 };
    });

    var setVisible = function (visible) {
      themeVisible = visible;
      sparkleGlyphs.forEach(function (glyph) {
        glyph.classList.toggle('is-visible', visible);
      });
      if (!visible) {
        pointerActive = false;
        stopLoop();
        resetTheme();
      }
    };

    var resetTheme = function () {
      themeStage.classList.remove('is-tracking');
      themeHeading.style.setProperty('--tilt-x', '0deg');
      themeHeading.style.setProperty('--tilt-y', '0deg');
      themeHeading.style.setProperty('--theme-glow', '0px');
      sparkles.forEach(function (sparkle, i) {
        targets[i].x = 0;
        targets[i].y = 0;
        sparkle.style.transform = '';
      });
    };

    var startLoop = function () {
      if (rafId === null) {
        themeStage.classList.add('is-tracking');
        rafId = window.requestAnimationFrame(loop);
      }
    };

    var stopLoop = function () {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    function loop() {
      if (!pointerActive) {
        rafId = null;
        return;
      }

      var stageRect = themeStage.getBoundingClientRect();
      var headRect = themeHeading.getBoundingClientRect();
      var cx = headRect.left + headRect.width / 2;
      var cy = headRect.top + headRect.height / 2;
      var dx = Math.max(-1, Math.min(1, (pointerX - cx) / (headRect.width / 2)));
      var dy = Math.max(-1, Math.min(1, (pointerY - cy) / (headRect.height / 2)));

      themeHeading.style.setProperty('--tilt-y', (dx * 3).toFixed(2) + 'deg');
      themeHeading.style.setProperty('--tilt-x', (-dy * 3).toFixed(2) + 'deg');

      var dist = Math.hypot(pointerX - cx, pointerY - cy);
      themeHeading.style.setProperty('--theme-glow', Math.max(0, 16 - dist / 20).toFixed(1) + 'px');

      sparkles.forEach(function (sparkle, i) {
        var base = sparkle.getBoundingClientRect();
        var sx = base.left + base.width / 2 - stageRect.left - targets[i].x;
        var sy = base.top + base.height / 2 - stageRect.top - targets[i].y;
        var px = pointerX - stageRect.left;
        var py = pointerY - stageRect.top;
        var pdx = px - sx;
        var pdy = py - sy;
        var pdist = Math.hypot(pdx, pdy);
        var pull = pdist < 160 ? 1 - pdist / 160 : 0;
        var t = targets[i];
        t.x += (pdx * pull * 0.3 - t.x) * 0.12;
        t.y += (pdy * pull * 0.3 - t.y) * 0.12;
        sparkle.style.transform = 'translate(' + t.x.toFixed(1) + 'px, ' + t.y.toFixed(1) + 'px)';
      });

      rafId = window.requestAnimationFrame(loop);
    }

    if ('IntersectionObserver' in window) {
      var themeObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          setVisible(entry.isIntersecting);
        });
      }, { threshold: 0.2 });
      themeObserver.observe(themeStage);
    } else {
      setVisible(true);
    }

    if (interactive) {
      document.addEventListener('mousemove', function (event) {
        if (!themeVisible) {
          return;
        }

        var rect = themeStage.getBoundingClientRect();
        var margin = 140;
        var inside = event.clientX > rect.left - margin && event.clientX < rect.right + margin &&
          event.clientY > rect.top - margin && event.clientY < rect.bottom + margin;

        pointerActive = inside;

        if (inside) {
          pointerX = event.clientX;
          pointerY = event.clientY;
          startLoop();
        } else {
          stopLoop();
          resetTheme();
        }
      });
    }
  }

  var carouselTrack = document.getElementById('about-carousel-track');

  if (carouselTrack) {
    var carouselSlides = Array.prototype.slice.call(carouselTrack.children);
    var carouselPrev = document.querySelector('.photocarousel__nav--prev');
    var carouselNext = document.querySelector('.photocarousel__nav--next');
    var carouselDotsWrap = document.querySelector('.photocarousel__dots');
    var carouselDots = carouselDotsWrap ? Array.prototype.slice.call(carouselDotsWrap.children) : [];
    var carouselStatus = document.getElementById('about-carousel-status');
    var carouselReduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var carouselAnnouncer = null;

    var carouselAnnounce = function (text) {
      if (!carouselAnnouncer) {
        carouselAnnouncer = document.createElement('div');
        carouselAnnouncer.setAttribute('aria-live', 'polite');
        carouselAnnouncer.className = 'sr-only';
        document.body.appendChild(carouselAnnouncer);
      }
      carouselAnnouncer.textContent = '';
      window.setTimeout(function () {
        carouselAnnouncer.textContent = text;
      }, 50);
    };

    var carouselActiveIndex = function () {
      var idx = -1;
      carouselDots.forEach(function (dot, i) {
        if (dot.classList.contains('is-active')) idx = i;
      });
      return idx === -1 ? 0 : idx;
    };

    var carouselScrollTo = function (index) {
      var clamped = Math.max(0, Math.min(carouselSlides.length - 1, index));
      var target = carouselSlides[clamped].offsetLeft;

      if (carouselReduceMotion) {
        carouselTrack.scrollLeft = target;
        return;
      }

      carouselTrack.style.scrollSnapType = 'none';
      carouselTrack.scrollTo({ left: target, behavior: 'smooth' });
      window.setTimeout(function () {
        carouselTrack.style.scrollSnapType = '';
        if (Math.abs(carouselTrack.scrollLeft - target) > 2) {
          carouselTrack.scrollLeft = target;
        }
      }, 450);
    };

    if (carouselPrev) {
      carouselPrev.addEventListener('click', function () {
        carouselScrollTo(carouselActiveIndex() - 1);
      });
    }

    if (carouselNext) {
      carouselNext.addEventListener('click', function () {
        carouselScrollTo(carouselActiveIndex() + 1);
      });
    }

    carouselDots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        carouselScrollTo(i);
      });
    });

    if (carouselDotsWrap) {
      carouselDotsWrap.addEventListener('keydown', function (event) {
        var target;
        if (event.key === 'ArrowLeft') {
          target = Math.max(0, carouselActiveIndex() - 1);
        } else if (event.key === 'ArrowRight') {
          target = Math.min(carouselDots.length - 1, carouselActiveIndex() + 1);
        } else if (event.key === 'Home') {
          target = 0;
        } else if (event.key === 'End') {
          target = carouselDots.length - 1;
        } else {
          return;
        }

        event.preventDefault();
        carouselScrollTo(target);
        carouselDots[target].focus();
      });
    }

    carouselTrack.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        carouselScrollTo(carouselActiveIndex() - 1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        carouselScrollTo(carouselActiveIndex() + 1);
      }
    });

    if ('IntersectionObserver' in window) {
      var carouselMounted = false;

      var carouselObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var i = carouselSlides.indexOf(entry.target);
          carouselDots.forEach(function (dot, di) {
            var active = di === i;
            dot.classList.toggle('is-active', active);
            dot.setAttribute('aria-selected', active ? 'true' : 'false');
            dot.setAttribute('tabindex', active ? '0' : '-1');
          });
          if (carouselStatus) carouselStatus.textContent = String(i + 1);
          if (carouselMounted) {
            carouselAnnounce('Photo ' + (i + 1) + ' of ' + carouselSlides.length);
          }
        });
      }, { root: carouselTrack, threshold: 0.6 });

      carouselSlides.forEach(function (slide) {
        carouselObserver.observe(slide);
      });

      window.requestAnimationFrame(function () {
        carouselMounted = true;
      });
    }
  }

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

  var trailerVideoId = 'Nbb1xQN95Ts';
  var trailerPoster = document.querySelector('.trailer__poster');

  if (trailerPoster) {
    trailerPoster.addEventListener('error', function () {
      trailerPoster.src = 'https://i.ytimg.com/vi/' + trailerVideoId + '/mqdefault.jpg';
    }, { once: true });
  }

  var trailerTrigger = document.getElementById('trailer-trigger');
  var trailerModal = document.getElementById('trailer-modal');
  var trailerFrame = document.getElementById('trailer-modal-frame');

  if (trailerTrigger && trailerModal && trailerFrame) {
    var trailerLastFocused = null;
    var trailerInertTargets = Array.prototype.slice.call(document.querySelectorAll('body > header, body > main'));

    var setTrailerInert = function (isInert) {
      trailerInertTargets.forEach(function (el) {
        if (isInert) {
          el.setAttribute('inert', '');
        } else {
          el.removeAttribute('inert');
        }
      });
    };

    var onTrailerKeydown = function (event) {
      if (event.key === 'Escape') {
        closeTrailer();
      }
    };

    var openTrailer = function () {
      trailerLastFocused = document.activeElement;

      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + trailerVideoId + '?autoplay=1&mute=1&rel=0';
      iframe.title = 'FACT 2026 teaser trailer';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      trailerFrame.appendChild(iframe);

      trailerModal.hidden = false;
      document.documentElement.classList.add('has-trailer-open');
      document.addEventListener('keydown', onTrailerKeydown);
      setTrailerInert(true);

      var closeBtn = trailerModal.querySelector('.trailer-modal__close');
      if (closeBtn) closeBtn.focus();
    };

    var closeTrailer = function () {
      trailerModal.hidden = true;
      trailerFrame.innerHTML = '';
      document.documentElement.classList.remove('has-trailer-open');
      document.removeEventListener('keydown', onTrailerKeydown);
      setTrailerInert(false);
      if (trailerLastFocused) trailerLastFocused.focus();
    };

    trailerTrigger.addEventListener('click', openTrailer);

    Array.prototype.slice.call(trailerModal.querySelectorAll('[data-trailer-close]')).forEach(function (el) {
      el.addEventListener('click', closeTrailer);
    });
  }
})();
