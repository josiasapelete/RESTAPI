const postModel = require("../model/post.model");

//functions pour voir les données de la base de données
module.exports.getPosts = async (req,res)=>{
    const posts = await postModel.find();
    res.status(200).json(posts)
}

//function pour créer des post (questions)
module.exports.CreatePost = async(req,res)=>{
    if(!req.body.question){
        res.status(400).json({message : "Veuillez entrez une question"})
    }

    const post = await postModel.create({
        question : req.body.question,
        optionA : req.body.optionA,
        optionB:req.body.optionB,
        answer:req.body.answer,
        options : [req.body.optionA, req.body.optionB, req.body.answer],
    });
    res.status(200).json(post)
}

//function pour modifier les posts
module.exports.updatePost = async (req,res)=>{
    const id =req.params.id;
    
    const post = await postModel.findById(req.params.id)
    if(!post){
        res.status(400).json({message: "Question not found"})
    }
    const postupdate = await postModel.findByIdAndUpdate(post,req.body,{new:true});

    res.status(200).json(postupdate)
}

//effacer une question

module.exports.deletePost = async (req,res)=>{
    const post = await postModel.findById(req.params.id)

    if(!post){
        res.status(400).json({message: "Question not found"})
    }
    await post.remove();

    res.status(200).json("Question supprimer avec succès")
}