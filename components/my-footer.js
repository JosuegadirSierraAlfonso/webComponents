let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js","");

export default class myFooter extends HTMLElement{
    static async components(){
        return await ( await fetch(pathName.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
        Promise.resolve(myFooter.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
        })
        console.log("funcionando");
    }
    handleEvent(e){
        (e.type === "click") ? this.send(e)
        : undefined;
    }
    send(e){
        console.log(e);
        e.preventDefault();
        alert("enviado");
    }
    connectedCallback(){
        Promise.resolve(myFooter.components()).then(html=>{
            this.shadowRoot.innerHTML = html;
            this.foot = this.shadowRoot.querySelector("button")
            this.foot.addEventListener("click", this.handleEvent.bind(this))
        })
    }
}
customElements.define(name, myFooter)