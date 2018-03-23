// function move(x) {
//
//     let $op = $('#towns option:selected');
//
//     if (x < 0) {
//         $op.first().prev().before($op);
//     } else {
//         $op.last().next().after($op);
//     }
// }



function move(direction) {
    let townToMove = $('#towns option:selected');
    if (direction == -1) {
        townToMove.insertBefore(townToMove.prev());
    }
    if (direction == +1) {
        townToMove.insertAfter(townToMove.next());
    }
}