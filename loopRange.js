function range( start, end, step ){
   var a = [ start ] ;
   var b = start ;
   if ( start === undefined || end === undefined || step === undefined || start > end || step <= 0 ){ 
     a = [] ;
   } else {
     while ( b < end ) {
       b += ( step || 1 ) ;
       a.push( b ) ;
     }
   }
   return a;
 }
 console.log(range(0, 10, 2));
 console.log(range(10, 30, 5));
 console.log(range(-5, 2, 3));