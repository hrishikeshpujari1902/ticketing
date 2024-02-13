import mongoose from "mongoose";
import { Password } from "../../services/password";


//An interface to describe he properties
//that are required to create a new User

interface UserAttrs {
    email: string;
    password: string;

}

//An interface that describes the properties 
//that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc;
}

// an Interface that describes the properties that a Single USer Document has
interface UserDoc extends mongoose.Document {
    email: string;
    password: string;
}
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    //to convert document to Json with properties we want 
    toJSON: {
        transform(doc, ret) {
            delete ret.password;
            delete ret.__v;
            ret.id = ret._id;
            delete ret._id;
        }
    }
});
userSchema.pre('save', async function (done) {
    if (this.isModified('password')) {
        const hashed = await Password.toHash(this.get('password'));
        this.set('password', hashed);
        done();
    }

});

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs);
}
const User = mongoose.model<UserDoc, UserModel>('User', userSchema);


export { User };