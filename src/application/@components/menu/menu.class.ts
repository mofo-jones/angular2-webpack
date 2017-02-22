export class Menu {

    constructor(public name: string, public link: string, public info: string, public state) {
        if (state === undefined) {
            this.toggleState();
        }
    }

    private toggleState() {
        this.state = (this.state === 'active') ? 'inactive' : 'active';
    }

}
