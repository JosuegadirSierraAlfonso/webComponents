let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js","");

export default class mySection2 extends HTMLElement{
    static async components(){
        return await ( await fetch(pathName.replace(".js", ".html"))).text();
    }
    constructor(){
        super();
        this.attachShadow({ mode: "open" });
    }
    handleEvent(e){
        (e.type === "click") ? this.send(e)
        : undefined;
    }
    send(e){
        console.log(e);
        e.preventDefault();
        alert("infoo")
    }


    handleEventt(e){
        (e.type === "click") ? this.envio(e)
        : undefined;
    }
    envio(e){
        console.log(e);
        e.preventDefault();
        alert("informacion")
    }


    handleEventtt(e){
        (e.type === "click") ? this.inf(e)
        : undefined;
    }
    inf(e){
        console.log(e);
        e.preventDefault();
        alert("sub info")
    }

    connectedCallback(){
        Promise.resolve(mySection2.components()).then(html=>{
            this.shadowRoot.innerHTML = html;

            this.MySection = this.shadowRoot.querySelector(".boton1")
            this.MySection.addEventListener("click", this.handleEvent.bind(this))

            this.btn = this.shadowRoot.querySelector(".boton2")
            this.btn.addEventListener("click", this.handleEventt.bind(this))

            this.info = this.shadowRoot.querySelector(".boton3")
            this.info.addEventListener("click", this.handleEventtt.bind(this))
        })
    }
}
customElements.define(name, mySection2)