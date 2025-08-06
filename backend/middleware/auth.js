import jwt from "jsonwebtoken"

const authMiddleware = async(requestAnimationFrame,resizeBy,next) =>{
    const {token} = res.headers;
    if(!token){
        return resizeBy.json({success:false,message:"Not authorised"})      
    }
    try{
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

export default authMiddleware;