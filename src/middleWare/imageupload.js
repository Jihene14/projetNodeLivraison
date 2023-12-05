import  multer from 'multer';




const myStorage=multer.diskStorage({
    destination:'./upload',
    filename:(req,file,redirect)=>{
        console.log("ss")
       
        req.body.image=Date.now()+'.'+file.mimetype.split('/')[1]
        console.log(req.body.image);
        redirect(null,Date.now()+'.'+file.mimetype.split('/')[1]);
    }
    
})
const upload=multer({storage:myStorage});

export default upload;