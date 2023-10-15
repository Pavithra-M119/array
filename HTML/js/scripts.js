let users=
[
    {
        id:4,
        name:"liya",
        dept:"IT",
        active:true
    },
    {
        id:5,
        name:"divya",
        dept:"CSE",
        active:true
    },
    {
        id:6,
        name:"varsha",
        dept:"ECE",
        active:false
    }
];
console.log(users);

for(let i=0;i<users.length;i++)
{
    console.log(users[i]);
}
//for printing each key 
for(let i=0;i<users.length;i++)
{
    console.log("user details are"+i+"....");
    //console.log(users[i].id,users[i].name,users[i].dept,users[i].active),to print in column wise
   // console.log(users[i].name)
    //console.log(users[i].dept)
    //console.log(users[i].active)
    let result=" "

    for(let temp in users[i] )
    {
        result+=users[i][temp]+"||";//to print in same row
    }
    console.log(result);
}
var arr=["a","b","c","d"]
for(let i in arr)
{
    console.log(i,arr[i]);
}

function processmydata()
{
    //old way..
    console.log(document.forms.length);//no. of forms in html
    let username=document.forms[3].txtUsername.value;
    let password=document.forms[3].txtPasswordvalue;
    console.log(username,password);
}
