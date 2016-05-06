

staticTest($._("Color the winter heading"), function() {
    
    // ---------------------- DESCRIPTION / HINT -------------------------------
    // =========================================
    
    var result = null;
    var descrip = $._("This webpage describes the favorite seasons of Olaf, a sun-loving snowman. Both of the `<*h2*>`'s have `*id*`'s, but there are no CSS rules for styling them yet. Add 2 rules that color the headings.");
    var displayP = " #_ {\n    _: _;\n }";
    
    // --------------------------- MESSAGES ------------------------------------
    // ====================================
    isValidColorM = "Hm, are the colors in your properties all valid? They should either be color names or valid RGB colors of the form `rgb(n, n, n)` with each number between 0 to 255.";
    removedIdM = "Hm, did you remove the summer/winter ids in the HTML or change their spelling? Please keep them the same, that helps us grade this challenge!";
    
    
    // --------------------------- PATTERNS ------------------------------------
    // ====================================
    
    var summerColorP = "#summer { color: $color; }";
    var summerBackgroundP = "#summer { background-color: $color; }";
    var summerBackground2P = "#summer { background: $color; }";
    
    var winterColorP = "#winter { color: $color; }";
    var winterBackgroundP = "#winter { background-color: $color; }";
    var winterBackground2P = "#winter { background: $color; }";
    
    var summerId = "[id=summer]";
    var winterId = "[id=winter]";
    
    result = allPass(
        anyPass(cssMatch(summerColorP),
                cssMatch(summerBackgroundP),
                cssMatch(summerBackground2P)),
        anyPass(cssMatch(winterColorP),
                cssMatch(winterBackgroundP),
                cssMatch(winterBackground2P)));
    
    
    if (passes(result)) {
        result = allPass(
            anyPass(cssMatch(summerColorP, isValidColor("$color")),
                    cssMatch(summerBackgroundP, isValidColor("$color")),
                    cssMatch(summerBackground2P, isValidColor("$color"))
                    ),
            anyPass(cssMatch(winterColorP, isValidColor("$color")),
                    cssMatch(winterBackgroundP, isValidColor("$color")),
                    cssMatch(winterBackground2P, isValidColor("$color"))
                ));
        if (fails(result)) {
            result = fail($._(isValidColorM));
        }
    } else if (fails(result)) {
        if (!htmlMatches(summerId) || !htmlMatches(winterId)) {
            result = fail($._(removedIdM));
        } 
    }
    assertMatch(result, descrip, displayP);
});

/*
We can't do this since we can't check which ID is what.
staticTest($._("Color something else"), function() {
    var result = null;
    var descrip = $._("Now add an ID to one of the paragraphs, and make a style rule for coloring that element.");
    var displayP = "_";
    
    // something must have an id
    htmlMatch("p[id]");
    
    var summerColorP = "#id { color: $1; }";
    var summerBackgroundP = "#summer { background-color: $1; }";
    var winterColorP = "#winter { color: $1; }";
    var winterBackgroundP = "#winter { background-color: $1; }";
    
    result = allPass(
        anyPass(cssMatch(summerColorP), cssMatch(summerBackgroundP)),
        anyPass(cssMatch(winterColorP), cssMatch(winterBackgroundP)));
    
    assertMatch(result, descrip, displayP);
});
*/