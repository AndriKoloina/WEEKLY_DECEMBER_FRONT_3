function _$(elts) { return document.getElementById(elts) }
function _createElts(elts) { return document.createElement(elts)}

const nav_Link = _$("nav-link")
const btn_1 = _$("btn1")
const btn_2 = _$("btn2")
const btn_3 = _$("btn3")
const btn_4 = _$("btn4")
const btn5 = _$("btn5")
const btn6 = _$("btn6")
const title = _$("title")
const cover = _$("image-cover")
const graph1 = _$("graph1")
const graph2 = _$("graph2")
const icon = _$("icon")
const id_talk = _$("id-talk")
const line1 = _$("line_1")
const line2 = _$("line_2")
const recent1 = _$("recent1")
const recent2 = _$("recent2")
const recent3 = _$("recent3")
const barre1 = _$("barre1")
const barre2 = _$("barre2")
const article = _$("article")
const lien_footer = _$("lien_footer1")
const lien_footer2 = _$("lien_footer2")
const graph_footer = _$("graph-footer")


let tab_image_member = ["image/Scribble (3).png","image/Shining stars.png","image/Face 1.png"]
let tab_image_member1 = ["image/Face 5.png","image/Fire.png","image/Group.png"]
let tab_title_member = ["Topic by Request","Exclusive Content","Join the Community"]
let tab_title_member1 = ["Livestreaming Access","Exclusive Episodes & Merch","And much more!"]
let tab_image_cover = ["image/cover4.png","image/cover.png","image/cover (1).png","image/cover (2).png","image/cover (3).png"]
let tab_nav_link = ["Episode","About","More"]
let tab_title = ["Podcast"]
let tab_icon = ["image/Spotify.png","image/Google Podcast.png","image/Youtube.png"]
let tab_text_graph = ["image/Illustration 01.png","image/ideas.png"]
let tab_recent1 = ["image/cover (12).png","image/cover (9).png"]
let tab_recent2 = ["image/cover (10).png","image/cover (8).png"]
let tab_recent3 = ["image/cover (6).png","image/cover (7).png"]

let tab_epi1 = ["eps. 6","eps. 5"]
let tab_epi2 = ["eps. 4","eps. 3"]
let tab_epi3 = ["eps. 2","eps. 1"]
let tab_image_art = ["image/img.png","image/img (1).png"]
let tab_image_art1 = ["PODCAST","TIPS & TRICK"]
let tab_image_art2 = ["Setup your own podcast","Doodle artwork 101"]
let tab_image_art3 = ["Sep 14, 2021","Sep 12, 2021"]

let tab_title_cover1 = ["Pandemic Becoming Endemic","Tesla Autopilot Controversy"]
let tab_title_cover2 = ["Women's Rights? Is it alright?","How to Deal with Self–Confidence"]
let tab_title_cover3 = ["Type of Social Classes of People","Are you a Perplexed Mind Person?"]
let tab_become_name = [" Member","Family","Official"]
let tab_become_price = ["$9.99 /month","$14.99 /month","$29.99 /month"]
let tab_become_info1 = ["• Exclusive Content","• 5% Discount on Merch","• Join the Community","• Join the Community"]
let tab_become_info2 = ["• Everything in Tier 1","• Free tickets to Events","• Limited Edition Merch","• Promote your Product","• Request Topic"]
let tab_become_info3 = ["• Everything in Tier 2","• Exclusive Badge on Livestreaming","• Become an Official Sponsor","• Early Access to All Episodes","• Free Stikers and Merch"]
let tab_footer1 = ["About","Testimonials","Features"]
let tab_footer2 = ["Episode","Pricing","Blog"]

let data1 = "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor."
const text_3 = document.getElementById("text_3")
let array = ["CAST"]
let wordIndex = 0
let letterIndex = 0
let data2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "

const createLetter = (selector, table) =>{
     const letter = document.createElement("h4")
    selector.appendChild(letter)

    letter.textContent = table[wordIndex][letterIndex]

    if (table[wordIndex][letterIndex] === " ") {
        letter.textContent = "\u00A0"
    } else {
        letter.textContent = table[wordIndex][letterIndex]
    }

}
// une fonction qui affiche un à un chaque alphabet d'un mot
const loop = () => {
    setTimeout(() =>{
        if(letterIndex < array[wordIndex].length) {
            createLetter(text_3,array,"rgba(205, 70, 49, 1)")
            letterIndex++
            loop()
        }
    },200)
}
loop()
///(------)
const navLink = (selector, table) => {
    table.forEach((data) => {   
  let lien = _createElts("td")
      selector.appendChild(lien)
  
      let lien_href = _createElts("span")
      lien.appendChild(lien_href)
  
      let a = _createElts("a")
      a.href = "#"
      a.textContent = data
      a.classList.add("style-element")
      a.classList.add("a")
      lien_href.appendChild(a)
     
    })
}

