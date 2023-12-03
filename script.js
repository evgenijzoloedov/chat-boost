
let fetchStyle = function(url) {
    return new Promise((resolve, reject) => {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.onload = () => resolve();
        link.onerror = () => reject();
        link.href = url;

        let headScript = document.querySelector('script');
        headScript.parentNode.insertBefore(link, headScript);
    });
};


function toggleClass (el, className){
    el.classList.toggle(className)
}




function init(){

    fetchStyle('style.css')
        .then(
            () => console.log("style loaded succesfully"),
            () => console.error("style could not be loaded"),
        );
    const container = document.createElement('div', )

    container.className = "fabs"


    const iframe = document.createElement('iframe')
    iframe.className = 'chat'
    iframe.width =600
    iframe.height =600
    iframe.src ='https://f391a238de8e1ec4eb.gradio.live'



    const a = document.createElement('a')
    a.id = "prime"
    a.className = "fab"
    a.addEventListener('click', ()=>{
        toggleClass(i,"zmdi-comment-outline")
        toggleClass(i,"zmdi-close")
        toggleClass(i,"is-active")
        toggleClass(i,"is-visible")
        toggleClass(a,"is-float")
        toggleClass(a,"is-visible")
        toggleClass(iframe,"is-visible")
    })

    const i = document.createElement('i')




    i.className = "prime zmdi zmdi-comment-outline"


    a.appendChild(i)


    container.appendChild(iframe)
    container.appendChild(a)


    document.body.appendChild(container)

}

init()



function myMessage(text){
    return `    <span class="chat_msg_item chat_msg_item_user">
            {text}</span>`
}

function botMessage(text){
    return`             <span class="chat_msg_item chat_msg_item_admin">
            <div class="chat_avatar">
               <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
            </div>{text}</span>`
}



function call(){


    setTimeout(()=>{
        var iframe = document.querySelector('.gradio-container')
        console.log(iframe)
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

        console.log("innerDoc: ",innerDoc)

    },5000)


}

call()






