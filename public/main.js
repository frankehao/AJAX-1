let n = 1
getPage.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', `/page${n + 1}`)
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response)
      array.forEach((item) => {
        const li = document.createElement('li')
        li.textContent = item.id
        xxx.appendChild(li)
      })
      n += 1
    }
  }
  request.send()
}

getJSON.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/5.json')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = JSON.parse(request.response)
      console.log(dom)
    }
  }
  request.send()
}
getXML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/4.xml')
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const dom = request.responseXML
      const text = dom.getElementsByTagName('warning')[0].textContent
      console.log(text)
    }
  }
  request.send()
}

getHTML.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/3.html')
  request.onload = () => {
    const abc = document.createElement('div')
    abc.innerHTML = request.response
    document.body.appendChild(abc)
  }
  request.send()
}

getJS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/2.js')
  request.onload = () => {
    const asdf = document.createElement('script')
    asdf.innerHTML = request.response
    document.body.appendChild(asdf)
  }
  request.send()
}
getCSS.onclick = () => {
  const request = new XMLHttpRequest()
  request.open('GET', '/style.css')
  request.onload = () => {
    const style = document.createElement('style')
    style.innerHTML = request.response
    document.head.appendChild(style)
  }

  request.send()
}