navLink(nav_Link,tab_nav_link)

const buttonCheck = (selector,height,width,value,backgroundColor, color,borderColor,radius,marginTop,marginLeft) => {
    let t_btn = _createElts("button")
    selector.appendChild(t_btn)

    t_btn.style.height = height + "rem"
    t_btn.style.width = width + "rem"
    t_btn.textContent = value
    t_btn.style.background = backgroundColor
    t_btn.style.color = color
    t_btn.style.borderColor = borderColor
    t_btn.style.borderRadius = radius + "px"
    t_btn.classList.add("btn_1")
    t_btn.style.marginTop = marginTop + "rem"
    t_btn.style.marginLeft = marginLeft + "rem"
    t_btn.classList.add("style-element")
    t_btn.classList.add("button-hover")
}

buttonCheck(btn_1,3,15,"RECENT EPISODES","transparent","black","black",10,0,)
buttonCheck(btn_2,3,15,"SUBSCRIBE","black","white","black",10,0,2)

const loop2 = () => {
    setTimeout(() =>{
        if(letterIndex < tab_title[wordIndex].length) {
            createLetter(title,tab_title,"rgba(205, 70, 49, 1)")
            letterIndex++
            loop2()
        }
    },200)
}
loop2()
buttonCheck(btn_3,3,15,"SUBSCRIBE","black","white","black",15,5,8)

const image_grid = (selector,data,width,height,marginTop,marginLeft) =>{
    selector.src = data
    selector.style.width = width + "rem"
    selector.style.height = height + "rem"
    selector.style.marginTop = marginTop + "rem"
    selector.style.marginLeft = marginLeft + "rem"
}

const icon_grid = (selector,table,width,white,marginTop,marginLeft) =>{
    table.forEach((data) => {
    let t_div = _createElts("div")
    let t_img = _createElts("img")
    selector.appendChild(t_div)
    t_div.appendChild(t_img)

    image_grid(t_img,data,width,white,marginTop,marginLeft)
 
    })
}

icon_grid(cover,tab_image_cover,17,21,0,2.6)

const graph =(selector,height,width,color,radius,classe) => {
    selector.style.width = width + "rem"
    selector.style.height = height + "rem"
    selector.style.background = color
    selector.style.borderRadius = radius + "rem"
    selector.classList.add(classe)
}

graph(graph1,0.1,56,"rgba(77, 77, 77, 1)",0)
graph(graph2,0.1,56,"rgba(77, 77, 77, 1)",0)

icon_grid(icon,tab_icon,5,1.5,1.6,9)

const text_graph = (selector,table,width,height,marginTop,marginLeft) =>{
    table.forEach((data) => {
    let t_div = _createElts("div")
    let t_img = _createElts("img")
    let t_p = _createElts("p")
    let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. "
    selector.appendChild(t_div)
    t_div.appendChild(t_img)
    t_div.appendChild(t_p)
    
    image_grid(t_img,data,width,height,marginTop,marginLeft)
    t_p.textContent = text
    t_p.classList.add("element-p")
    })
}
text_graph(id_talk,tab_text_graph,13,13,0,8)


const affiche = (selector, table1, table2, data) => {
    for (let i = 0; i < table1.length; i++) {
        let t_div = _createElts("div")
        selector.appendChild(t_div)

        let t_img = _createElts("img")
        t_div.appendChild(t_img)

        let t_span1 = _createElts("div")
        t_div.appendChild(t_span1)

        let t_span2 = _createElts("div")
        t_div.appendChild(t_span2)

        image_grid(t_img, table1[i], 5, 5,0, 7)
        t_img.classList.add("element-line1_3")

        t_span1.textContent = table2[i]
        t_span1.classList.add("element-line1_1")

        t_span2.textContent = data
        t_span2.classList.add("element-line1_2")
    }
}

affiche(line1, tab_image_member, tab_title_member, data1)
affiche(line2, tab_image_member1, tab_title_member1, data1)

buttonCheck(btn_4,4,12,"SEE PRICING","black","white","transparent",10,-0.4,-0.4)

graph(btn_4,4,12,"rgba(0, 0, 0, 0.25)",1,"shadow")

const grafity_button = (selector,value1,value2,width1,height1,width2,height2) =>{
    let t_div = _createElts("div")
    selector.appendChild(t_div)
    
    let btn1 = _createElts("span")
    t_div.appendChild(btn1)

    let btn2 = _createElts("span")
    t_div.appendChild(btn2)

    let t_span = _createElts("span")
    
    buttonCheck(btn1,width1,height1,value1,"transparent","black","rgba(77, 77, 77, 1)",2,0,0)
    buttonCheck(btn1,width2,height2,value2,"transparent","black","rgba(77, 77, 77, 1)",2,0,1)
}


