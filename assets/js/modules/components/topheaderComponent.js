
class TopHeader {
    constructor(component, idHeader) {
        this.component = component;
        this.idHeader = idHeader;
        }
    create() {
        
        const textHeader = this.component.getAttribute('text');
        const color = this.component.getAttribute('color');
        const route = this.component.getAttribute('route');
        const headerEml = `
          <div route="${route}" class="top-header top-header-elm-${this.idHeader}" style="color:${color}">
            ${textHeader}
          </div>`;
        this.component.insertAdjacentHTML('afterend', headerEml)
        this.component.remove();
        
    }

    action() {
      const currentElm = document.querySelector(`.top-header-elm-${this.idHeader}`);
      currentElm.addEventListener('click', (e) => {
        const route = e.target.getAttribute('route') 
        window.history.pushState({}, '', route);
        this.handleLocation()
      })
    }

    handleLocation() {
      const currentRoute = window.location.pathname;
      if (currentRoute === '/laptop') {
        console.log('abc');
        const h1 = document.createElement('h1')
        h1.textContent = 'hello'
        document.body.appendChild(h1)
      }
    }
}


export default TopHeader