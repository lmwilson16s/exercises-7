function redundantReturn(){
    const myStr= "str";

    function returnString() {
        console.log(myStr);
    }

    returnString();
}

redundantReturn


