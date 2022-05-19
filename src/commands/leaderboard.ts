import { Command, CommandContext, Permission } from './command';

export default class LeaderboardCommand implements Command {
    name = 'leaderboard';
    summary = `Get a link to the server's leaderboard`;
    precondition: Permission = '';
    cooldown = 3;
    module = 'Leveling';
    
    execute = async(ctx: CommandContext) => {
        ctx.channel.send(`**Under Development**, It will introduce soon!`);
    }
}
