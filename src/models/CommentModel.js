module.exports = class CommentModel {
    constructor(id,name,email,website,message){
        this.id = id;
        this.name = name;
        this.email = email;
        this.website = website;
        this.message = message;
    }
}