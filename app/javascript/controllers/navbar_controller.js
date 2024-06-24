import { Controller } from "@hotwired/stimulus"
import { useClickOutside } from 'stimulus-use'

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["content"]

  connect() {
    useClickOutside(this)
  }

  clickOutside() {
    this.close()
  }

  closeWithKeyboard(event) {
    if (event.key === "Escape") {
      this.close()
    }
  }

  closeOnBigScreen(event) {
    if (window.innerWidth > 768) {
      this.close()
      console.log('closeOnBigScreen')
    }
  }

  toggle() {
    if (this.contentTarget.classList.contains('hidden')) {
      this.open()
    } else {
      this.close()
    }
  }

  open() {
    this.contentTarget.classList.remove('hidden')
    let main = document.querySelector('main')
    main.classList.add('blur-sm')
    document.body.classList.add('overflow-hidden')
    // add hidden attribute when open
    // main.classList.add('hidden')
  }

  close() {
    this.contentTarget.classList.add('hidden')
    let main = document.querySelector('main')
    main.classList.remove('blur-sm')
    document.body.classList.remove('overflow-hidden')
    // main.classList.remove('hidden')
  }
}
