import {createElement} from './utils.js'

let content = document.querySelector('#content')

let container = createElement('container')
content.append(container)

let contentWrapper = createElement ('content-wrapper')
container.append(contentWrapper)

let shopsWrapper = createElement('shops-wrapper')
let mapWrapper = createElement()

contentWrapper.append(shopsWrapper, mapWrapper)

let shopSectionTitle = createElement('section-title', 'h2', 'Find us')
let shopList = createElement('shop-list')

shopsWrapper.append(shopsWrapper, mapWrapper)

let ShopItem1 = createShopItem(
    'Parduotuvė 1', 
    '+376056456461', 
    'info@parduotuve1.lt', 
    'T. Masiulio g. 31, 52430 Kaunas', 
    'tel:+376056456461',
    'mailto:info@parduotuve1.lt', 
    'https://goo.gl/maps/R4asUH6kxBmeMYQQ8'
    )

let ShopItem2 = createShopItem(
    'Parduotuvė 2', 
    '+376056456462', 
    'info@parduotuve2.lt', 
    'T. Masiulio g. 31, 52430 Kaunas', 
    'tel:+376056456462',
    'mailto:info@parduotuve2.lt', 
    'https://goo.gl/maps/R4asUH6kxBmeMYQQ8'
    )

let ShopItem3 = createShopItem(
    'Parduotuvė 3', 
    '+376056456463', 
    'info@parduotuve3.lt', 
    'T. Masiulio g. 31, 52430 Kaunas',
    'tel:+376056456463',
    'mailto:info@parduotuve3.lt',
    'https://goo.gl/maps/R4asUH6kxBmeMYQQ8'
    )

let ShopItem4 = createShopItem(
    'Parduotuvė 4',
    '+376056456464',
    'info@parduotuve4.lt',
    'T. Masiulio g. 31, 52430 Kaunas',
    'tel:+376056456464',
    'mailto:info@parduotuve4.lt',
    'https://goo.gl/maps/R4asUH6kxBmeMYQQ8'
    )

shopList.append(ShopItem1, ShopItem2, ShopItem3, ShopItem4)

function createShopItem(title, shopPhone, shopEmail, shopAddress, phoneLink, emaiLink, addressLink6) {
    let shopItem = createElement('shop-item')

    let shopTitle = createElement('shop-title', 'h3', title)
    let shopContactsList = createElement('shop-contacts-list', 'ul')

    shopItem.append(shopTitle, shopContactsList)

    let phoneElement = createShopContactsItem('Phone: ', 'shopPhone', 'tel: phoneLink')
    let emailElement = createShopContactsItem('Email: ', 'shopEmail', 'emailLink')
    let addressElement = createShopContactsItem('Address: ', 'shopAddress', 'https://goo.gl/maps/R4asUH6kxBmeMYQQ8')

    shopContactsList.append(phoneElement, emailElement, addressElement)

 return shopItem
}

function createShopContactsItem(title, linkText, link = '#', linkTarget = '_self') {
    let shopContactItem = createElement('shop-contacts-item', 'li')
   let titleElement = createElement('shop-contacts-item-title', 'span', title)

    let linkElement = document.createElement('a')
    linkElement.textContent = linkText
    linkElement.href = link
    linkElement.target = linkTarget

    shopContactItem.append(titleElement, linkElement)

    return shopContactItem
}

function createMapElement() {
    let mapWrapper = createElement('map-wrapper')
  
    let mapIframe = document.createElement('iframe')
    mapIframe.src = 'https://goo.gl/maps/R4asUH6kxBmeMYQQ8'
    mapIframe.width = '600'
    mapIframe.height = '450'
    mapIframe.style = 'border: 0'
    mapIframe.allowFullscreen = ''
    mapIframe.loading = 'lazy'
    mapIframe,ReferencePolicy = 'no-referrer-when-downgrade'

    mapWrapper.append(mapIframe)

    return mapWrapper
}