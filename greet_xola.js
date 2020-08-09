const chalk = require('chalk')

const figlet = require('figlet')

const greet = require('./greet');

//const styledMessage1 = chalk.bgGreen.black(greet('Xola'))
const styledMessage2 = figlet.text(greet('Noluvuyo'),{
    //font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width:80,
    whitespaceBreak:true
}, function(err, data){
    if(err){
        console.log('error')
        console.dir(err)
        return
    }
    console.log(chalk.bgGreen.black(data))
})


//console.log(styledMessage1)
//console.log(styledMessage2)