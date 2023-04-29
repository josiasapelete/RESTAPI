const postModel = require("../model/post.model");

//functions pour voir les données de la base de données
module.exports.getPosts = async (req, res) => {
    const posts = await postModel.find();
    res.status(200).json(posts)
}

//functions pour voir les données de la base de données ayant le même type
// module.exports.getPostsByType = async (req, res) => {
//     const type = req.params.type;
//     try {
//         const posts = await postModel.find({ type: type });
//         res.status(200).json(posts)
//     } catch (error) {
//         console.log(error)
//     }

// }


module.exports.getPostsByType = async (req, res) => {
  try {
    const type = req.params.type;

    const posts = await postModel.find({ type: type });

    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

//function pour avoir une seule question
module.exports.getPost = async (req, res) => {
    const post = await postModel.findById(req.params.id)

    if (!post) {
        res.status(400).json({ message: "Question not found" })
    }

    res.status(200).json(post)
}

//function pour créer des post (questions)
module.exports.CreatePost = async (req, res) => {
    if (!req.body.question) {
        res.status(400).json({ message: "Veuillez entrez une question" })
    }

    const post = await postModel.create({
        type: req.body.type,
        question: req.body.question,
        optionA: req.body.optionA,
        optionB: req.body.optionB,
        answer: req.body.answer,
        options: [req.body.optionA, req.body.optionB, req.body.answer]
    });
    res.status(200).json(post)
}

//function pour modifier les posts
module.exports.updatePost = async (req, res) => {
    const id = req.params.id;

    const post = await postModel.findById(req.params.id)
    if (!post) {
        res.status(400).json({ message: "Question not found" })
    }

    const postupdate = await postModel.findByIdAndUpdate(
        post,
        {  type: req.body.type,
            question: req.body.question,
            optionA: req.body.optionA,
            optionB: req.body.optionB,
            answer: req.body.answer,
            options: [req.body.optionA, req.body.optionB, req.body.answer],
        },
        { new: true }
    );

    res.status(200).json(postupdate)
}

//effacer une question
const ObjectID = require('mongoose').Types.ObjectId;


module.exports.deletePost = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) {
        return res.status(400).send("ID unknow :" + req.params.id)
    }
    await postModel.findByIdAndRemove(req.params.id);

    return res.status(200).json({ message: 'Post deleted successfully' });

};
