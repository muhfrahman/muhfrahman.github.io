function setUpEvents(){
    //Skills Buttons
    const btnhtml = document.getElementById("btnhtml");
    const btncss = document.getElementById("btncss");
    const btnjs = document.getElementById("btnjs");
    const btnphp = document.getElementById("btnphp");
    const btnsql = document.getElementById("btnsql");
    
    //Skills explanations
    const skillhtml = document.getElementById("html");
    const skillcss = document.getElementById("css");
    const skilljs = document.getElementById("js");
    const skillphp = document.getElementById("php");
    const skillsql = document.getElementById("sql");
    const skills = document.getElementsByClassName("skill");
    
    //Gear Capabilities
    const gearCapabilities = document.getElementById("capabilities");
    const gear = document.getElementById("get"); 
    
    //Level of Understanding
    const htmlLevel = document.getElementById("htmlLevel");
    const cssLevel = document.getElementById("cssLevel");
    const jsLevel = document.getElementById("jsLevel");
    const phpLevel = document.getElementById("phpLevel");
    const sqlLevel = document.getElementById("sqlLevel");
    const level = document.getElementsByClassName("level");

    let hideBorderSkills = () =>{
        btnhtml.style.borderBottom = "none";
        btncss.style.borderBottom = "none";
        btnjs.style.borderBottom = "none";
        btnphp.style.borderBottom = "none";
        btnsql.style.borderBottom = "none";
    }
    let hoverBorderSkills = () =>{
        btnhtml.addEventListener("mouseover",function(){
            btnhtml.style.borderBottom = "solid 1px black";
        });
        btnhtml.addEventListener("mouseout",function(){
            btnhtml.style.borderBottom = "none";
        });

        btncss.addEventListener("mouseover",function(){
            btncss.style.borderBottom = "solid 1px black";
        });
        btncss.addEventListener("mouseout",function(){
            btncss.style.borderBottom = "none";
        });

        btnjs.addEventListener("mouseover",function(){
            btnjs.style.borderBottom = "solid 1px black";
        });
        btnjs.addEventListener("mouseout",function(){
            btnjs.style.borderBottom = "none";
        });

        btnphp.addEventListener("mouseover",function(){
            btnphp.style.borderBottom = "solid 1px black";
        });
        btnphp.addEventListener("mouseout",function(){
            btnphp.style.borderBottom = "none";
        });

        btnsql.addEventListener("mouseover",function(){
            btnsql.style.borderBottom = "solid 1px black";
        });
        btnsql.addEventListener("mouseout",function(){
            btnsql.style.borderBottom = "none";
        });
    }
    let hideSkills = () =>{
        for(i = 0;i<skills.length;i++){
            skills[i].style.display = "none";
        }
    }

    hideSkills();
    btnhtml.addEventListener("click", function(){
        hideSkills();
        hideBorderSkills();
        hoverBorderSkills();
        gearCapabilities.style.display = "none";
        btnhtml.addEventListener("mouseout",function(){
            btnhtml.style.borderBottom = "solid 1px black";
        });
        btnhtml.style.borderBottom = "solid 1px black";
        skillhtml.style.display = "block";
    });

    btncss.addEventListener("click", function(){
        hideSkills();
        hideBorderSkills();
        hoverBorderSkills();
        gearCapabilities.style.display = "none";
        btncss.addEventListener("mouseout",function(){
            btncss.style.borderBottom = "solid 1px black";
        });
        btncss.style.borderBottom = "solid 1px black";
        skillcss.style.display = "block";
    });

    btnjs.addEventListener("click", function(){
        hideSkills();
        hideBorderSkills();
        hoverBorderSkills();
        gearCapabilities.style.display = "none";
        btnjs.addEventListener("mouseout",function(){
            btnjs.style.borderBottom = "solid 1px black";
        });
        btnjs.style.borderBottom = "solid 1px black";
        skilljs.style.display = "block";
    });

    btnphp.addEventListener("click", function(){
        hideSkills();
        hideBorderSkills();
        hoverBorderSkills();
        gearCapabilities.style.display = "none";
        btnphp.addEventListener("mouseout",function(){
            btnphp.style.borderBottom = "solid 1px black";
        });
        btnphp.style.borderBottom = "solid 1px black";
        skillphp.style.display = "block";
    });

    btnsql.addEventListener("click", function(){
        hideSkills();
        hideBorderSkills();
        hoverBorderSkills();
        gearCapabilities.style.display = "none";
        btnsql.addEventListener("mouseout",function(){
            btnsql.style.borderBottom = "solid 1px black";
        });
        btnsql.style.borderBottom = "solid 1px black";
        skillsql.style.display = "block";
    });

    let createLevel = (value,target) =>{
        for(i=0;i<value;i++){
            let circle = document.createElement('div');
            circle.className = "circle";
            circle.style.width= "10px";
            circle.style.height= "10px";
            circle.style.background= "black";
            circle.style.display= "inline-block";
            target.appendChild(circle);

            let space = document.createElement('div');
            space.className = "space";
            space.style.width= "5px";
            space.style.height= "10px";
            space.style.background= "white";
            space.style.display= "inline-block";
            target.appendChild(space);
        }
        let persentage = document.createElement('div');
        persentage.className = "values";
        persentage.innerHTML = " ( "+ value * 10 +"% )";
        persentage.style.display= "inline-block";
        target.appendChild(persentage);
        
    }
        createLevel(9,htmlLevel);
        createLevel(8,cssLevel);
        createLevel(8,jsLevel);
        createLevel(8,phpLevel);
        createLevel(7,sqlLevel);
    for(i=0;i<level.length;i++){
        level[i].style.marginLeft= "2.5em";
    }
    

}

window.onload = function() {
    setUpEvents();
};
    