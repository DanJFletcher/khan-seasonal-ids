[
    
/**************************
 * PASS
 * ************************/
 
{
    code: "<style>#summer {color: red;}  #winter {color: blue;}</style>",
    steps: ["pass"]
},

{   
    code: "<style>#summer {background: rgb(255, 179, 0);}  #winter {background: rgb(0, 17, 255);}</style>",
    steps: ["pass"]
},


{   
    code: "<style>#summer {color: rgb(255, 179, 0);}  #winter {color: rgb(0, 17, 255);}</style>",
    steps: ["pass"]
},


/**************************
 * FAIL
 * ************************/
    
{
    code: "<style>#summer {color: rgb();}  #winter {color: rgb();}</style>",
    steps: ["fail"]
},


{
    code: "<style>#summer {color: r;}  #winter {color: r;}</style>",
    steps: ["fail"]
},


{
    code: "<style>#summer {color: rgb;}  #winter {color: rgb;}</style>",
    steps: ["fail"]
},


{   code: "<style>#summer {color: rgb(;}  #winter {color: rgb(;}</style>",
    steps: ["fail"]
},


{   
    code: "<style>#summer {color: red;}  #winter {color: blue;}</style><body><h1 id='Summer'></h1><h1 id='Winter'></h1>",
    steps: ["Hm, did you remove the summer/winter ids in the HTML or change their spelling? Please keep them the same, that helps us grade this challenge!"]
},


{   
    code: "<style>#summer {color: rgb(300, 179, 0);}  #winter {color: rgb(0, 17, 255);}</style>",
    steps: ["Hm, are the colors in your properties all valid? They should either be color names or valid RGB colors of the form `rgb(n, n, n)` with each number between 0 to 255."]
},

{   
    code: "<style>h2 {color: red;}</style>",
    steps: ["Check your selector. You should be using a `id` selector like shown in the hint code, on the right."]
},

{   
    code: "<style>h1 {color: red;}</style>",
    steps: ["Check your selector. You should be using a `id` selector like shown in the hint code, on the right."]
},

{   
    code: "<style>p {color: red;}</style>",
    steps: ["Check your selector. You should be using a `id` selector like shown in the hint code, on the right."]
},

{   
    code: "<style>#\"summer\" {color: red;}</style>",
    steps: ["Make sure your id selector does not have any quotes. It should look like this:\n `#summer`"]
},


{   
    code: "<style>#\"winter\" {color: red;}</style>",
    steps: ["Make sure your id selector does not have any quotes. It should look like this:\n `#winter`"]
}





]