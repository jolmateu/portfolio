let calculator = {
    mul (){
        return this.num1 * this.num2;
    },
    sum (){
        return this.num1 + this.num2;
    },
    read() {
        this.num1 = +prompt('Number1?', 0);
        this.num2 = +prompt('Number2?', 0);
    }
  };
  
  calculator.read();
  alert( 'Sum Result: ' + calculator.sum() );
  alert( 'Multiplication Result: ' + calculator.mul() );