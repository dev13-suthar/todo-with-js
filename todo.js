   let btn = document.getElementById("add_btn");
    btn.addEventListener("click",function(e){
            console.log(e);
            e.preventDefault();
            let task = document.getElementById("Add-todo").value;
            let todo = document.getElementById("Add-dsc").value;
            localStorage.setItem("todo",JSON.stringify([task,todo]));
            let b = document.createElement("div");
            let cont = document.getElementsByClassName("container")[0];
            cont.after(b);
            b.innerHTML = `<div> ${todo}</div>`;
        });

        let dltbtn = document.getElementById("dlt_btn");
        dltbtn.addEventListener("click",function(d){
            console.log(d);
            localStorage.clear;

        })

        btn.addEventListener("click",function(){
            let alert1 = document.getElementById("alert1");
            let task = document.getElementById("Add-todo");
            let todo = document.getElementById("Add-dsc");
            task.value = "";
            todo.value = ""
            alert1.classList.toggle("show");
            setTimeout(() => {
                alert1.classList = "alert alert-success alert-dismissible fade hide"
                alert1.style.border = "5px dotted red";
            }, 2000);
        })
