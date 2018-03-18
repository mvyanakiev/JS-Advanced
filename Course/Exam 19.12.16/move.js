function move(x) {

    let $op = $('#towns option:selected');

    if (x < 0) {
        $op.first().prev().before($op);
    } else {
        $op.last().next().after($op);
    }
}

