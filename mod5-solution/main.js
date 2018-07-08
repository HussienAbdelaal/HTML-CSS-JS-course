document.addEventListener("DOMContentLoaded",
    function (event){
        document.querySelector("button").addEventListener("click", function(){
            $ajaxUtils.sendGetRequest("server.txt", function(res){
                var message = res.firstName + " " + res.secondName + " is " + res.age + " years old!"
                document.querySelector("#content").innerHTML = message ;
            });
        });
    }
);



