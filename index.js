"use strict"

const accordions = document.querySelectorAll('.accordion h2')

class Accordion {
  constructor(node) {
    this.rootEl = node
    this.buttonEl = this.rootEl.querySelector('button[aria-expanded]');
    this.showEl = this.rootEl.querySelector('.show-icon')
    this.hideEl = this.rootEl.querySelector('.hide-icon')
    const controlsId = this.buttonEl.getAttribute('aria-controls');
    this.faqEl = document.getElementById(controlsId)

    this.open = this.buttonEl.getAttribute('aria-expanded') === 'true';
    this.buttonEl.addEventListener('click', this.onButtonClick.bind(this))
  }

  onButtonClick() {
    this.toggle(!this.open)
  }

  toggle(open) {
    if(open === this.open) {
      return;
    }

    this.open = open;
    this.buttonEl.setAttribute('aria-expanded', `${open}`)
    if(open) {
      this.faqEl.removeAttribute('hidden');
      this.hideEl.removeAttribute('hidden')
      this.showEl.setAttribute('hidden', '')
    } else {
      this.faqEl.setAttribute('hidden', '');
      this.hideEl.setAttribute('hidden', '')
      this.showEl.removeAttribute('hidden')
    }
  }
}

accordions.forEach((element) => new Accordion(element))