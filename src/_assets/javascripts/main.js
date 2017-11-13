// external links
document.querySelectorAll('a').forEach(function(element) {
  if (element.href.indexOf(document.location.host) == -1) {
    element.target = '_blank'
  }
})

// list menu
!function () {
  var prevList, menu, lists
  var wrapper = document.querySelector('[data-list-wrapper]')

  if (wrapper) {
    window.addEventListener('scroll', debounce(scrollChecker))
    window.addEventListener('resize', debounce(init))

    try {
      document.fonts.ready.then(init)
    } catch (e) {
      setTimeout(init, 1000)
    }
  }

  function getElementBounding(el) {
    var base = el.getBoundingClientRect()
    return {
      top: base.top + window.scrollY,
      bottom: Math.floor((base.top + window.scrollY) + base.height),
      height: Math.floor(base.height),
    }
  }

  function init() {
    menu = function () {
      var el = document.querySelector('[data-list-menu]')
      var item = el.querySelector('[data-list-menu-item]')
      return {
        el: el,
        itemHeight: getElementBounding(item).height,
        top: getElementBounding(wrapper).top,
      }
    }()

    lists = [].map.call(document.querySelectorAll('[data-list]'), function(el) {
      return {
        el: el,
        bottom: getElementBounding(el).bottom,
        height: getElementBounding(el).height,
        menuItemEl: menu.el.querySelector('[href="#' + el.id + '"]'),
      }
    })

    scrollChecker()
    requestAnimationFrame(function () {
      menu.el.classList.add('script-enable')
    })
  }

  function scrollChecker(event) {
    var nextListIndex = lists.findIndex(function (list) {
      return (list.bottom - 50) > window.scrollY
    })

    var nextList = lists[nextListIndex]

    var menuFixed = menu.top <= window.scrollY;

    menu.el.classList.toggle('fixed', menuFixed)
    if (menuFixed) {
      menu.el.style.top = (-menu.itemHeight * nextListIndex) + 'px'
    } else {
      menu.el.style.top = null
    }

    if (event && nextList === prevList) return

    if (event) {
      var scrollY = window.scrollY
      window.location.hash = nextList.el.id
      window.scrollTo(0, scrollY)
    }

    prevList && prevList.menuItemEl.classList.remove('active')
    nextList.menuItemEl.classList.add('active')

    prevList = nextList
  }

  function debounce(fn) {
    var waiting, args

    function later() {
      if (args) {
        fn.apply(null, args)
        args = null
        waiting = requestAnimationFrame(later)
      } else {
        waiting = null
      }
    }

    return function () {
      args = arguments
      !waiting && later()
    }
  }
}()

// disqus
!function () {
  if (!document.getElementById('disqus_thread')) {
    return
  }

  window.disqus_config = function () {
    this.language = 'en';
    this.page.url = 'http://jcemer.com' + document.querySelector('link[rel="canonical"]').getAttribute('href');
  };

  var dsq = document.createElement('script')
  var s = document.getElementsByTagName('script')[0]
  dsq.type = 'text/javascript'
  dsq.async = true
  dsq.src = 'https://jeancarloemer.disqus.com/embed.js'
  s.parentNode.insertBefore(dsq, s)
}()
