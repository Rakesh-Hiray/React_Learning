/////// NORMAL FUNCTION //////////////////////////////////

class ArrowFunc {
    sample(){
        function abc(){
            console.log(`Calling Demo ABC`);
        }
        abc()

        const fn1 = abc
        fn1();
    }
}

const ad = new ArrowFunc()
ad.sample()


/////// ARROW FUNCTION ////////////////////////////////////

const ArrowDemo = () => console.log("InArrwDemo");
ArrowDemo()
