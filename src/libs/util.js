let util = {}
util.title = function(title) {
  title = title ? title + ' - Feddy' : 'iView project'
  window.document.title = title
}

export default util
