export default class Header {
  showAccount () {
    window.alert('Minha conta')
  }

  render () {
    const header = document.createElement('header')

    const h1 = document.createElement('h1')
    h1.innerText = 'TargetFlix'
    header.appendChild(h1)

    const div = document.createElement('div')
    div.className = 'right'

    const input = document.createElement('input')
    input.type = 'text'
    input.placeholder = 'Busque um título'
    div.appendChild(input)

    const linkGender = document.createElement('a')
    linkGender.href = '#'
    linkGender.innerText = 'Gêneros'
    div.appendChild(linkGender)

    const linkProfile = document.createElement('a')
    linkProfile.href = '#'
    linkProfile.innerText = 'Perfis'
    div.appendChild(linkProfile)

    const linkAccount = document.createElement('a')
    linkAccount.href = '#'
    linkAccount.onclick = this.showAccount
    linkAccount.innerText = 'Conta'
    div.appendChild(linkAccount)

    header.appendChild(div)

    return header
  }
}
