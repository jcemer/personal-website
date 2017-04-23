//
[].slice.call(document.getElementsByTagName('a')).forEach(function(element) {
  if (element.href.indexOf(document.location.host) == -1) {
    element.target = '_blank'
  }
})

// disqus
!function () {
  if (!document.getElementById('disqus_thread')) {
    return
  }
  window.disqus_url = 'http://jcemer.com' + document.querySelector('link[rel="canonical"]').getAttribute('href')
  var disqus_shortname = 'jeancarloemer'
  var dsq = document.createElement('script')
  var s = document.getElementsByTagName('script')[0]
  dsq.type = 'text/javascript'
  dsq.async = true
  dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js'
  s.parentNode.insertBefore(dsq, s)
}()
