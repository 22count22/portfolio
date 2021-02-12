export class Repo {
    id = null;
    name = '';
    clone_url = '';

    constructor(repos) {
        Object.assign(this, repos);
    }

    render() {
        const container = document.createElement('div');
        container.id = `divResult${this.id}: ${this.name}`;

        const anchorEl = document.createElement('a');
        anchorEl.href = this.clone_url;
        anchorEl.textContent = this.name;
        anchorEl.setAttribute('target', '_blank');
        container.appendChild(anchorEl);
        container.appendChild(document.createElement('br'));
        return container;

    }




}