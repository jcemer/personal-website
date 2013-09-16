//
[].slice.call(document.getElementsByTagName('a')).forEach(function(element) {
  if(element.href.indexOf(document.location.host) == -1) {
    element.target = '_blank';
  }
})

// google analytics
!function () {
  var ga = document.createElement('script')
  var s = document.getElementsByTagName('script')[0]
  ga.type = 'text/javascript'
  ga.async = true
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'
  s.parentNode.insertBefore(ga, s)
}()
