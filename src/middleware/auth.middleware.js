import JSONtoken from 'jsonwebtoken'

export const tokenVerify = ((req, res, next)=>{
    const auth = req.headers["authorization"] 

    if(!auth){
        return res.status(400).json({
            meta: {
                code: "AUTH-404",
                message: "Missing JWT"
            },
            data: {}
        })
    }

    const token = auth.split(" ")[1]
    try{
       JSONtoken.verify(token, "masukaja")
    }catch{
        return res.status(401).json({
            meta: {
                code: "AUTH-401",
                message: "Invalid Bearer Token"
            },
            data: {}
        })
    }

    return next()
})