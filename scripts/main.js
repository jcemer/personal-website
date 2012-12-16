
!function () {
    // extracted of Rye
    function prefix(key, obj) {
        var result
          , upcased = key[0].toUpperCase() + key.substring(1)
          , prefixes = ['moz', 'webkit', 'ms', 'o']

        obj = obj || window

        if (result = obj[key]){
            return result
        }

        while(prefix = prefixes.shift()){
            if (result = obj[prefix + upcased]){
                break;
            }
        }
        return result
    }

    // external links
    document.addEventListener('click', function (e) {
        var el = e.target
          , sel = prefix('matchesSelector', el)
        if (sel && sel.call(el, '[rel=external]')) {
            e.preventDefault()
            window.open(el.href)
        }
    })
}()

// google analytics
!function () {
    var ga = document.createElement('script')
      , s = document.getElementsByTagName('script')[0]
    ga.type = 'text/javascript'
    ga.async = true
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'
    s.parentNode.insertBefore(ga, s)
}()