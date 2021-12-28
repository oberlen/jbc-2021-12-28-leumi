function areAllPasswordsLegal(passwords) {
    for(const item of passwords) {
        if(item.length < 6) {
            return false;
        }
    }
    return true;
}

const passwords = ["CoolPassword", "NicePassword", "ABCD1234", "BlaBla"];
if(areAllPasswordsLegal(passwords)) {
    document.write("All passwords are legal.");
}
else {
    document.write("Not all passwords are legal.");
}
