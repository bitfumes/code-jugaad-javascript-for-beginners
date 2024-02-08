

let user = {
    _password : "Secret"
}

const option = {
    get(target, prop) {
        if(prop.startsWith("_"))
            throw new Error("Access Denied")
        return target[prop]
    },
    ownKeys(target){
        return Object.keys(target).filter(key => !key.startsWith("_"))
    },
    set(target, prop, val){
        if(prop === "salary")
            return false
        target[prop] = val
        return true
    }
}

user = new Proxy(user, option);
user.name = "Sarthak"
user.age = 23
console.log(Object.keys(user));
console.log(user._password);