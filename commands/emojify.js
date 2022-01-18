module.exports = {
    name : 'emojify',
    aliases: ['emoji', 'ef'],
    description : 'Make any sentence out of emoji\'s',

    run: async(client, message, args) => {
        let sentence = '';
const words = args[0];
if(!words) {
message.reply({content:'You must specify what to emojify!',  allowedMentions: { repliedUser: false }});
return;}
        let chars = {
            char1: ':one:',
            char2: ':two:',
            char3: ':three:',
            char4: ':four:',
            char5: ':five:',
            char6: ':six:',
            char7: ':seven:',
            char8: ':eight:',
            char9: ':nine:',
            "char+": ':heavy_plus_sign:',
            "char-": ':heavy_minus_sign:',
            "char*": ':asterisk:',
            "char÷": ':heavy_division_sign:',
            "char#": ':hash:',
            "char!": `:exclamation:`
        }
        
        for(let e of args.join(' ')) {
            if(/([a-z])/gim.test(e)) sentence += `:regional_indicator_${e.toLowerCase()}:`
            else if(/\s/.test(e)) sentence += ':blue_square:'
            else if(/([1-9])/.test(e) || ['+', '-', '*', '#', '!', '÷'].includes(e)) sentence += chars[`char${e}`]
            else sentence += e
        }
        
        message.reply({content:`${sentence}`,  allowedMentions: { repliedUser: false }})                                                                        
    }
}