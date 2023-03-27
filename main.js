

const person = {
    first_name: 'Monica',
    last_name: 'Geller',
    phone: '915-996-9739',
    email: 'monica37@gmail.com',
    address: {
        street: {
            street_num: '495',
            street_name: 'Grove Street',
        },
        city: 'New York',
        country: 'USA',
    },
};
     for(let a in person){
         if(person[a] instanceof Object==false){
            console.log(a+"   => "+person[a])
}

      else if(person[a] instanceof Object){
         for(let b in person[a]){
            if(person[a][b] instanceof Object==false){
            console.log(b+"   => "+person[a][b])
}

         else{
               for(let c in person[a][b]){
        
            console.log(c+" =>   "+person[a][b][c]);
             }
         }
       }
     }
}
