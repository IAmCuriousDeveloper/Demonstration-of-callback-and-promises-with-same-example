
//==============C a l l    B a c k S========================
//callbacks are function which are being called inside a function. passed by another function function as a parameter.

// const posts = [
// { title:'post one ',body:'this is post one '

// },

// { title:'post two ',body:'this is post one '

// }
// ];

// function createPost (post ,callback){
//     setTimeout(function(){
//         posts.push(post);
//         callback();
//     },2000);
// }




// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li> ${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     },1000);
// }



// createPost({title:'post three',body:'this is post three'},getPosts);



//same program with promises

//===========================P r o m i s e s==============================


const posts = [
    { title:'post one ',body:'this is post one '
    
    },
    
    { title:'post two ',body:'this is post one '
    
    }
    ];

//for promises we have to instantiate the promise inside a function with two default parameter resolve ,reject ..-> resolve is for another function with can be called after resolved called and reject is for error handling 
//when we call the function which contain promises we use .then.catch
//here .then is for another function execution and .catch is for error handling.

    function createPost (post){
            return new Promise(function(resolve,reject){
                setTimeout(function(){
                    posts.push(post);
                const error = true;
                if(error){
                        resolve();
                }else{
                        reject('error : something went worng')
                }
                },2000);
            });
        }
    
            function getPosts(){
                setTimeout(function(){
                    let output = '';
                    posts.forEach(function(post){
                        output += `<li> ${post.title}</li>`;
                    });
                    document.body.innerHTML = output;
                },1000);
            }
                   
    
     createPost({title:'post three',body:'this is post three'}).then((result) => {
         getPosts();
         
     }).catch((err) => {
        console.log(err);
     });










