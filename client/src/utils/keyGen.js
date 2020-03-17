export default {
    generate: function() {
        var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowercase = uppercase.toLowerCase();
        var numbers = "0123456789";
        var specialChars = "~!@#$%^&*()-_=+[{]};:,<.>/?|";
        var password = "";
        var list = [uppercase, lowercase, numbers, specialChars];
        var passwordLength = 16
        while(password.length<passwordLength){
            var i = Math.floor(Math.random() * (list.length));
            var j = Math.floor(Math.random() * (list[i].length));
            password=password + list[i][j];
        }
        return password
    }
}