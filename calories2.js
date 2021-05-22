const DiscordJs = require(discord.js);
module.exports = {
    name: 'calories',
    description: ' calculus les calories',
    cooldown: 5,// the user have to wait 5s before resending the same command
    execute(message,args) {
        const qst = [
            "frist question are you man or woman?",
            "second question how olld are you?",
            "third question what is your wirght?(in kg plz)",
            "fourth question what is your height?(in m plz)"
        ]
        const info_user=[" "," "," "," "];
        message.channel.send('hello my frind i will try to calculat how much of calories you have to eat in th day\n but you have to answer some questions.');
        let conter=0;
        let conter2=0
        const filter = m => m.author.id === message.author.id;
        const collector = message.channel.createMessageCollector(filter,{
            max: qst.length,
            time: 60000});
        message.channel.send(qst[conter++]);
        collector.on('collect',m=>{
            info_user[conter2++]=m.content;
            if(conter<qst.length)
            message.channel.send(qst[conter++]);
        })
        collector.on("end",end => {
            if (info_user.length<qst.length) {
                message.channel.send("you didnt answer on all question");
            }
            else{
                var calori=0
                var sexe=info_user[0];
                var weight=Number(info_user[1]);
                var hight=Number(info_user[2]);
                var age=Number(info_user[3]);
                if (sexe==='man') {
                    calori=(13.7516*weight)+(500.33*hight)-(6.755*age)+66.473;
                }
                else if (sexe==="woman") {
                    calori=(9.5634*weight)+(184.96*hight)-(4.6756*age)+655.0955;
                }
                message.channel.send("you have to eat "+calori+" calories in day");
                calori=0;
            }
        }) 
    },
};