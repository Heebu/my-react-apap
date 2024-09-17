import React from "react";

function MemoComponent({name}) {

    console.log('memo component');
    return (
        <div>this is {name}</div>
    )
}

// eslint-disable-next-line no-undef
export default React.memo(MemoComponent);