

//     function handleScroll(node) {

//         if (!node || node.nodeType !== 1) {
//             throw new Error(node + ' is not DOM element');
//         }
//             handleScroll(node);
        


//         window.onscroll = function() {
//             if (window.scrollY > node.offsetTop) {
//                 if (node.style.position !== 'fixed') {
//                     node.style.position = 'fixed';
//                     node.style.top = '0';
//                 }
//             } else {
//                 if (node.style.position === 'fixed') {
//                     node.style.position = '';
//                     node.style.top = '';
//                 }
//             }
//         };

//     }
    



// let el = document.getElementById('float-block');
// handleScroll(el);

// export default handleScroll;