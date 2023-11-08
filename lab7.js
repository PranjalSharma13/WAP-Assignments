

// 1. Arrow Function

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList:function() {

        this.students.forEach( student=> {

            console.log(this.title + ": " + student

            );

        });

    } 
};
group.showList();

//2. Self Pattern

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList:function() {
        const self=this;

        this.students.forEach(function (student) {

            console.log(self.title + ": " + student

            );

        });

    } 
};
group.showList();

// 3. Bind use in setTimeout,setInterval,onClick     bind doesnt invoke function,it'll return another function

let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {

        this.students.forEach(function (student) {

            console.log(this.title + ": " + student );

        }.bind(this));

    }

};

group.showList();

// 4. Using apply this keyword to be sth else
let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {
        this.students.forEach((stu)=>
        {
            (function(student){
                console.log(this.title+":"+student)
            }).call(this,stu);
        })
    }

};
group.showList();



//5 Using Apply
let group = {

    title: "Our Group",

    students: ["John", "Pete", "Alice"],

    showList: function () {
        this.students.forEach((stu)=>
        {
            (function(student){
                console.log(this.title+":"+student)
            }).apply(this,[stu]);
        })
    }

};
group.showList();


//Question  2
let i = 0;

setTimeout(() => console.log(i), 100); // ?

// assume that the time to execute this function is >100ms

for (let j = 0; j < 100000000; j++) {

    i++;

}

//Ans: after loop

