//
[].slice.call(document.getElementsByTagName('a')).forEach(function(element) {
  if(element.href.indexOf(document.location.host) == -1) {
    element.target = '_blank';
  }
})

// menu
!function () {
  var element = document.getElementById('menu-toggle')
  function toggle(event) {
    element.href = (document.location.hash == '#menu') ? '#' : '#menu'
    return toggle
  }
  window.addEventListener('hashchange', toggle())
}()

// google analytics
!function () {
  var ga = document.createElement('script')
  var s = document.getElementsByTagName('script')[0]
  ga.type = 'text/javascript'
  ga.async = true
  ga.src = 'http://www.google-analytics.com/ga.js'
  s.parentNode.insertBefore(ga, s)
}()

// disqus
!function () {
  if (!document.getElementById('disqus_thread')) {
    return
  }
  var disqus_shortname = 'jeancarloemer'
  var dsq = document.createElement('script')
  var s = document.getElementsByTagName('script')[0]
  dsq.type = 'text/javascript'
  dsq.async = true;
  dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
  s.parentNode.insertBefore(dsq, s)
}()
