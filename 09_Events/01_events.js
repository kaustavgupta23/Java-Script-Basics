// ======== JAVASCRIPT EVENT HANDLING METHODS ========

// ========== METHOD 1 =============
// Inline Event Handler (inject inside HTML)
// Direct HTML approach - not recommended for complex applications
// <button id="owl" onclick="alert('owl clicked')">Click Me</button>

// ========== METHOD 2 =============
// DOM Property Assignment 
// this approach is a problem
// ye approach features kam deta hai
document.getElementById('owl').onclick = function(){
    alert("owl clicked");
}

// ========== METHOD 3 =============
// addEventListener (BEST APPROACH)
// Modern and recommended approach

//"""""""""" Event Propagation Examples """""""""":
// 1. bubbling -> false (default behavior)
document.getElementById('images').addEventListener('click', function(e){
    console.log("click inside the ul");
}, false);

// 2. capturing -> true
document.getElementById('images').addEventListener('click', function(e){
    // console.log("click inside the ul");
}, true);

document.getElementById('owl').addEventListener('click', function(e){
    console.log("owl clicked");
    e.stopPropagation();
}, false);

// ======== preventDefault() ===========
// google wli id lelo or mein nai chahta ki use click kre vo hame google pe le jaaye

document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault()
    console.log("google clicked");
}, false)

// ======== EVENT OBJECT PROPERTIES TO STUDY ========
// Basic Properties:
// - type: event type (click, mouseover, etc.)
// - timestamp: when event occurred
// - defaultPrevented: whether preventDefault() was called

// Target Properties:
// - target: element that triggered the event
// - toElement: element mouse is moving to (deprecated)
// - srcElement: IE equivalent of target (legacy)
// - currentTarget: element the event listener is attached to

// Position Properties:
// - clientX, clientY: position relative to viewport
// - screenX, screenY: position relative to screen

// Keyboard Modifiers:
// - altKey: Alt key pressed
// - ctrlKey: Ctrl key pressed
// - shiftKey: Shift key pressed
// - keyCode: key code (deprecated, use 'key' or 'code')

// ======== EVENT PROPAGATION ========
// 1. Event Capturing (top to bottom)
// 2. Event Bubbling (bottom to top)










// ======== OTHER APPROACHES (OLDER APPROACHES) ========

// METHOD 4: attachEvent (Legacy - Internet Explorer)
// Used in older browsers, now deprecated
// document.getElementById('owl').attachEvent('onclick', function(){
//     alert('owl clicked - IE');
// });

// METHOD 5: jQuery - On Method
// Popular library approach
// $('#owl').on('click', function(){
//     alert('owl clicked with jQuery');
// });