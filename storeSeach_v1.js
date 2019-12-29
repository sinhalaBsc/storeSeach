

function storeSearch(){
  this.datalocation; 
  this.selectMethod ={

  };
  this.fetchFromObject = function(obj, prop) {

    if(typeof obj === 'undefined') {
        return false;
    }

    var _index = prop.indexOf('.')
    if(_index > -1) {
        return this.fetchFromObject(obj[prop.substring(0, _index)], prop.substr(_index + 1));
    }

    return obj[prop];
  };
  this.errorHandler= function(){

     if(Array.isArray(this.datalocation)){
        
     }else{
       console.log("data loacation must be array")
     } 
  };
  this.returnDataObject = function(index){
 
       if(this.datalocation[index] === "undefined"){
         return {};
       }else{
         return this.datalocation[1];
       }   
       
  };
  this.selectObject = function(key,value){
    var index =  this.datalocation.findIndex(function(e){ return e[key]==value});
    return this.datalocation[index];
  };
  this.selectFetchObject = function(key,value){
    var index =  this.datalocation.findIndex((e)=>{ return  this.fetchFromObject(e,key)==value;});
    return this.returnDataObject(index);
  };

}

var searchRates = new storeSearch();

var data =[
  {id:{n:1,m:2},name:"Samadhi"},
  {id:{n:2,m:2},name:"Pasindu"},
  {id:{n:3,m:2},name:"Rathnayake"},
  {id:{n:4,m:2},name:"Piyasiri"},
];

searchRates.datalocation = data;

var select = searchRates.selectObject("name","Samadhi");
console.log("select : ",select);

// eg for how to make "selectFetchObject" function when we have object flow
var selectFetch = searchRates.selectFetchObject("id.n",3);
console.log("select : ",selectFetch);


searchRates.errorHandler(); // for only debug


