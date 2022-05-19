import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'help';
    summary = 'Send help...';
    precondition: Permission = '';
    cooldown = 3;
    module = 'General';
    
    execute = async(ctx: CommandContext) => {
        await ctx.channel.send(`**Under Development**, It will introduce soon!`);
    }
}
