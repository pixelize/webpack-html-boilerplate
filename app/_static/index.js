
import querystring from 'querystring'

import '../styles/main.scss'
import main from '../scripts/main'

import '../images/icons/config.font.json'

import mainView from '../pages/home.html'
import DetailView from '../pages/detail.html'

let view

const qs = querystring.parse(window.location.search.replace(/^\?/, ''))
switch (qs.page) {
  case 'detail':
    view = DetailView
    break
  default:
    view = mainView
}

document.getElementById('app').innerHTML = view
main()

if (module.hot) {
  module.hot.accept()
}
