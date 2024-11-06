//immediatly invoked function expression 

(function(){
    function start(){
        console.log('server started ');
    }
    window.addEventListener("load",start);

})();