const barre_image = (selector,table1,table2,table3,data,value1,value2,width1,width2,height1,height2) => {
    for(let i = 0; i < table1.length; i++){
        let t_div = _createElts("div")
        selector.appendChild(t_div)
        graph(t_div,14,35,"white",1,"space",)

        let t_div1 = _createElts("div")
        t_div.appendChild(t_div1)

        let t_div2 = _createElts("div")
        t_div.appendChild(t_div2)


        let t_img = _createElts("img")
        t_div1.appendChild(t_img)

        let t_div1_1 = _createElts("div")
        t_div1.appendChild(t_div1_1)
        t_div1.classList.add("recent-element")

        t_div1_1.classList.add("space2")

        let t_div1_1_1 = _createElts("div")
        t_div1_1.appendChild(t_div1_1_1)
        t_div1_1_1.classList.add("recent-epi")

        let t_div1_1_2 = _createElts("div")
        t_div1_1.appendChild(t_div1_1_2)
        t_div1_1_2.classList.add("recent-title")

        let t_div1_1_3 = _createElts("div")
        t_div1_1.appendChild(t_div1_1_3)

        let t_div1_1_4 = _createElts("div")
        t_div1_1.appendChild(t_div1_1_4)

        let t_div1_1_5 = _createElts("div")
        t_div1_1.appendChild(t_div1_1_5)

        image_grid(t_img,table1[i],10,10,0,0)
        t_div1_1_1.textContent = table2[i]
        t_div1_1_2.textContent = table3[i]
        graph(t_div1_1_4,0.1,22,"rgba(77, 77, 77, 1)",0)
        t_div1_1_4.style.marginTop = "1rem"

        t_div1_1_5.textContent = data
        t_div1_1_5.classList.add("recent-p")
        
    }
}

barre_image(recent1,tab_recent1,tab_epi1,tab_title_cover1,data2,"covid-19","health",3,3)
barre_image(recent2,tab_recent2,tab_epi2,tab_title_cover2,data2,"self-esteem","health",3,3)
barre_image(recent3,tab_recent3,tab_epi3,tab_title_cover3,data2,"mind behaviour","health",3,3)

buttonCheck(btn5,4,20,"BROWSE ALL EPISODES","black","white","transparent",10,5,36)
buttonCheck(btn6,4,15,"DOWNLOAD NOW","black","white","black",15,10,14)

const barre_title = (selector,table1,table2) =>{
    for(let i=0; i< table1.length;i++){
        let t_span = _createElts("div")
        selector.appendChild(t_span)

        if(i==1){
            graph(t_span,"",18,"",1,"style2")
        }
        else{
            graph(t_span,"",18,"",1,"style1")

        }
       let  t_div1 = _createElts("div")
        t_span.appendChild(t_div1)

       let  t_div2 = _createElts("div")
        t_span.appendChild(t_div2)

        let t_div3 = _createElts("div")
        t_span.appendChild(t_div3)

       let  t_span1 = _createElts("span")
        t_div3.appendChild(t_span1)

        let  t_span2 = _createElts("span")
        t_div3.appendChild(t_span2)

        t_div1.textContent = table1[i]
        t_div1.classList.add("recent-title")

        t_div2.textContent = "Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod tempor."
        t_div2.classList.add("become-p")

        buttonCheck(t_span1,3,9,"SUBSCRIBE","black","white","black",12,5,0)
        t_span2.textContent = table2[i]
        t_span2.classList.add("price")
    }
}

barre_title(barre1,tab_become_name,tab_become_price)

const barre_title2 = (selector,table2,style) =>{
    for(let i=0; i<1;i++){
        let t_span = _createElts("div")
        selector.appendChild(t_span)
            graph(t_span,"",18,"",1,style)

       let  t_div1 = _createElts("div")
        t_span.appendChild(t_div1)
        t_div1.textContent = "What's included"
        t_div1.classList.add("recent-p")

       let  t_div2 = _createElts("div")
        t_span.appendChild(t_div2)

        table2.forEach((data)=>{
        let t_div2_2 = _createElts("div")
        t_div2.appendChild(t_div2_2)
        t_div2_2.textContent = data
        t_div2_2.classList.add("p-become")
        })
    }
}

barre_title2(barre2,tab_become_info1,"style1")
barre_title2(barre2,tab_become_info2,"style2")
barre_title2(barre2,tab_become_info3,"style1")

const text = (selector,table) => {
    for(let i = 0; i < table.length ; i++){
        let t_div = _createElts("div")
        selector.appendChild(t_div)
        t_div.textContent = table[i]
        t_div.classList.add("footer_lien")
    }
}
text(lien_footer,tab_footer1)
text(lien_footer2,tab_footer2)
graph(graph_footer,0.01,76,"rgba(77, 77, 77, 0.6)",0,"line-footer")