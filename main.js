"use strict"

  const $ = (selec) => document.querySelector(selec)
  const $$ = (selec) => document.querySelectorAll(selec)

  let $listItems = $(".list-items")
  let $item = $(".item")
  let $deleteItem = $(".delete-item")
  let $itemNumber = $(".item-number")
  let number = 1
  $item.placeholder = `Add # ${number}`

  let adder = () => {
    let $newText = document.createElement("p")
    $newText.innerHTML = "Please enter some text :)"
    $newText.classList.add("message")

    let $newItem = document.createElement("li")
    let $newItemText = document.createElement("span")
    $newItemText.innerHTML = $item.value

    let $newCheck = document.createElement("input")
    $newCheck.type = "checkbox"

    let $text = $(".message")

    if ($item.value === "") {
      if (!document.body.contains($text)) document.body.appendChild($newText)
    } else {
      ++number
      $newItem.appendChild($newCheck)
      $newItem.appendChild($newItemText)
      $listItems.appendChild($newItem)
      if ($text) document.body.removeChild($text)
    }

    $item.value = ""
    $item.placeholder = `Add # ${number}`
    $itemNumber.innerHTML = number - 1

    console.log(number)
  }

  let deleter = () => {
    let $executed = $$("input:checked")
    // console.log(number)
    $executed.forEach((l) => {
      let toDel = l.closest("li")
      $listItems.removeChild(toDel)
      number -= 1
    })
    // console.log(number)

    $item.placeholder = `Add # ${number}`
    if (number < 0) $itemNumber.innerHTML = number - 1
    // console.log(number)
  }

  $item.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) return adder()
  })

  $deleteItem.addEventListener("click", deleter)

