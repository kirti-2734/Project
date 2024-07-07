import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import Product from "./model/product.js"
import User from './model/user.js';
import cors from "cors";
import bcryptjs from "bcryptjs"
const app = express()
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const port = 8080;
dotenv.config();
app.use(cors());
const Mongo = process.env.mongoDBURI;



//--------------------------------------------------DATA BASE CONNECTION----------------------------------------------------




try{
    main()
    .then(()=>{
        console.log("connection successfully");
     });
}
catch(err)
{
     console.log(err)
};

async function main() {
  await mongoose.connect(Mongo);

};




//------------------------------------------------------------------signup-------------------------------------



//-----------------------------------------Show DATA------------------------------------------------------------

app.get('/product', async(req,res)=>{


  try{

    const alldata =  await Product.find();
    res.status(200).json(alldata);

  }catch(err){

      console.log("error",err);
      res.status(500).json(err);
  }
       
}
)





//--------------------------------------------------------------------SignUp DATA Store------------------------------------------

app.post("/signup", async(req,res)=>{


 try{
       let {name, email, password} = req.body;
      
       let hashpassword =  await bcryptjs.hash(password,10);
       const user = await User.findOne({email});
      if(user)
      {
         return res.status(400).json({massege:"User alredy exists "});
      }

      const usernew = new User({
                name:name,
                email:email,
                password:hashpassword,
          })

       await usernew.save();
        res.status(200).json({massege:"User created Suceesfully", user:{
            _id:usernew._id,
            name:usernew.name,
            email:usernew.email,
          }});

  }catch(err){
        res.status(500).json({massege:"Internal Server error"});
 }
});


//----------------------------------------------------Login page----------------------------------------------------


app.post("/login",async(req,res)=>{

try{

   let {email,password} = req.body;
   let userFind = await User.findOne({email});
   console.log(userFind);
   const compare = await bcryptjs.compare(password,userFind.password);
   console.log(compare);
   if(!compare || !userFind)
   {
       return res.status(400).json({massege:"Invalid Email OR Password"});
   }
   else{

         res.status(200).json({massege:"User Login Succesfully",user:{
          _id:userFind._id,
          name:userFind.name,
          email:userFind.email
        }});
  }

}catch(err){

         res.status(500).json({massege:"Internal Server error"});
}

})

//--------------------------------------------------------Create New Product---------------------------------

app.post("/create",async(req,res)=>{

    let {image,name,price,type,discription,category} = req.body;
    try{

            const productnew = new Product({
                    image:image,
                    name:name,
                    price:price,
                    type:type,
                    discription:discription,
                    category:category
                  
                    });

            await productnew.save();
            res.status(200).json({massege:"Product created Suceesfully",});
    }catch(err){
            res.status(500).json({massege:"Internal Server error"});
    }

})


//----------------------------------------------------------------Delete User-----------------------------------------------

app.delete("/deleteUser/:id",async(req,res)=>{
      
  let{id} = req.params;
  console.log(id);
  try{

    let deluser = await Product.deleteOne({_id:id});
    console.log(deluser);
    res.status(200).json({massege:"Product Deleted Suceesfully",});

  }catch(err){

    res.status(500).json({massege:"Internal Server error"});
  }

});


//---------------------------------------------------------------Update User-----------------------------------------------------
app.get("/update/:id",async(req,res)=>{

       let{id} = req.params;
       try{

       let find =  await Product.findOne({_id:id});
       console.log(find)
        res.status(200).json({massege:"User find Suceesfully",user:{
          _id:find._id,
          image:find.image,
          name:find.name,
          price:find.price,
          type:find.type,
          discription:find.discription,
          category:find.category
        }});

       }catch(err){
        res.status(500).json({massege:"Internal Server error"});
       }
      
})


//------------------------------------------------------------------------Update 2 user-------------------------------

app.put("/update/new/:id",async(req,res)=>{

        let {id} = req.params;
        let {image,name,price,type,discription,category} =req.body;
        try{

       let edit =   await Product.updateOne({_id:id},{
            image:image,
            name:name,
            price:price,
            type:type,
            discription:discription,
            category:category

          });

        console.log(edit);
        res.status(200).json({massege:"Product Update Suceesfully"});
        }catch(err){

          res.status(500).json({massege:"Internal Server error"});

        }
})


//------------------------------------------------------------------Show Product-----------------------------------------------

app.get("/show/:id",async(req,res)=>{

     let {id} =  req.params;

     try{

      const showdata =  await Product.findOne({_id:id});
      res.status(200).json({massege:"Show User Suceesfully",showdata});
  
    }catch(err){
  
        console.log("error",err);
        res.status(500).json(err);
    }
         
  })


app.listen(port,()=>{

    console.log(`Server start on port ${port}`);
});