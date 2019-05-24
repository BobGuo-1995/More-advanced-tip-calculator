// begin

// create an object with the an array of bill and a method to calculate tip

var John = {
    fullname: 'John smith',
    bill: [124 ,48 ,268 ,180 ,42],
    tip: [],
    total: [],
    calcTip : function (){
        for (var i = 0; i < this.bill.length;i++){
            if(this.bill[i] < 50){
               this.tip.push(0.2 * this.bill[i]);
               this.total.push(0.2 * this.bill[i] + this.bill[i]);
            } else if (this.bill[i] >= 50 && this.bill[i] < 200){
               this.tip.push(0.15 * this.bill[i]);
               this.total.push(0.15 * this.bill[i] + this.bill[i]);
            } else{
               this.tip.push(0.1 * this.bill[i]);
               this.total.push(0.1 * this.bill[i] + this.bill[i]);
            }
        }
        
    }
};

var Mark = {
    fullname: 'Mark Boi',
    bill: [77,375,110,45],
    tip: [],
    total: [],
    calcTip : function (){
        for (var i = 0; i < this.bill.length;i++){
            if(this.bill[i] < 100){
               this.tip.push(0.2 * this.bill[i]);
               this.total.push(0.2 * this.bill[i] + this.bill[i]);
            } else if (this.bill[i] >= 100 && this.bill[i] <= 300){
               this.tip.push(0.1 * this.bill[i]);
               this.total.push(0.1 * this.bill[i] + this.bill[i]);
            } else{
               this.tip.push(0.25 * this.bill[i]);
               this.total.push(0.25 * this.bill[i] + this.bill[i]);
            }
        }
        
    }
};

// after this we will have the total and the tip
John.calcTip();
Mark.calcTip();

console.log(John);
console.log(Mark);

// 1 2 3 4 5 
var x = [];
// then we can do something like 
// calculating the average tips and see who is higher 
function averageTip (x){
    var sum = 0;
    var average;
    for (var j = 0 ; j < x.length ; j++){
       sum = x[j] + sum;
    }
    average = sum / x.length ;
    return average;  
}

var JohnAverageTip = averageTip(John.tip);
var MarkAverageTip = averageTip(Mark.tip);

if (JohnAverageTip > MarkAverageTip){
    console.log('John pays a higher tip ' + JohnAverageTip);
} else if (MarkAverageTip > JohnAverageTip){
    console.log('Mark pays a higher tip ' + MarkAverageTip);
} else {
    console.log('The average tip is the same');
}

// end 
