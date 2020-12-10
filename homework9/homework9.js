//  task1
let $a = $("a");
if ( $a.attr("href").match(/^https:\/\//) ) {
    $a.attr("target", "_blank");
}


//  task2
let $headers = $("h2.head");
$headers.css("background", "green");
$inner = $headers.find(".inner");
$inner.css("fontSize", "35px");


//  task3
let $html = $("h3").next("div");
$html.each(function(i, el) {
    $("h3")[i].before(el);
});


//  task4
let $checkboxes = $("#checkboxes input");
$checkboxes.each(function() {
    $(this).on("change", function() {
        let $n = 0;
        $checkboxes.each(function() {
            if ( $(this).prop("checked") ) {
                $n++;
            }
        });
        if ($n >= 3) {
            $checkboxes.each(function() {
                $(this).prop("disabled", true);
            });
        };
    })
})