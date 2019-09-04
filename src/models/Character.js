class Character extends DOMGui {

    constructor(params) {
        super();
        this._rolClass = 'Warrior';
        this._weapon;
        this.clothes;
        this._DOMElements = {
            rolClass: undefined,
            weapon: undefined,
            clothes: undefined
        }
        this.setDOMElements(params);
    }

    set weapon(value) {
        this._weapon = value;

        console.log('selector', `#${this._rolClass} ${this._DOMElements.weapon}`);

        document.querySelector(`#${this._rolClass} ${this._DOMElements.weapon}`).style.fill = this._weapon;
    }

    get weapon() {
        return this._weapon;
    }
    set clothes(value) {
        this._clothes = value;

        console.log('selector', `#${this._rolClass} ${this._DOMElements.clothes}`);

        let capa = document.querySelectorAll(`#${this._rolClass} ${this._DOMElements.clothes}`);

        capa.forEach(element => {
            element.style.fill = this.clothes;
        });

    }

    get clothes() {
        return this._clothes;
    }

    set rolClass(value) {
        this._rolClass = value;
        let svg = document.querySelector(this._DOMElements.rolClass);
        for (const children of svg.children) {
            if (children.id == value) {
                children.classList.add('selected');
            } else {
                children.classList.remove('selected');
            }
        }
        this.weapon = this._weapon;
        this.clothes = this._clothes;

    }

    get rolClass() {
        return this._rolClass;
    }
}