const topMenu = document.getElementById( "nav-bar" );
const topMenuHeight = topMenu.offsetHeight + 1;
const menuItems = document.querySelectorAll( ".nav-links" );
const scrollItems = document.querySelectorAll( "section" );
let lastId;
let last_known_scroll_position = 0;
let ticking = false;

var temp = document.getElementsByClassName('nav-links')
for (let index = 0; index < temp.length; index++) {
    const element = temp[index];
    element.addEventListener('click',function(e){
        const aim = e.target.innerHTML.toLowerCase()
        var target = document.getElementById(aim)
        offsetTop = e.target.offsetTop - topMenuHeight + 1;
        const scrollOptions = { scrollIntoView: true, behavior: "smooth" };
        target.scrollIntoView( scrollOptions );
        e.preventDefault();
    })
}

function toggleDiv(e) {
    if (e.target.id=='work') {
        e.target.className = 'selected'
        document.getElementById('proj').className = 'unselected'
        document.getElementById('work-timeline').className = ''
        document.getElementById('proj-timeline').className = 'hidden'
    }
    else{
        e.target.className = 'selected'
        document.getElementById('work').className = 'unselected'
        document.getElementById('proj-timeline').className = ''
        document.getElementById('work-timeline').className = 'hidden'
    }
}
const scrollTo = (ele) => {
    console.log(ele)
    ele.target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

//Make Nav Active when Clicked and scrolls down to section
document.addEventListener( "click", function ( event ) {
    let active = document.querySelector( ".active" );
    if ( active ) {
        active.classList.remove( "active" );
    }
    if ( event.target.classList.contains( "nav-links" ) ) {
        event.target.classList.add( "active" );
    }
} );

// Bind to scroll
window.addEventListener( "scroll", function () {
    // Get container scroll position
    const container = document.querySelector( ".container" );
    let fromTop = window.pageYOffset + topMenuHeight + 40;

    // Get id of current scroll item
    let cur = [];

    [ ...scrollItems ].map( function ( item ) {
        if ( item.offsetTop < fromTop ) {
        cur.push( item );
        }
    } );

    // Get the id of the current element
    cur = cur[ cur.length - 1 ];
    let id = cur ? cur.id : "";

    if ( lastId !== id ) {
        lastId = id;

        menuItems.forEach( function ( elem, index ) {
            elem.classList.remove( "active" );
            const filteredItems = [ ...menuItems ].filter( elem => elem.getAttribute( "href" ) === `#${id}` );
            console.log(filteredItems)
            filteredItems[0].classList.add( "active" );
        } );
    }
} );


const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry=>{
            // console.log(entry.target.className)
            if (entry.isIntersecting){
                    entry.target.classList.add("fadeInUp")
                }
                // // else{
                // //     entry.target.classList.remove("bounceInRight")
                // }
            // if (entry.target.classList.contains('time-element')){
            //     // if (entry.isIntersecting){
            //     //     entry.target.classList.add("bounceInRight")
            //     // }
            //     // // else{
            //     // //     entry.target.classList.remove("bounceInRight")
            //     // // }
            // }
            // else{
            //     if (entry.isIntersecting){
            //         entry.target.classList.add("fadeInUp")
            //     }
            //     // else{
            //     //     entry.target.classList.remove("fadeInUp")
            //     // }     
            // }
        })
})
var ls = document.querySelectorAll("div.content")
for (let index = 0; index < ls.length; index++) {
    const element = ls[index];
    observer.observe(element)
}
var ls2 = document.querySelectorAll(".time-element")
for (let index = 0; index < ls2.length; index++) {
    const element2 = ls2[index];
    observer.observe(element2)
}